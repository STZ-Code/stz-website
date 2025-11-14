import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'STZCODE Web Template',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-zinc-800 h-screen text-zinc-100 flex">
				{children}
			</body>
		</html>
	)
}
