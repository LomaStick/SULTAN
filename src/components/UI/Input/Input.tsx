import * as React from 'react';
import Icon from '../../elements/Icon/Icon';
import classes from './Input.module.scss'

interface IInputProps {
	placeholder?:string
	value?:string;
	icon?:string;
	style?: object;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<IInputProps> = ({placeholder = '', value, style, icon = null, onChange}) => {
	




	return (
		<div className={classes.input__wrapper} style = {style}>
			<input 
				type = 'text'
				className={classes.input}
				placeholder = {placeholder}
				value = {value}
				onChange = {onChange}
			/>
			{icon && <button type='submit'className={classes.input__icon}>
				<Icon className={classes.input__icon} id={icon}/>
			</button>}
		</div>
	);
};

export default Input;
