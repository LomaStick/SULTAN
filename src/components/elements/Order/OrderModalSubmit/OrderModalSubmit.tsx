import * as React from 'react';
import Button from '../../../UI/Button/Button';
import './OrderModalSubmit.scss'
import Icon from '../../Icon/Icon';

interface IOrderModalSubmitProps {
}

const OrderModalSubmit: React.FunctionComponent<IOrderModalSubmitProps> = (props) => {
  return (
	<div className='orderModal'>
		<div className='orderModal__icon'>
			<Icon id='arrow-double'/> 
		</div>
		<h4 className="orderModal__title">
			Спасибо за заказ
		</h4>
		<h6 className="orderModal__subtitle">
			Наш менеджер свяжется с вами в ближайшее время
		</h6>
	</div>
  );
};

export default OrderModalSubmit;
