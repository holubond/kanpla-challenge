type ObjectSet = {
    [key: string]: {}
}

export function objectSetToggle(element: string, object: ObjectSet): ObjectSet {
    object[element] === undefined
        ? (object[element] = {})
        : delete object[element]
    return { ...object }
}
