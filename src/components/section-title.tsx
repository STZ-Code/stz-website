type SectionTitleProps = {
	children: string
}

export function SectionTitle({ children }: SectionTitleProps) {
	return (
		<div className="bg-sky-100 px-6 py-2 rounded-full w-fit">
			<strong className="text-slate-950 font-medium">{children}</strong>
		</div>
	)
}
