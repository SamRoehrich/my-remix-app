import type { ActionFunction, LinksFunction } from 'remix'
import { useActionData, json, Link, useSearchParams } from 'remix'
import { db } from '../utils/db.server'

function validateUsername(username: unknown) {
	if (typeof username !== 'string' || username.length < 3) {
		return 'Username must be at least 3 characters long'
	}
}

function validatePassword(password: unknown) {
	if (typeof password !== 'string' || password.length < 6) {
		return 'Password must be at least 6 characters long'
	}
}

type ActionData = {
	formError?: string
	fieldErrors?: {
		Username: string | undefined
		Password: string | undefined
	}
	fields: {
		Username: string
		Password: string
	}
}

const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData()
	const username = form.get('Username')
	const password = form.get('Password')

	if (typeof username !== 'string' || typeof password !== 'string') {
		return badRequest({ formError: 'Form not submitted correctly.' })
	}
}

import SubmitButton from '../components/Design/Button'
import TextInput from '../components/Design/TextInput'

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<form method="post">
				<TextInput name="Username" type="text" />
				<TextInput name="Password" type="password" />
				<SubmitButton>Login</SubmitButton>
			</form>
		</div>
	)
}
