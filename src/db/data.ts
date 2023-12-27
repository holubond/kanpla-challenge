import { DbTree } from './dbModel'

export const DB1: DbTree = {
    locations: {
        'aarhus-technologies': {
            name: 'Aarhus Technologies',
            parents: {
                aarhus: {},
            },
        },
        'aarhus-office-hub': {
            name: 'Aarhus Office Hub',
            parents: {
                aarhus: {},
            },
        },
        'copenhagen-towers': {
            name: 'Copenhagen Towers',
            parents: {
                copenhagen: {},
            },
        },
        'cph-blox-hub': {
            name: 'CPH Blox Hub',
            parents: {
                copenhagen: {},
            },
        },
        'paris-corp-hq': {
            name: 'Paris Corp HQ',
            parents: {
                paris: {},
            },
        },
        'startup-lab-paris': {
            name: 'Startup Lab Paris',
            parents: {
                paris: {},
            },
        },
    },
    groups: {
        denmark: {
            name: 'Denmark',
            parents: {},
        },
        aarhus: {
            name: 'Aarhus',
            parents: {
                denmark: {},
            },
        },
        copenhagen: {
            name: 'Copenhagen',
            parents: {
                denmark: {},
            },
        },
        france: {
            name: 'France',
            parents: {},
        },
        paris: {
            name: 'Paris',
            parents: {
                france: {},
            },
        },
    },
    partnerId: 'partner-1',
}

export const DB2: DbTree = {
    locations: {
        'aarhus-technologies': {
            name: 'Aarhus Technologies',
            parents: {
                aarhus: {},
            },
        },
        'aarhus-office-hub': {
            name: 'Aarhus Ofifce Hub',
            parents: {
                aarhus: {},
            },
        },
        'copenhagen-towers': {
            name: 'Copenhagen Towers',
            parents: {
                copenhagen: {},
            },
        },
        'cph-blox-hub': {
            name: 'CPH Blox Hub',
            parents: {
                copenhagen: {},
            },
        },
        'paris-corp-hq': {
            name: 'Paris Corp HQ',
            parents: {
                paris: {},
            },
        },
        'startup-lab-paris': {
            name: 'Startup Lab Paris',
            parents: {
                paris: {},
            },
        },
        'redondance-test': {
            name: 'redondance',
            parents: {
                'redondance-group-a': {},
            },
        },
    },
    groups: {
        denmark: {
            name: 'Denmark',
            parents: {},
        },
        aarhus: {
            name: 'Aarhus',
            parents: {
                denmark: {},
            },
        },
        copenhagen: {
            name: 'Copenhagen',
            parents: {
                denmark: {},
            },
        },
        france: {
            name: 'France',
            parents: {},
        },
        paris: {
            name: 'Paris',
            parents: {
                france: {},
            },
        },
        'redondance-group-a': {
            name: 'Redondance Group A',
            parents: {
                'redondance-group-b': {},
            },
        },
        'redondance-group-b': {
            name: 'Redondance Group B',
            parents: {
                'redondance-group-c': {},
            },
        },
        'redondance-group-c': {
            name: 'Redondance Group B',
            parents: {
                'redondance-group-a': {},
            },
        },
    },
    partnerId: 'partner-1',
}

export const DB3: DbTree = {
    locations: {
        'aarhus-technologies': {
            name: 'Aarhus Technologies',
            parents: {
                aarhus: {},
            },
        },
        'aarhus-office-hub': {
            name: 'Aarhus Ofifce Hub',
            parents: {
                aarhus: {},
            },
        },
        'copenhagen-towers': {
            name: 'Copenhagen Towers',
            parents: {
                copenhagen: {},
            },
        },
        'cph-blox-hub': {
            name: 'CPH Blox Hub',
            parents: {
                copenhagen: {},
            },
        },
        'paris-corp-hq': {
            name: 'Paris Corp HQ',
            parents: {
                paris: {},
            },
        },
        'startup-lab-paris': {
            name: 'Startup Lab Paris',
            parents: {
                paris: {},
            },
        },
        'redondance-test': {
            name: 'redondance',
            parents: {
                'redondance-group-a': {},
            },
        },
    },
    groups: {
        denmark: {
            name: 'Denmark',
            parents: {},
        },
        aarhus: {
            name: 'Aarhus',
            parents: {
                denmark: {},
            },
        },
        copenhagen: {
            name: 'Copenhagen',
            parents: {
                denmark: {},
            },
        },
        france: {
            name: 'France',
            parents: {},
        },
        paris: {
            name: 'Paris',
            parents: {
                france: {},
            },
        },
        'redondance-group-a': {
            name: 'Redondance Group A',
            parents: {
                'redondance-group-b': {},
            },
        },
        'redondance-group-b': {
            name: 'Redondance Group B',
            parents: {
                'redondance-group-a': {},
            },
        },
    },
    partnerId: 'partner-1',
}

export const DB4: DbTree = {
    locations: {
        'deep-location': {
            name: 'Deep location',
            parents: {
                parent10: {},
            },
        },
    },
    groups: {
        parent1: {
            name: 'Parent 1',
            parents: {},
        },
        parent2: {
            name: 'Parent 2',
            parents: {
                parent1: {},
            },
        },
        parent3: {
            name: 'Parent 3',
            parents: {
                parent2: {},
            },
        },
        parent4: {
            name: 'Parent 4',
            parents: {
                parent3: {},
            },
        },
        parent5: {
            name: 'Parent 5',
            parents: {
                parent4: {},
            },
        },
        parent6: {
            name: 'Parent 6',
            parents: {
                parent5: {},
            },
        },
        parent7: {
            name: 'Parent 7',
            parents: {
                parent6: {},
            },
        },
        parent8: {
            name: 'Parent 8',
            parents: {
                parent7: {},
            },
        },
        parent9: {
            name: 'Parent 9',
            parents: {
                parent8: {},
            },
        },
        parent10: {
            name: 'Parent 10',
            parents: {
                parent9: {},
            },
        },
    },
    partnerId: 'partner-1',
}

export const DB5: DbTree = {
    locations: {
        'aarhus-technologies': {
            name: 'Aarhus Technologies',
            parents: {
                aarhus: {},
            },
        },
        'aarhus-office-hub': {
            name: 'Aarhus Office Hub',
            parents: {
                aarhus: {},
            },
        },
        'copenhagen-towers': {
            name: 'Copenhagen Towers',
            parents: {
                copenhagen: {},
            },
        },
        'cph-blox-hub': {
            name: 'CPH Blox Hub',
            parents: {
                copenhagen: {},
            },
        },
        'paris-corp-hq': {
            name: 'Paris Corp HQ',
            parents: {
                paris: {},
            },
        },
        'startup-lab-paris': {
            name: 'Startup Lab Paris',
            parents: {
                paris: {},
            },
        },
    },
    groups: {
        denmark: {
            name: 'Denmark',
            parents: {},
        },
        aarhus: {
            name: 'Aarhus',
            parents: {
                denmark: {},
            },
        },
        copenhagen: {
            name: 'Copenhagen',
            parents: {
                denmark: {},
            },
        },
        france: {
            name: 'France',
            parents: {},
        },
        paris: {
            name: 'Paris',
            parents: {
                france: {},
            },
        },
    },
    partnerId: 'partner-1',
}

export const DB6: DbTree = {
    locations: {
        'aarhus-tech-solutions': {
            name: 'Aarhus Tech Solutions Office',
            parents: {
                aarhus: {},
            },
        },
        'copenhagen-finance-center': {
            name: 'Copenhagen Finance Center Hub',
            parents: {
                copenhagen: {},
            },
        },
        'cph-innovation-hub': {
            name: 'CPH Innovation Hub Office',
            parents: {
                copenhagen: {},
            },
        },
        'paris-corp-hq': {
            name: 'Paris Corp HQ Office',
            parents: {
                paris: {},
            },
        },
        'startup-lab-paris': {
            name: 'Startup Lab Paris Office',
            parents: {
                paris: {},
            },
        },
        'milan-business-center': {
            name: 'Milan Business Center',
            parents: {
                milan: {},
            },
        },
        'milan-tech-hub': {
            name: 'Milan Tech Hub',
            parents: {
                milan: {},
            },
        },
        'rome-lab': {
            name: 'Rome Lab',
            parents: {
                rome: {},
            },
        },
        'munich-finance-hub': {
            name: 'Munich Finance Hub',
            parents: {
                munich: {},
            },
        },
        'munich-innovation-center': {
            name: 'Munich Innovation Center',
            parents: {
                munich: {},
            },
        },
        'berlin-tech-lab': {
            name: 'Berlin Lab',
            parents: {
                berlin: {},
            },
        },
        'madrid-corp-office': {
            name: 'Madrid Corp Office',
            parents: {
                madrid: {},
            },
        },
        'madrid-tech-lab': {
            name: 'Madrid Tech Lab',
            parents: {
                madrid: {},
            },
        },
        'barcelona-tech-lab': {
            name: 'Barcelona Tech Lab',
            parents: {
                barcelona: {},
            },
        },
    },
    groups: {
        denmark: {
            name: 'Denmark',
            parents: {},
        },
        aarhus: {
            name: 'Aarhus',
            parents: {
                denmark: {},
            },
        },
        copenhagen: {
            name: 'Copenhagen',
            parents: {
                denmark: {},
            },
        },
        france: {
            name: 'France',
            parents: {},
        },
        paris: {
            name: 'Paris',
            parents: {
                france: {},
            },
        },
        italy: {
            name: 'Italy',
            parents: {},
        },
        germany: {
            name: 'Germany',
            parents: {},
        },
        spain: {
            name: 'Spain',
            parents: {},
        },
        milan: {
            name: 'Milan',
            parents: {
                italy: {},
            },
        },
        rome: {
            name: 'Rome',
            parents: {
                italy: {},
            },
        },
        berlin: {
            name: 'Berlin',
            parents: {
                germany: {},
            },
        },
        munich: {
            name: 'Munich',
            parents: {
                germany: {},
            },
        },
        madrid: {
            name: 'Madrid',
            parents: {
                spain: {},
            },
        },
        barcelona: {
            name: 'Barcelona',
            parents: {
                spain: {},
            },
        },
    },
    partnerId: 'partner-1',
}
