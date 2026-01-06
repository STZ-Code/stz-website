type SectionTitleProps = {
	children: string
}

export function SectionTitle({ children }: SectionTitleProps) {
	return (
		<div className="bg-sky-100 px-4 md:px-6 py-2 rounded-full w-fit">
			<strong className="text-slate-950 font-medium inline-block">
				{children}
			</strong>
		</div>
	)
}
