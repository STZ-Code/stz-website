import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { useState } from 'react'
import chatIcon from '@/assets/images/chat-icon.png'
import computerApiIcon from '@/assets/images/computer-api-icon.png'

import computerIcon from '@/assets/images/computer-icon.png'
import computerToolsIcon from '@/assets/images/computer-tools-icon.png'
import deviceHorizontalIcon from '@/assets/images/device-horizontal-icon.png'
import deviceIcon from '@/assets/images/device-icon.png'
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
	const [accordionOpen, setAccordionOpen] = useState('item-1')

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
						onValueChange={(value) => {
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
									We offer worldwide shipping through trusted courier partners.
									Standard delivery takes 3-5 business days, while express
									shipping ensures delivery within 1-2 business days.
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
									We stand behind our products with a comprehensive 30-day
									return policy. If you&apos;re not completely satisfied, simply
									return the item in its original condition.
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
									We stand behind our products with a comprehensive 30-day
									return policy. If you&apos;re not completely satisfied, simply
									return the item in its original condition.
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
									We stand behind our products with a comprehensive 30-day
									return policy. If you&apos;re not completely satisfied, simply
									return the item in its original condition.
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
									We stand behind our products with a comprehensive 30-day
									return policy. If you&apos;re not completely satisfied, simply
									return the item in its original condition.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className="flex flex-1 bg-slate-500 rounded-md h-full"></div>
			</div>
		</div>
	)
}
