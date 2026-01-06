import { SectionTitle } from './section-title'

export function Portfolio() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: no need here
		<div
			id="portfolio"
			className="min-h-screen flex flex-col items-center mt-8 gap-6 py-12 scroll-mt-12"
		>
			<SectionTitle>Portfólio</SectionTitle>

			<div className="flex flex-col items-center justify-center gap-12 w-full px-12 md:px-24 h-full">
				<div className="flex flex-col items-center gap-6 px-0 md:px-24">
					<h2 className="font-bold text-5xl text-slate-900 text-center">
						Nossos Projetos
					</h2>

					<p className="text-center text-slate-800">
						Explore nosso portfólio e veja como transformamos ideias em soluções
						reais. <br />
						Da web ao mobile, cada entrega é feita com excelência e foco no
						resultado. <br />
						Aqui você encontra exemplos concretos do que podemos construir para
						sua empresa.
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-evenly w-full gap-20 h-full">
					<div className="bg-slate-500 rounded-md max-w-sm h-96 items-center flex-1 flex flex-col justify-end p-6 gap-4">
						<div className="flex flex-col w-full gap-2">
							<h4 className="text-slate-50 font-semibold text-3xl">Greece</h4>
							<p className="text-slate-200">
								A plataforma completa para gestão de salões, barbearias e
								estúdios de beleza. Agende, organize e faça seu negócio crescer
								com tecnologia simples e inteligente.
							</p>
						</div>

						<button
							type="button"
							className="text-slate-50 bg-sky-500 py-2 px-6 w-fit rounded-full font-semibold"
						>
							Conhecer
						</button>
					</div>
					<div className="bg-slate-500 rounded-md max-w-sm h-96 items-center flex-1 flex flex-col justify-end p-6 gap-4">
						<div className="flex flex-col w-full gap-2">
							<h4 className="text-slate-50 font-semibold text-3xl">Greece</h4>
							<p className="text-slate-200">
								A plataforma completa para gestão de salões, barbearias e
								estúdios de beleza. Agende, organize e faça seu negócio crescer
								com tecnologia simples e inteligente.
							</p>
						</div>

						<button
							type="button"
							className="text-slate-50 bg-sky-500 py-2 px-6 w-fit rounded-full font-semibold"
						>
							Conhecer
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
