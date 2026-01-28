export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<main className="flex-1 w-full pt-32">{children}</main>
		</div>
	)
}
