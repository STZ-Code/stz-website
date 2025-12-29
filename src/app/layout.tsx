import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'STZCODE Web Template',
}

import clsx from 'clsx'
import { Rethink_Sans } from 'next/font/google'

const rethinkSans = Rethink_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-sans',
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(
					rethinkSans.variable,
					'flex bg-cover bg-no-repeat bg-center antialiased min-h-screen overflow-auto',
				)}
			>
				{children}
			</body>
		</html>
	)
}
