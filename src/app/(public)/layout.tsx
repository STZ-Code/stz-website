export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 w-full">{children}</main>
		</div>
	)
}
