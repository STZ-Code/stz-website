import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { useState } from 'react'
import apiImage from '@/assets/images/api-example.jpg'
import chatIcon from '@/assets/images/chat-icon.png'
import chatbotImage from '@/assets/images/chatbot-example.png'
import computerApiIcon from '@/assets/images/computer-api-icon.png'
import computerIcon from '@/assets/images/computer-icon.png'
import computerToolsIcon from '@/assets/images/computer-tools-icon.png'
import desktopImage from '@/assets/images/desktop-example.jpg'
import deviceHorizontalIcon from '@/assets/images/device-horizontal-icon.png'
import deviceIcon from '@/assets/images/device-icon.png'
import mobileImage from '@/assets/images/mobile-example.jpg'
import techImage from '@/assets/images/tech-example.jpg'
import webImage from '@/assets/images/web-example.jpg'

import { SectionTitle } from './section-title'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion'

type ServiceTitleProps = {
	children: string
	icon: StaticImageData
}

const imageSrc = {
	'item-1': webImage,
	'item-2': mobileImage,
	'item-3': desktopImage,
	'item-4': apiImage,
	'item-5': chatbotImage,
	'item-6': techImage,
}

function ServiceTitle({ children, icon }: ServiceTitleProps) {
	return (
		<AccordionTrigger className="flex justify-normal gap-4">
			<div className="p-2 bg-slate-200 rounded-lg">
				<Image src={icon} alt="Icon" />
			</div>
			<span className="text-slate-900 text-2xl font-medium">{children}</span>
		</AccordionTrigger>
	)
}

export function Services() {
	const [accordionOpen, setAccordionOpen] = useState<
		'item-1' | 'item-2' | 'item-3' | 'item-4' | 'item-5' | 'item-6'
	>('item-1')

	return (
		<div className="min-h-screen px-12 mt-8 flex flex-col py-12 bg-[linear-gradient(180deg,rgba(226,232,240,0)_0%,#E2E8F0_8%,#E2E8F0_92%,rgba(226,232,240,0)_100%)]">
			<SectionTitle>Serviços</SectionTitle>

			<h3 className="text-slate-900 font-medium text-6xl w-1/2 mt-2 mb-12">
				Acelere sua Empresa através dos nossos Serviços
			</h3>

			<div className="flex gap-8 h-fit">
				<div className="flex-1">
					<Accordion
						type="single"
						collapsible
						className="w-full gap-2 flex flex-col"
						defaultValue="item-1"
						value={accordionOpen}
						onValueChange={(
							value:
								| 'item-1'
								| 'item-2'
								| 'item-3'
								| 'item-4'
								| 'item-5'
								| 'item-6',
						) => {
							if (value) setAccordionOpen(value)
						}}
					>
						<AccordionItem
							value="item-1"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={computerIcon}>Sistemas Web</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Desenvolvemos plataformas online modernas, rápidas e seguras,
									totalmente personalizadas para o seu negócio.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-2"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={computerToolsIcon}>
								Sistemas Desktop
							</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Desenvolvemos aplicativos desktop robustos, eficientes e
									customizado para otimizar processos internos da sua empresa.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-3"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={deviceIcon}>Aplicativos Mobile</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Desenvolvemos aplicativos mobile intuitivos e mordenos,
									personalizados de acordo com sua demanda e seu objetivo.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-4"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={computerApiIcon}>
								Criação de APIs
							</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Desenvolvemos APIs seguras, escaláveis e bem documentadas,
									capazes de integrar sistemas e automatizar fluxos do seu
									negócio.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-5"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={chatIcon}>Criação de Chatbots</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Desenvolvemos chatbots inteligentes e dinâmicos, com
									tecnologia de última geração pronto para automatizar o
									atendimento e melhorar a experiência do cliente 24/7.
								</p>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-6"
							className="bg-slate-50 rounded-md px-4"
						>
							<ServiceTitle icon={deviceHorizontalIcon}>
								Consultorias em Tecnologia
							</ServiceTitle>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p className="text-slate-700 text-lg">
									Oferecemos consultoria estratégica em tecnologia,
									personalizada para alinhar soluções digitais aos objetivos e
									desafios específicos do seu negócio.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className="flex flex-1 bg-slate-500 rounded-md h-full">
					<Image
						src={imageSrc[accordionOpen]}
						alt={'images'}
						className="rounded-md"
					/>
				</div>
			</div>
		</div>
	)
}
