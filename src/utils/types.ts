import React from 'react'

export type ParentProps<T> = T & {
    children: React.ReactNode
}
