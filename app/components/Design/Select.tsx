interface Props {
	children: React.ReactNode
	name: string
}

export default function Select({ children, name }: Props) {
	return (
		<select
			className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			name={name}
		>
			{children}
		</select>
	)
}
