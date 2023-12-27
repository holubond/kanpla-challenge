"use client"

import { getLocations } from "@/actions/getLocations"
import { Search } from "@/components/Search"
import { TreeNode } from "@/models/Tree"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
    urlParam: string,
    placeholder: string,
}

export function LocationSearch({ urlParam, placeholder }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function onInput(searchValue: string) {
        const params = new URLSearchParams(searchParams)
        searchValue ? params.set(urlParam, searchValue) : params.delete(urlParam)
        router.replace(`${pathname}?${params.toString()}`)
    }

    // const [isLoading, setIsLoading] = useState(false)
    const search = searchParams.get(urlParam) ?? ''

    const [locations, setLocations] = useState<TreeNode[]>([])

    useEffect(() => {
        // setIsLoading(true)
        getLocations(search ?? '').then((locations) => {
            setLocations(locations)
            // setIsLoading(false)
        })
    }, [search])

    return (
        <>
            <Search
                defaultValue={searchParams.get(urlParam) ?? ''}
                onInput={onInput}
                placeholder={placeholder}
            />
            {search.length < 1
                ? <></>
                : locations.map(l => <Node node={l} />)}
        </>
    )
}

function Node({ node }: { node: TreeNode }) {
    return (
        <div className="pl-10">
            <p>{node.name}</p>
            {node.children.map(n => <Node node={n} />)}
        </div>
    )
}