import * as React from 'react';
import './OrderPage.scss'
import Container from '../components/elements/Container/Container';
import OrderForm from '../components/elements/Order/OrderForm/OrderForm';
import Cart from '../components/elements/Cart/Cart';
import Modal from '../components/UI/Modal/Modal';


interface IOrderPageProps {
}

const OrderPage: React.FunctionComponent<IOrderPageProps> = (props) => {
  return (
	<div className="orderPage">
		<Container >
			<h2 className='orderPage__title'>Оформление заказа</h2>
			<div className="orderPage__content">
					<OrderForm />
					<Cart variant='order'/> 
					
			</div>
		</Container>
	</div>
  );
};

export default OrderPage;
