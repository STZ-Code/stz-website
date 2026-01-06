import { type FormEvent, useState, useTransition } from 'react'

interface FormState {
	success: boolean
	message: string | null
	errors: Record<string, string[]> | null
}

export function useFormState(
	action: (data: FormData) => Promise<FormState>,
	initalState?: FormState,
) {
	const [isPending, startTransition] = useTransition()

	const [formState, setFormData] = useState(
		initalState ?? {
			success: false,
			message: null,
			errors: null,
		},
	)

	function handleSubmit<T extends Record<string, unknown>>(data: T) {
		const formData = new FormData()

		for (const [key, value] of Object.entries(data)) {
			if (Array.isArray(value)) {
				value.forEach((item) => {
					formData.append(key, String(item))
				})
			} else if (value !== null && value !== undefined) {
				formData.append(key, String(value))
			}
		}

		startTransition(async () => {
			try {
				const state = await action(formData)

				setFormData(state)
			} catch (err) {
				console.error('Form submission error:', err)
			}
		})
	}

	// handleSubmit.withEvent = (event: FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault()
	// 	const form = event.currentTarget
	// 	const formData = new FormData(form)

	// 	startTransition(async () => {
	// 		try {
	// 			const state = await action(formData)
	// 			// .then((state) => {
	// 			// 	setFormData(state)
	// 			// })
	// 			// .catch((error) => {
	// 			// 	console.error('Form submission error:', error)
	// 			// })

	// 			setFormData(state)
	// 		} catch (err) {
	// 			console.error('Form submission error:', err)
	// 		}
	// 	})
	// }

	return [formState, handleSubmit, isPending] as const
}
