import * as React from 'react';
import Icon from '../../Icon/Icon';
import './OrderCardInfo.scss'

interface IOrderCardInfoProps {
	title: string;
	text: string;
	icon: string;
}

const OrderCardInfo: React.FunctionComponent<IOrderCardInfoProps> = ({icon, title, text }) => {
  return (
	<div className="cardInfo">
		<div className='cardInfo__title'>
			<Icon className='cardInfo__icon' id={icon} />
			<span>{title}</span> 
		</div>
		<p className='cardInfo__text'>
			{text}
		</p>
	</div>
  );
};

export default OrderCardInfo;
