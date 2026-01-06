'use client'

import { FormField } from '@stz-code/ui'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { sendContactMessage } from '@/app/(public)/(home)/actions'
import { useFormState } from '@/hooks/use-form-state'
import { maskProvider } from '@/utils/mask'

const contactSchema = z.object({
	name: z.string().min(3, 'Digite um nome válido'),
	email: z.email('Digite um e-mail válido'),
	phone: z.string().optional(),
	company: z.string().optional(),
	services: z.array(z.string()),
	description: z.string().optional(),
})

type ContactSchema = z.infer<typeof contactSchema>

export function ContactForm() {
	const { control, handleSubmit } = useForm<ContactSchema>()

	const [formState, handleSendContact, isPending] =
		useFormState(sendContactMessage)

	return (
		<form
			onSubmit={handleSubmit(handleSendContact)}
			className="flex items-end flex-col h-full justify-between"
		>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex gap-4">
					<FormField
						control={control}
						config={{
							name: 'name',
							type: 'text',
							placeholder: 'Informe seu nome completo',
							label: 'Nome completo',
							containerStyles: 'flex-1',
							labelStyles: 'text-slate-600 font-medium',
							wrapperStyles:
								'focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500',
						}}
					/>

					<FormField
						control={control}
						config={{
							name: 'email',
							type: 'email',
							label: 'Email',
							placeholder: 'Seu email para contato',
							containerStyles: 'flex-1',
							wrapperStyles:
								'focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500',
						}}
					/>
				</div>
				<div className="flex gap-4">
					<FormField
						control={control}
						config={{
							name: 'phone',
							type: 'text',
							mask: 'PHONE',
							maskProvider,
							placeholder: '(87) 9 9999-9999',
							label: 'Telefone',
							containerStyles: 'flex-1',
							wrapperStyles:
								'focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500',
						}}
					/>

					<FormField
						control={control}
						config={{
							name: 'company',
							type: 'text',
							label: 'Empresa (Opcional)',
							placeholder: 'Informe o nome da sua empresa',
							containerStyles: 'flex-1',
							wrapperStyles:
								'focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500',
						}}
					/>
				</div>
				<div className="flex">
					<FormField
						control={control}
						config={{
							name: 'services',
							type: 'checkbox-group',
							label: 'Escolha os serviços desejados',
							variant: 'minimal',
							options: [
								{
									label: 'Desenvolvimento Web',
									name: 'web',
								},
								{
									label: 'Desenvolvimento Desktop',
									name: 'desktop',
								},
								{
									label: 'API',
									name: 'api',
								},
								{
									label: 'Chatbot',
									name: 'chatbot',
								},
								{
									label: 'Desenvolvimento Aplicativo Mobile',
									name: 'mobile',
								},
								{
									label: 'Consultoria em Tecnologia',
									name: 'consult-tech',
								},
								{
									label: 'Outros',
									name: 'others',
								},
							],
						}}
					/>
				</div>
				<div className="flex gap-4">
					<FormField
						control={control}
						config={{
							name: 'description',
							type: 'textarea',
							placeholder: 'Informe uma breve descrição sobre o seu projeto',
							label: 'Descrição',
							containerStyles: 'flex-1',
							wrapperStyles:
								'focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500',
						}}
					/>
				</div>
			</div>

			<button
				type="submit"
				className="bg-slate-950 text-slate-100 font-medium w-fit py-3 px-4 rounded-lg flex gap-4 hover:bg-slate-700 transition-colors"
			>
				Enviar mensagem
				<ArrowRight size={24} />
			</button>
		</form>
	)
}
