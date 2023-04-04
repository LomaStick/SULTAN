import * as React from 'react';
import List from '../List/List';
import ProductCard from '../ProductCard/ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Cart.scss'
import { useAppSelector } from '../../../hooks/redux';
import { getTotalPriceCart } from '../../../store/reducers/CartServise';
import Icon from '../Icon/Icon';

interface ICartProps {
	variant?: 'cart' | 'order' | 'little'
}


const Cart: React.FunctionComponent<ICartProps> = ({variant}) => {
	const navigate = useNavigate()
	const {cartItems} = useAppSelector(state => state.cartReducer)
	const totalPriceCart = getTotalPriceCart(cartItems)

	switch (variant) {
		case 'order':
			return(
				<div className='orderCart'>
					<h4 className='orderCart__title'>Ваш заказ</h4>
					{cartItems.length
						? <List className='orderCart__list' items={cartItems} renderItem = {(product) => 
							<ProductCard
								key={product.barcode} 
								variant={'order'} 
								product={product}
								/>}/>
						: <h4 className='orderCart__list_empty'> </h4>
					}
					<div className="orderCart__footer orderCart-footer">
						{totalPriceCart !== 0 && <div className="orderCart-footer__line">
							<h4 className='orderCart-footer__title'>Итого</h4>
							<span className="orderCart-footer__totalPrice">{totalPriceCart} ₸ </span>
						</div>} 
						
							<Button variant='orange' text='Редактировать заказ' icon='foundation-pencil' onClick={()=>{
								navigate('/cart')
							}}/>
					</div>
				</div>
			)
		case 'little':
			return (
				<Link to={'/cart'} key={'/cart'}>
					<div className="littleCart">
						<Icon className='littleCart__icon  _alert' id={'cart'}> <span>{cartItems.length}</span></Icon>
						<div className='littleCart__content'>
							<span className='littleCart__title'>Корзина</span>
							<p className='littleCart__price'>{totalPriceCart} ₸</p>
						</div>
					</div>
				</Link >
			  );
		default:
			return(
				<>
					{cartItems.length
						? <List className='cart__list' items={cartItems} renderItem = {(product) => 
							<ProductCard
								key={product.barcode} 
								variant={'cart'} 
								product={product}
								/>}/>
						: <h4 className='cart__list_empty'> Пусто... </h4>
					}
					{totalPriceCart !== 0 && 
					<div className="cart__footer">
							<Button variant='orange' text='Оформить заказ' onClick={()=>{
								navigate('order')
							}}/>
						<span className="cart__totalPrice">{totalPriceCart} ₸ </span>
					</div>}
				</>
			)
	}
};

export default Cart;
