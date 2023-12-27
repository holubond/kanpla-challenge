function unaccent(string: string): string {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function searchForm(string: string): string {
    return unaccent(string).toLowerCase()
}