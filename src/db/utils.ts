import { DbNode, DbNodeWithId, DbTree } from "./dbModel";

/**
 * Parses a potentially invalid `unsafeTree` and returns the valid subset.
 * 
 * A tree is created using a bottom-up approach. If an invalid node (>2 parents, non-existent parents or part
 *  of a cycle ) is detected, the whole subtree is ignored and a warning is logged. 
 */
export function parseTree(unsafeTree: DbTree): DbTree {
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

/**
 * Returns nodes of `allNodes` whose parent is `node`. Expects `allNodes` to be in a valid format (single parent).
 */
export function childrenOf(parent: DbNodeWithId, allNodes: DbNodeWithId[]): DbNodeWithId[] {
    return allNodes.filter(node => Object.keys(node.parents)[0] === parent.id)
}

/**
 * Adds the whole subtree defined by `subtreeRoot` and its ancestors to `targetTree`.
 * 
 * Expects a valid tree-like structure of `allNodes`.
 */
export function includeBranch(subtreeRoot: DbNodeWithId, targetTree: DbTree, allNodes: DbNodeWithId[]) {
    // Include subtree
    let nodesToAdd = [subtreeRoot]

    while (true) {
      const nodeToAdd = nodesToAdd.pop()
      if (nodeToAdd === undefined) break
  
      const children = childrenOf(nodeToAdd, allNodes)

      const { id, name, parents } = nodeToAdd
      if (children.length === 0) {
        targetTree.locations[id] = { name, parents }
    } else {
        targetTree.groups[id] = { name, parents }

        nodesToAdd.push(...children)
      }
    }

    // Include all ancestors 
    let ancestorId = Object.keys(subtreeRoot.parents).at(0)
    while (ancestorId !== undefined) {
      const ancestor = allNodes.find(node => node.id === ancestorId) as DbNodeWithId // Expects a valid `allNodes` tree
      targetTree.groups[ancestorId] = { name: ancestor.name, parents: ancestor.parents }
      ancestorId = Object.keys(ancestor.parents).at(0)
    }
  }