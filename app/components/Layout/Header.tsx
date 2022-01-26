import HomeIcon from '../Design/Icons/HomeIcon'
import Select from '../Design/Select'
import Auth from './Auth'

export default function Header() {
	return (
		<header className="flex justify-between">
			<HomeIcon />
			<div className="flex h-auto items-center space-x-2">
				<span>Region: </span>
				<Select name="Region">
					<option>Global</option>
					<option>NA</option>
					<option>EU</option>
					<option>ASIA</option>
				</Select>
			</div>
			<div>
				<Auth />
			</div>
		</header>
	)
}
