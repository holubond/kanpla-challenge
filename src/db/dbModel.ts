export interface DbTree {
    locations: {
        [locationId: string]: DbNode
    }
    groups: {
        [groupId: string]: DbNode
    }
    partnerId: string
}

export interface DbNode {
    name: string
    parents: {
        [groupId: string]: {}
    }
}

export type DbNodeWithId = DbNode & { id: string }
