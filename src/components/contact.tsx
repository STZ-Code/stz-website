import { ContactForm } from './contact-form'
import { SectionTitle } from './section-title'

export function Contact() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: no need here
		<div
			id="contato"
			className="min-h-screen px-12 mt-8 flex flex-col py-12 bg-[linear-gradient(180deg,rgba(226,232,240,0)_0%,#E2E8F0_8%,#E2E8F0_92%,rgba(226,232,240,0)_100%)]"
		>
			<SectionTitle>Contato</SectionTitle>

			<div className="flex gap-6 mt-4 flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<h3 className="text-slate-900 font-medium text-5xl w-full md:w-1/2 mt-2 mb-12">
						Entre em contato com a gente
					</h3>

					<p className="text-slate-800 text-xl mb-14">
						Estamos prontos para ser o parceiro tecnológico da sua empresa.
						<br />
						Na STZCODE, unimos experiência e inovação para entregar soluções que
						realmente fazem a diferença.
						<br />
						Preencha o formulário ao lado e fale com nossa equipe sobre o seu
						próximo projeto.
					</p>

					<div className="flex flex-col gap-4">
						<div>
							<span className="text-slate-700 text-2xl">Email</span>
							<p className="text-slate-900 font-semibold text-2xl">
								contato@stzcode.com.br
							</p>
						</div>

						<div>
							<span className="text-slate-700 text-2xl">Telefone/Whatsapp</span>
							<p className="text-slate-900 font-semibold text-2xl">
								(87) 9 9636-3081
							</p>
						</div>
					</div>
				</div>

				<div className="flex-1 bg-white rounded-lg p-10">
					<ContactForm />
				</div>
			</div>
		</div>
	)
}
