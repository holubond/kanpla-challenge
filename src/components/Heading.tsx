import { ParentProps } from '@/utils/types'
import { twMerge } from 'tailwind-merge'

type Props = ParentProps<{
    className?: string
}>

export function Heading({ children, className }: Props) {
    return (
        <h1 className={twMerge('text-2xl font-bold text-gray-900', className)}>
            {children}
        </h1>
    )
}
