import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import background from '@/assets/images/background.png'

export const metadata: Metadata = {
	title: 'STZCODE Web Template',
}

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
				style={{
					backgroundImage: `url(${background.src})`,
				}}
				className={clsx(
					rethinkSans.variable,
					'flex bg-cover bg-no-repeat bg-center antialiased min-h-screen overflow-auto max-w-screen-2xl mx-auto',
				)}
			>
				{children}
			</body>
		</html>
	)
}
