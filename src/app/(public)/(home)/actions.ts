'use server'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { google } from 'googleapis'
import z from 'zod'

const contactSchema = z.object({
	name: z.string().min(3, 'Digite um nome válido'),
	email: z.email('Digite um e-mail válido'),
	phone: z.string().optional(),
	company: z.string().optional(),
	services: z
		.array(z.string())
		.min(1, 'Selecione pelo menos um serviço')
		.default([]),
	description: z.string().optional(),
})

export async function sendContactMessage(data: FormData) {
	const rawData = {
		name: data.get('name')?.toString(),
		email: data.get('email')?.toString(),
		phone: data.get('phone')?.toString(),
		company: data.get('company')?.toString(),
		services: data.getAll('services'),
		description: data.get('description')?.toString(),
	}

	const result = contactSchema.safeParse(rawData)

	if (!result.success) {
		return {
			success: false,
			message: null,
			errors: result.error.flatten().fieldErrors,
		}
	}

	const { email, name, services, company, description, phone } = result.data

	const auth = new google.auth.JWT({
		email: process.env.GOOGLE_CLIENT_EMAIL,
		key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	})

	const sheets = google.sheets({
		version: 'v4',
		auth,
	})

	const currentDate = format(
		new Date(),
		"dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
		{
			locale: ptBR,
		},
	)

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: 'A1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					currentDate,
					email,
					name,
					services.join(', '),
					company,
					description,
					phone,
				],
			],
		},
	})

	return { success: true, message: null, errors: null }
}
