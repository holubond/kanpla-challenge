import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

type Props = {
    placeholder?: string
    value?: string
    defaultValue?: string
    onInput: (value: string) => void
}

export function Search({ placeholder, value, defaultValue, onInput }: Props) {
    return (
        <div className="relative">
            <input
                type="text"
                className="block w-full rounded-md border border-gray-200 py-2 pl-4 pr-10 text-gray-900  placeholder:text-gray-400"
                placeholder={placeholder}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onInput(e.target.value)
                }
                value={value}
                defaultValue={defaultValue}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-900"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}
