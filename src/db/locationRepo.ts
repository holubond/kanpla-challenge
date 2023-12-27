import { DbTree } from "./dbModel"
import { searchForm } from "@/utils/searchForm"
import { childrenOf, includeBranch, parseTree } from "./utils"
import { DB1 } from "./data"

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
  private rawData: DbTree

  constructor(rawData: DbTree) {
    this.rawData = rawData
  }

  /**
   * Helper function returning mock data.
   */
  async getAllData(): Promise<DbTree> {
    // Simulating a DB access
    const data = await new Promise<DbTree>((resolve) => {
      resolve(Object.freeze(this.rawData))
    })

    return parseTree(data)
  }

  /**
   * Returns a valid tree of mock data filtered by `name`.
   * 
   * In practice, this would likely (or hopefully) be performed in a database.
   */
  async getLocationsInGroupsByName(name: string): Promise<DbTree> {
    const fullTree = await this.getAllData()
    const allNodes = Object.entries(fullTree.groups).concat(Object.entries(fullTree.locations)).map(([id, node]) => ({ id, ...node }))
    const roots = allNodes.filter(node => Object.entries(node.parents).length === 0)

    // Use lowercase unhyphenised form of search
    name = searchForm(name)

    let filteredTree: DbTree = { groups: {}, locations: {}, partnerId: fullTree.partnerId }

    for (const root of roots) {
      let nodesToExplore = [root]
      
      while (true) {
        const exploredNode = nodesToExplore.pop()
        if (exploredNode === undefined) break

        const exploredName = searchForm(exploredNode.name)
        if (exploredName.includes(name)) {
          // Include node, ancestors, and all its children
          includeBranch(exploredNode, filteredTree, allNodes)
          continue
        }

        const childrenToExplore = childrenOf(exploredNode, allNodes)
        nodesToExplore.push(...childrenToExplore)
      }
    }

    return filteredTree
  }
}

export const locationRepo: LocationRepo = new InMemoryLocationRepo(DB1)