import { BasicProps } from '../../interface/BasicProps'

export default function ({ children }: BasicProps) {
	return (
		<div className="p-4">
			<header>
				<p>This is the header for the blog layout</p>
			</header>
			{children}
		</div>
	)
}
