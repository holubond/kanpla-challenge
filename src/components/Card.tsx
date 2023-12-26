import { ParentProps } from "@/utils/types";
import { twMerge } from "tailwind-merge";

type Props = ParentProps<{
    className?: string
}>

export function Card({ children, className }: Props) {
    return (
        <div className={twMerge("border-gray-200 border rounded-lg bg-white px-4 py-5", className)}>
            {children}
        </div>
    )
}