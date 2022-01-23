import React from 'react'
import Header from './Header'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<div className="p-4">
			<Header />
			{children}
		</div>
	)
}
