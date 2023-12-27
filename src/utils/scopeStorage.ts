'use client'

import { Scope } from '@/models/Scope'

const SCOPE_SELECTION = 'SCOPE_SELECTION'

export const scopeStorage = {
    getScope: (): Scope => {
        const scope = localStorage.getItem(SCOPE_SELECTION)
        if (scope === null) return { groups: {}, locations: {} }
        return JSON.parse(scope)
    },

    setScope: (selection: Scope) => {
        localStorage.setItem(SCOPE_SELECTION, JSON.stringify(selection))
    },
}
