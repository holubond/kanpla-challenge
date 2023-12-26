import { DbTree, DbNode } from "./dbModel"
import { DB1, DB2, DB3, DB4, DB5, DB6 } from "./data"

/**
 * Repository abstracting the database layer
 */
export interface LocationRepo {
  getLocationsInGroupsByName(name: string): Promise<DbTree>
}

/**
 * In-memory implementation of the LocationRepo repository
 */
export class InMemoryLocationRepo implements LocationRepo {
  /**
   * Helper function returning mock data.
   */
  async getAllData(): Promise<DbTree> {
    // Simulating a DB access
    const data = await new Promise<DbTree>((resolve) => {
      resolve(structuredClone(DB1))
    })

    return parseTree(data)
  }

  /**
   * Returns a valid tree of mock data filtered by `name`.
   * 
   * In practice, this would likely (or hopefully) be performed in a database.
   */
  async getLocationsInGroupsByName(searchedName: string): Promise<DbTree> {
    // TODO add filtering
    return this.getAllData()
  }
}

/**
 * Parses a potentially invalid `unsafeTree` and returns the valid subset.
 * 
 * A tree is created using a bottom-up approach. If an invalid node (>2 parents, non-existent parents or part
 *  of a cycle ) is detected, the whole subtree is ignored and a warning is logged. 
 */
function parseTree(unsafeTree: DbTree): DbTree {
  const safeTree: DbTree = { groups: {}, locations: {}, partnerId: unsafeTree.partnerId }

  forLocations: for (const [locationId, location] of Object.entries(unsafeTree.locations)) {
    const locationParents = Object.keys(location.parents)

    if (locationParents.length > 1) {
      console.warn(`Location ${locationId} is not a valid node - too many parents`)
      continue
    }

    let ancestors: Map<string, DbNode> = new Map()

    let ancestorId = locationParents.at(0)
    while (ancestorId !== undefined) {
      // Explore ancestors until reaching root
      const ancestor: DbNode | undefined = unsafeTree.groups[ancestorId]
      if (ancestor === undefined) {
        console.warn(`Location ${locationId} has an ancestor ${ancestorId} that was not found`)
        continue forLocations
      }

      if (safeTree.groups[ancestorId] !== undefined) break // Ancestor already visited - might not be a perf improvement as it depends on the tree shape

      if (ancestors.has(ancestorId)) {
        console.warn(`Node ${ancestorId} is part of a cycle`)
        continue forLocations
      }

      const ancestorParents = Object.keys(ancestor.parents)
      if (ancestorParents.length > 1) {
        console.warn(`Group ${ancestorId} is not a valid node - too many parents`)
        continue forLocations
      }

      ancestors.set(ancestorId, ancestor)
      ancestorId = ancestorParents.at(0)
    }

    safeTree.locations[locationId] = location
    ancestors.forEach((ancestor, ancestorId) => {
      safeTree.groups[ancestorId] = ancestor
    })
  }

  return safeTree
}