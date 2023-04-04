import * as React from 'react';
import './ButtonDrop.scss'
import Icon from '../../elements/Icon/Icon';

interface IButtonDropProps {
	state: boolean;
	onClick: ()=> void;
	text: string
}

const ButtonDrop: React.FunctionComponent<IButtonDropProps> = ({state, onClick, text}) => {
  return (
		<button className={['ButtonDrop', state ? '_active': ''].join(' ')} onClick={()=> onClick()}> 
					<span>{text}</span> 
					<Icon id ='arrow-down' /> 
		</button>
  );
};

export default ButtonDrop;
