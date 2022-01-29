import { BasicProps } from '../../interface/BasicProps'
import Header from './Header'

export default function Layout({ children }: BasicProps) {
	return (
		<div className="p-4">
			<Header />
			{children}
		</div>
	)
}
