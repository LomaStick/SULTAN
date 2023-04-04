import React, { useState } from "react";
import Icon from "../../elements/Icon/Icon";
import './Button.scss'



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	className?: string
	variant?: "orange" | "white" | "callback";
	onClick?: () => void;
	icon?: string;
	};

const Button: React.FunctionComponent<ButtonProps> = ({
	text, 
	className = '', 
	variant = "orange", 
	onClick, 
	icon,
	...props
}) => {


	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};




	const getClassName = () => {
		let getClassName;
		className ? getClassName = className : getClassName = 'Button'
		if (variant === "orange") {
			getClassName += " Button-orange";
		} else if (variant === "white") {
			getClassName += " Button-white";
		} else if (variant === "callback") {
			getClassName += " Button-callback";
		}
		return getClassName;
	};

	return (
		<button
			className={getClassName()}
			onClick={handleClick}
			{...props}
		>
			{text && <span className={getClassName()+"__text"}>{text}</span>}
			{icon && <Icon className={getClassName()+"__icon"} id={icon}/>}
		</button>
	);
};
export default Button