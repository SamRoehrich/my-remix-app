import Select from '../components/Design/Select'
import TextInput from '../components/Design/TextInput'
import Layout from '../components/Layout'

export default function SignUp() {
	return (
		<Layout>
			<form className="mt-5 flex flex-col items-center justify-center w-3/5 m-auto space-y-4">
				<TextInput name="Username" type="text" />
				<TextInput name="Email" type="email" />
				<TextInput name="Password" type="password" />
				<label htmlFor="region">Region</label>
				<Select name="region">
					<option>NA</option>
					<option>EU</option>
					<option>ASIA</option>
				</Select>
				<button
					type="submit"
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Create Account
				</button>
			</form>
		</Layout>
	)
}
