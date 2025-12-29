'use client'

import Image from 'next/image'
import mainSectionImg from '@/assets/images/bg-test.png'
import calendarToolsImg from '@/assets/images/calendar-tools.png'
import contactImg from '@/assets/images/contact.png'
import notebookImg from '@/assets/images/notebook-tools.png'
import squareImg from '@/assets/images/square.png'
import { Header } from '@/components/header'
import { SectionTitle } from '@/components/section-title'
import { Footer } from '@/components/footer'
import { Services } from '@/components/services'

export default function HomePage() {
	return (
		<>
			<Header />
			<div className="bg-cover bg-center justify-center">
				<section
					style={{
						backgroundImage: `url(${mainSectionImg.src})`,
						backgroundSize: '1440px 1500px',
					}}
					className="flex bg-cover bg-no-repeat bg-top flex-col h-full"
				>
					<div className="flex bg-cover bg-center flex-col gap-20 items-center justify-center h-screen">
						<h1 className="text-slate-900 text-7xl font-medium w-2/3 text-center">
							Solucionando seu Problema com Tecnologia
						</h1>

						<button
							type="button"
							className="bg-slate-800 text-slate-50 rounded-full text-2xl px-12 py-6"
						>
							Quero minha solução
						</button>
					</div>

					<div className="h-screen flex flex-col items-center justify-center px-56 gap-8">
						<SectionTitle>Quem Somos</SectionTitle>

						<p className="text-5xl font-medium text-gray-800 text-center">
							 Atuamos no desenvolvimento
							de softwares personalizados, sempre com foco em inovação,
							qualidade e resultados.
						</p>

						<div className="flex w-full justify-between">
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
				</section>
			</div>

			<Services />

			<div className='min-h-screen flex flex-col items-center mt-8 gap-6 py-12'>
				<SectionTitle>Portfólio</SectionTitle>

				<div className='flex flex-col items-center justify-center gap-12 w-full px-24 h-full'>
					<div className='flex flex-col items-center gap-6 px-24'>
						<h2 className='font-bold text-5xl text-slate-900'>Nossos Projetos</h2>

						<p className='text-center text-slate-800'>
							Explore nosso portfólio e veja como transformamos ideias em soluções reais. <br />
							Da web ao mobile, cada entrega é feita com excelência e foco no resultado. <br /> 
							Aqui você encontra exemplos concretos do que podemos construir para sua empresa.
						</p>
					</div>

					<div className='flex justify-evenly w-full gap-20 h-full'>
						<div className='bg-slate-500 rounded-md h-96 items-center flex-1 flex flex-col justify-end p-6 gap-4'>
							<div className='flex flex-col w-full gap-2'>
								<h4 className='text-slate-50 font-semibold text-3xl'>Greece</h4>
								<p className='text-slate-200'>A plataforma completa para gestão de salões, barbearias e estúdios de beleza. Agende, organize e faça seu negócio crescer com tecnologia simples e inteligente.</p>
							</div>
						
							<button className='text-slate-50 bg-sky-500 py-2 px-6 w-fit rounded-full font-semibold'>Conhecer</button>
						</div>
						<div className='bg-slate-500 rounded-md h-96 items-center flex-1 flex flex-col justify-end p-6 gap-4'>
							<div className='flex flex-col w-full gap-2'>
								<h4 className='text-slate-50 font-semibold text-3xl'>Greece</h4>
								<p className='text-slate-200'>A plataforma completa para gestão de salões, barbearias e estúdios de beleza. Agende, organize e faça seu negócio crescer com tecnologia simples e inteligente.</p>
							</div>
						
							<button className='text-slate-50 bg-sky-500 py-2 px-6 w-fit rounded-full font-semibold'>Conhecer</button>
						</div>
						<div className='bg-slate-500 rounded-md h-96 items-center flex-1 flex flex-col justify-end p-6 gap-4'>
							<div className='flex flex-col w-full gap-2'>
								<h4 className='text-slate-50 font-semibold text-3xl'>Greece</h4>
								<p className='text-slate-200'>A plataforma completa para gestão de salões, barbearias e estúdios de beleza. Agende, organize e faça seu negócio crescer com tecnologia simples e inteligente.</p>
							</div>
						
							<button className='text-slate-50 bg-sky-500 py-2 px-6 w-fit rounded-full font-semibold'>Conhecer</button>
						</div>
					</div>
				</div>
			</div>

			<div className="min-h-screen px-12 mt-8 flex flex-col py-12 bg-[linear-gradient(180deg,rgba(226,232,240,0)_0%,#E2E8F0_8%,#E2E8F0_92%,rgba(226,232,240,0)_100%)]">
				<SectionTitle>Contato</SectionTitle>

				<div className='flex gap-6 mt-4'>
					<div className='w-1/2'>
						<h3 className='text-slate-900 font-medium text-5xl w-1/2 mt-2 mb-12'>Entre em contato com a gente</h3>

						<p className='text-slate-800 text-xl mb-14'>
							Estamos prontos para ser o parceiro tecnológico da sua empresa.<br />
							Na STZCODE, unimos experiência e inovação para entregar soluções que realmente fazem a diferença.<br />
							Preencha o formulário ao lado e fale com nossa equipe sobre o seu próximo projeto.
						</p>

						<div className='flex flex-col gap-4'>
							<div>
								<span className='text-slate-700 text-2xl'>Email</span>
								<p className='text-slate-900 font-semibold text-2xl'>contato@stzcode.com.br</p>
							</div>
							
							<div>
								<span className='text-slate-700 text-2xl'>Telefone/Whatsapp</span>
								<p className='text-slate-900 font-semibold text-2xl'>(87) 9 9636-3081</p>
							</div>
						</div>
					</div>
					
					<div className='flex-1 bg-white rounded-lg p-10'>
						form
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
