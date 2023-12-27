import type { Metadata } from 'next'
import './globals.css'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
    title: 'Location search',
    description: 'Simple application to search locations and location groups',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={twMerge('font-sans bg-[#fbf7ff]')}>
                {children}
            </body>
        </html>
    )
}
