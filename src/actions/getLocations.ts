"use server"

import { locationRepo } from "@/db/locationRepo"
import { TreeNode, nodesFromDbNodes } from "@/models/Tree"

export async function getLocations(search: string): Promise<TreeNode[]> {
    const dbTrees = await locationRepo.getLocationsInGroupsByName(search)
    return nodesFromDbNodes(dbTrees)
}