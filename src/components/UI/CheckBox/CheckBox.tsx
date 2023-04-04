import * as React from 'react';
import './CheckBox.scss'

interface ICheckBoxProps {
	id: string | number;
	label: string | number;
	onChange: (id: string, checked: boolean) => void;
	isChecked: boolean
}

const CheckBox: React.FunctionComponent<ICheckBoxProps> = ({ id, label, onChange, isChecked }) => {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(String(id), event.target.checked);
	};
  
	return (
	<label className='Checkbox'>
		<input
			className='Checkbox__input'
			type="checkbox"
			id={String(id)}
			checked={isChecked}
			onChange={handleCheckboxChange}
		/>
		{label}
	</label>
	);
};


export default CheckBox;
