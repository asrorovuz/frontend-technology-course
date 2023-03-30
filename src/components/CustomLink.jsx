import React from 'react'
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({to, children, ...props}) => {
	let match = useMatch(to)

	return (
		<Link 
			to={to}
			className={ match ? "active-link" : '' } 
			{...props}>
			{children}
		</Link>
	)
}