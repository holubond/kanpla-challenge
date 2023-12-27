import { DbNodeWithId, DbTree } from "@/db/dbModel"
import { childrenOf } from "@/db/utils"

export type TreeNode = {
    id: string,
    name: string,
    children: TreeNode[],
}


export function nodesFromDbNodes(dbTree: DbTree): TreeNode[] {
    const allNodes = Object.entries(dbTree.groups).concat(Object.entries(dbTree.locations)).map(([id, node]) => ({id, ...node}))
    const roots =  allNodes.filter(n => Object.keys(n.parents).length === 0)
    return roots.map(r => transformSubtree(r, allNodes))
}

function transformSubtree(root: DbNodeWithId, allNodes: DbNodeWithId[]): TreeNode {
    const children = childrenOf(root, allNodes)
    return {id: root.id, name: root.name, children: children.map(n => transformSubtree(n, allNodes))}
}