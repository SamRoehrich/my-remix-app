interface Props {
	name: string
	type: string
	placeHolder?: string
	className?: string
}

export default function TextInput({
	name,
	type,
	placeHolder,
	className,
}: Props) {
	return (
		<div
			className={
				className ? className : 'w-full flex items-center flex-col space-y-3'
			}
		>
			<label htmlFor={name}>{name}</label>
			<input
				className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				type={type}
				name={name}
				placeholder={placeHolder ? placeHolder : name}
			/>
		</div>
	)
}
