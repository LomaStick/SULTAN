import * as React from 'react';
import Input from '../../../UI/Input/Input';
import OrderCardInfo from '../OrderCardInfo/OrderCardInfo';
import Button from '../../../UI/Button/Button';
import './OrderForm.scss'
import { useAppDispatch } from '../../../../hooks/redux';
import { cartSlice } from '../../../../store/reducers/CartSlice';
import Modal from '../../../UI/Modal/Modal';
import OrderModalSubmit from '../OrderModalSubmit/OrderModalSubmit';


interface IOrderFormProps {
}

const OrderForm: React.FunctionComponent<IOrderFormProps> = (props) => {

	const {removeCart} = cartSlice.actions
	const dispatch = useAppDispatch()
	const [modal, setModal] = React.useState(false)
	const handleClickSubmit = () =>{
		dispatch(removeCart(''))
		setModal(true)
		
	}

	return (
		<>
			<Modal visible = {modal} setVisible={() => setModal(false)} >
				<OrderModalSubmit />	
			</Modal> 
			<form className="order__form">
				<div className="order__column">
					<div className="order__block order-block">
						<div className="order-block__title">
							<span className='order-block__number'>1</span>
							<h4>Контактные данные</h4>
						</div>
						<label className='order-block__label'>
							<span>Имя*</span>
							<Input placeholder='Введите ваше имя' onChange={()=>{}}/>
						</label>
						<label className='order-block__label'>
							<span>Телефон*</span>
							<Input placeholder='Введите ваш телефон' onChange={()=>{}}/>
						</label>
						<label className='order-block__label'>
							<span>E-mail*</span> 
							<Input placeholder='Введите ваш E-mail' onChange={()=>{}}/>
						</label>
						<label className='order-block__label'>
							<span>Название организации*</span> 
							<Input placeholder='Введите название организации' onChange={()=>{}}/>
						</label>
					</div>
					<div className="order__block order-block">
						<div className="order-block__title">
							<span className='order-block__number'>2</span>
							<h4>Контактные данные</h4>
						</div>
						<label className='order-block__label'>
							<span>Город</span> 
							<Input placeholder='Выберете ваш город' onChange={()=>{}}/>
						</label>
						<label className='order-block__label'> 
							<span>Адрес</span> 
							<Input placeholder='Введите адрес доставки' onChange={()=>{}}/>
						</label>
					</div>
					<Button type='button' variant='orange' text='Подтверждение заказа' style={{width: 290}} onClick={handleClickSubmit}/>
				</div>
				<div className="order__column">
					<div className="order__block">
						<OrderCardInfo icon='pay' title='Оплата' text='Принимаем оплату наличными, по карте и через расчетный счет.' /> 
						<OrderCardInfo icon='delivery' title='Доставка' text='Бесплатная доставка от 10 000 ₸ по области. Наша доставка работает ежедневно.' />
						<OrderCardInfo icon='question' title='Возникли вопросы?' text='Звоните: +7 777 490 00 91 Менеджер Вам ответит на все вопросы.' />
					</div>
					<div className='order__block'>
						<div className="order-block__title">
							<span className='order-block__number'>3</span>
							<h4>Контактные данные</h4>
						</div>
						<label className='order-block__label'> 
						<span>Комментарий</span>
							<textarea className='order-block__comments' placeholder='Введите ваш комментарий' onChange={()=>{}} style={{height: "100%"}}/>
						</label>
					</div>
				</div>
			</form>
		</>
	);
};

export default OrderForm;
