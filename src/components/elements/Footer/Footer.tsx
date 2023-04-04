import * as React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Container from '../Container/Container';
import List from '../List/List';
import Logo from '../Logo/Logo';
import './Footer.scss';
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon';
import { categoryesNav, mainMenuNav } from '../../../utils/consts';
import ContactItem from '../ContactItem/ContactItem';
import PriceList from '../PriceList/PriceList';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
	<div className="footer">
		<Container className='footer__wrapper' >
				<div  className='footer__info footer-info'>
					<Logo fill='#FFFFFF' />
					<p className='footer-info__desc'> Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
					<h5 className='footer-info__subtitle'>Подпишись н скидки и акции</h5>
					<Input onChange={()=>{}} placeholder='Введите ваш E-mail' icon='arrow_right' />
				</div>
				<nav className='footer__nav footer-nav'>
					<div className="footer-nav__item">
						<h4 className='footer-nav__title'>{mainMenuNav.title}</h4>
						<List className='footer-nav__list' items = {mainMenuNav.links} renderItem={(link) =>
							<Link key={link.path} className='footer-nav__link' to={link.path}>{link.text}</Link>
						}/>
					</div>
					<div className="footer-nav__item">
						<h4 className='footer-nav__title'>{categoryesNav.title}</h4>
						<List className='footer-nav__list' items = {categoryesNav.links} renderItem={(link) =>
								<Link key={link.path} className='footer-nav__link' to={link.path}>{link.text}</Link>
						}/>
					</div>
					<div className='footer-nav__item'>
						<h4 className='footer-nav__title'>Скачать прайс-лист:</h4>
						<div className="footer-nav__list">
							<PriceList  varian='orange'/>
							<h5 className='footer-nav__subtitle'>Связь в мессенджерах:</h5>
							<div className='footer-nav__icon_list'>
								<Link to='#' className='footer-nav__icon footer-nav__icon_WhatsUp' ><Icon id='WhatsUp'/></Link>
								<Link to='#' className='footer-nav__icon footer-nav__icon_Telegram' ><Icon id='Telegram' /></Link>
							</div>
						</div>
					</div>
					<div className='footer-nav__item'>
						<h4 className='footer-nav__title'>Контакты:</h4>
						<div className="footer-nav__list">
							<ContactItem 
								title='+7 (777) 490-00-91'
								subtitle='время работы: 9:00-20:00'
							>
								<Button text='Заказать звонок' variant='callback' />
							</ContactItem>
							<ContactItem 
								title='opt.sultan@mail.ru'
								subtitle='На связи в любое время'
								style={{marginTop: 20}}
							/>
							<div className='footer-nav__icon_list'>
								<Icon className='footer-nav__icon' id='Visa' />
								<Icon className='footer-nav__icon' id='MasterCard' />
							</div>
						</div>
					</div>
				</nav>
		</Container>
	</div>
  );
};

export default Footer;
