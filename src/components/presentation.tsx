/** biome-ignore-all lint/correctness/useUniqueElementIds: no need here */

import Image from 'next/image'
import calendarToolsImg from '@/assets/images/calendar-tools.png'
import contactImg from '@/assets/images/contact.png'
import mainSectionImg from '@/assets/images/home-bg.png'
import notebookImg from '@/assets/images/notebook-tools.png'
import squareImg from '@/assets/images/square.png'
import { SectionTitle } from './section-title'

export function Presentation() {
	return (
		<div className="bg-cover bg-center justify-center">
			<section
				id="inicio"
				style={{
					backgroundImage: `url(${mainSectionImg.src})`,
					backgroundSize: '1440px 1500px',
				}}
				className="flex bg-cover bg-no-repeat bg-right-top flex-col h-full"
			>
				<div className="flex bg-cover bg-center flex-col gap-12 justify-center px-12 h-screen">
					<h1 className="text-slate-900 text-5xl md:text-7xl font-medium w-2/3">
						Solucionando seu Problema com Tecnologia
					</h1>

					<a
						href="#contato"
						className="bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center text-slate-50 rounded-xl text-xl w-full py-4 md:w-fit md:px-12 md:py-6"
					>
						Quero minha solução
					</a>
				</div>

				<div
					id="quem-somos"
					className="h-fit md:h-screen flex flex-col items-center justify-center px-12 md:px-56 gap-8"
				>
					<SectionTitle>Quem Somos</SectionTitle>

					<p className="text-2xl md:text-5xl font-medium text-gray-800 text-center">
						Atuamos no desenvolvimento de softwares personalizados, sempre com
						foco em inovação, qualidade e resultados.
					</p>

					<div className="flex flex-col gap-6 md:gap-0 items-center md:flex-row w-full justify-between">
						<div className="flex justify-evenly w-full">
							<div className="flex flex-col items-center justify-center w-24">
								<Image src={squareImg} alt="Sob medida" />
								<span className="text-center text-slate-950 font-medium">
									Soluções sob medida
								</span>
							</div>
							<div className="flex flex-col items-center justify-center w-24">
								<Image src={notebookImg} alt="Tecnologias modernas" />
								<span className="text-center text-slate-950 font-medium">
									Tecnologias modernas
								</span>
							</div>
						</div>
						<div className="flex justify-evenly w-full">
							<div className="flex flex-col items-center justify-center w-24">
								<Image src={contactImg} alt="Atendimento próximo" />
								<span className="text-center text-slate-950 font-medium">
									Atendimento próximo
								</span>
							</div>
							<div className="flex flex-col items-center justify-center w-24">
								<Image src={calendarToolsImg} alt="Entrega no prazo" />
								<span className="text-center text-slate-950 font-medium">
									Entrega no prazo
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
