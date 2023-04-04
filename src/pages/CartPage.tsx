import React from 'react';
import Container from '../components/elements/Container/Container';
import Button from '../components/UI/Button/Button';
import './CartPage.scss'
import { Link } from 'react-router-dom';
import Cart from '../components/elements/Cart/Cart';


interface ICartPageProps {
}

const CartPage: React.FunctionComponent<ICartPageProps> = (props) => {



	return (
		<div className='cartPage'>
			<Container >
				<div className='cartPage_header'>
					<h2 className='cartPage__title'>КОРЗИНА</h2>
				</div>
				<Cart />
			</Container>
		</div>
	);
};

export default CartPage;
