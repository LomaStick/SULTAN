import React, { useState }  from 'react';
import Icon from '../../elements/Icon/Icon';
import { IOption } from '../../../types/Options';
import './Select.scss'


interface ISelectProps {
	options : IOption[];
	value: IOption | null;
	onChange: (selection: IOption) => void;
}

const Select: React.FunctionComponent<ISelectProps> = (
	{value, options, onChange}) => {

	const [showOptions, setShowOptions] = useState(false)
	let classActive ='';
	showOptions ? classActive ='select_active' : classActive = '';

  return (
	<div className='select__wrapper'>
			<div className={['select', classActive].join(' ')}
				 onClick = {()=> setShowOptions(!showOptions)}
			>
			{/* Select defaultvalue */}
				{value && 
					<span className='select__options_option'>
						<span>{value.label}</span>
						{!value.increase && <Icon className='select__icon'  id='price-list' />}
					</span>}
			</div>
				{showOptions && (
					<div  className="select__options">
						{options.map(option => (
							<div 
								className = "select__options_option"
								onClick={()=> {onChange(option); setShowOptions(!showOptions)}}
								key={[option.value,'Increase',option.increase].join('')}
							>
								<span>{option.label}</span>
								{!option.increase && <Icon className='select__icon' id='price-list'/>}
							</div>	
						))}
					</div>
				)}
		</div>
  );
};

export default Select;
