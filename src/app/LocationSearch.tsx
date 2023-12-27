'use client'

import { getLocations } from '@/actions/getLocations'
import { Search } from '@/components/Search'
import { Scope } from '@/models/Scope'
import { TreeNode } from '@/models/Tree'
import { objectSetToggle } from '@/utils/arrayToggle'
import { scopeStorage } from '@/utils/scopeStorage'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
    urlParam: string
    placeholder: string
}

export function LocationSearch({ urlParam, placeholder }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function onInput(searchValue: string) {
        const params = new URLSearchParams(searchParams)
        searchValue
            ? params.set(urlParam, searchValue)
            : params.delete(urlParam)
        router.replace(`${pathname}?${params.toString()}`)
    }

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const search = searchParams.get(urlParam) ?? ''

    const [nodes, setNodes] = useState<TreeNode[]>([])
    
    const [selectedNodes, setSelectedNodes] = useState<Scope>({groups: {}, locations: {}})
    useEffect(() => {
        setSelectedNodes(scopeStorage.getScope())
    }, [])

    function toggleNode(id: string, isLocation: boolean) {
        // TODO handle update of other checkboxes. It might be beneficial to add {parent: TreeNode | undefined} to a TreeNode
        let scope
        if (isLocation) {
            const locations = objectSetToggle(id, selectedNodes.locations)
            scope = { ...selectedNodes, locations }
        } else {
            const groups = objectSetToggle(id, selectedNodes.groups)
            scope = { ...selectedNodes, groups }
        }
        scopeStorage.setScope(scope)
        setSelectedNodes(scope)
    }

    useEffect(() => {
        setIsLoading(true)
        setError('')
        getLocations(search ?? '')
            .then((locations) => {
                setNodes(locations)
                setIsLoading(false)
            })
            .catch((_) => setError('ERROR: Loading locations failed'))
    }, [search])

    return (
        <>
            <Search
                defaultValue={searchParams.get(urlParam) ?? ''}
                onInput={onInput}
                placeholder={placeholder}
            />
            {error ? (
                <p>{error}</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                search.length > 0 &&
                nodes.map((l) => (
                    <Node
                        key={l.id}
                        node={l}
                        toggleNode={toggleNode}
                        selectedNodes={selectedNodes}
                    />
                ))
            )}
        </>
    )
}

type NodeProps = {
    node: TreeNode
    toggleNode: (id: string, isLocation: boolean) => void
    selectedNodes: Scope
}

function Node({ node, toggleNode, selectedNodes }: NodeProps) {
    const isLocation = node.children.length === 0
    const isSelected = isLocation
        ? selectedNodes.locations[node.id] !== undefined
        : selectedNodes.groups[node.id] !== undefined

    return (
        <div className="pl-8 my-2">
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleNode(node.id, isLocation)}
                id={node.id}
                className="cursor-pointer rounded-sm border-2 text-green-500 focus:ring-0 focus:shadow-none focus:ring-offset-0"
            />
            <label htmlFor={node.id} className="px-3 cursor-pointer">
                {node.name}
            </label>
            {node.children.map((n) => (
                <Node
                    key={n.id}
                    node={n}
                    toggleNode={toggleNode}
                    selectedNodes={selectedNodes}
                />
            ))}
        </div>
    )
}
