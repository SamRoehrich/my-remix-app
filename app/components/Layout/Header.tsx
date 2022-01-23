import Auth from './Auth'

export default function Header() {
	return (
		<header className="flex justify-between">
			<div>
				<span>Region: </span>
				<select>
					<option>Global</option>
					<option>NA</option>
					<option>EU</option>
					<option>ASIA</option>
				</select>
			</div>
			<div>
				<Auth />
			</div>
		</header>
	)
}
