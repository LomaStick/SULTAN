import * as React from 'react';
import './PriceListModal.scss'
import Input from '../../UI/Input/Input';
import Icon from '../Icon/Icon';
import Button from '../../UI/Button/Button';

interface IPriceListModalProps {
}

const PriceListModal: React.FunctionComponent<IPriceListModalProps> = (props) => {
  return (
	<div className="priceModal">
		<header className="priceModal__header">
			<h2 className='priceModal__title'>Куда прислать <br/>оптовый прайс-лист?</h2>
			<h4 className='priceModal__subtitle'>Получите оптовый прайс лист с лучшими ценами <br/>в Акмолинской области
</h4>
		</header>
		<form action="#" className='priceModal__form priceModal-form'>
			<div className="priceModal-form__colum">
				<label className='priceModal-form__label'>
					<span>Имя*</span>
					<Input placeholder='Введите ваше имя' onChange={()=>{}}/>
				</label>
				<label className='priceModal-form__label'>
					<span>Телефон*</span>
					<Input placeholder='Введите ваш телефон' onChange={()=>{}}/>
				</label>
			</div>
			<div className="priceModal-form__colum">
				<label className='priceModal-form__label'>
					<span>E-mail*</span> 
					<Input placeholder='Введите ваш E-mail' onChange={()=>{}}/>
				</label>
				<label className='priceModal-form__label'>
					<span>Название организации*</span> 
					<Input placeholder='Введите название организации' onChange={()=>{}}/>
				</label>
			</div>
		</form>
		<p className='priceModal__text'>Куда отправить прайс-лист?</p>
		<footer className="priceModal__footer">
			<button className='priceModal__btn_whatsup'>
				WhatsApp
				<Icon id='WhatsUp' />
			</button>
			<button className='priceModal__btn_email'>
				E-mail
				<Icon id='mail' />
			</button>
			<Button text = 'Отправить' variant = 'orange' style={{width: '100%'}} />
		</footer>
	</div>
  );
};

export default PriceListModal;
