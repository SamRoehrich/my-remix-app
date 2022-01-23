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
