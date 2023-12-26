"use client"

import { Search } from "@/components/Search"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Props = {
    urlParam: string,
    placeholder: string,
}

/**
 * Text search input that persists its value to URL search param `paramName`
 */
export function SearchUrlParam({ urlParam, placeholder }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function onInput(searchValue: string) {
        const params = new URLSearchParams(searchParams)
        searchValue ? params.set(urlParam, searchValue) : params.delete(urlParam)
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Search
            defaultValue={searchParams.get(urlParam) ?? ''}
            onInput={onInput}
            placeholder={placeholder} />
    )
}