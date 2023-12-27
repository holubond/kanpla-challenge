import { DB1 } from "./data"
import { DbTree } from "./dbModel"
import { InMemoryLocationRepo } from "./locationRepo"
import { childrenOf, includeBranch } from "./utils"

const locationRepo1 = new InMemoryLocationRepo(DB1)
const allData = locationRepo1.getAllData()

test('childrenOf', async () => {
    const data = await allData
    const allNodes = Object.entries(data.groups).concat(Object.entries(data.locations)).map(([id, node]) => ({...node, id}))

    const denmarkId = 'denmark'
    const denmark = data.groups[denmarkId]
    const denmarkWithId = {...denmark, id: denmarkId}
    
    const expectedIds = ['aarhus', 'copenhagen']
    const expectedNodes = allNodes.filter(node => expectedIds.includes(node.id))
    
    expect(childrenOf(denmarkWithId, allNodes)).toStrictEqual(expectedNodes)
})

test('includeBranch', async () => {
    const data = await allData
    const allNodes = Object.entries(data.groups).concat(Object.entries(data.locations)).map(([id, node]) => ({...node, id}))

    const aarhusId = 'aarhus'
    const aarhus = data.groups[aarhusId]
    const aarhusWithId = {...aarhus, id: aarhusId}

    const expectedGroups = {'denmark': data.groups['denmark'], 'aarhus': data.groups['aarhus']}
    const expectedLocations = {'aarhus-technologies': data.locations['aarhus-technologies'], 'aarhus-office-hub': data.locations['aarhus-office-hub']}
    
    // act
    let targetTree: DbTree = {groups: {}, locations: {}, partnerId: data.partnerId}
    includeBranch(aarhusWithId, targetTree, allNodes)

    // expect
    expect(targetTree.groups).toStrictEqual(expectedGroups) 
    expect(targetTree.locations).toStrictEqual(expectedLocations) 
}) 