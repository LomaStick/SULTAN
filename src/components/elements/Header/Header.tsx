import * as React from 'react';
import { Link } from 'react-router-dom';
import { mainMenuNav } from '../../../utils/consts';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import ContactItem from '../ContactItem/ContactItem';
import Container from '../Container/Container';
import List from '../List/List';
import Logo from '../Logo/Logo';
import './Header.scss';
import CallBack from '../../../assets/img/callback.svg'
import Cart from '../Cart/Cart';
import PriceList from '../PriceList/PriceList';


interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	

  return (
	<header className="header">
		<div className="header__line header-line">
			<Container className='header-line__wrapper'>
				<div className="header-line__contactList">
					<ContactItem 
						icon = 'location'
						title='г. Кокчетав, ул. Ж. Ташенова 129Б'
						subtitle='(Рынок Восточный)'
						style={{marginRight: 40}}
					/>
					<ContactItem 
						icon='mail'
						title='opt.sultan@mail.ru'
						subtitle='На связи в любое время'
					/>
				</div>
				<List items = {mainMenuNav.links} renderItem={(link) =>
					<Link key={link.path} className='header-line__navLink' to={link.path}>{link.text}</Link>
				}/>
			</Container>
		</div>
		<div className="header__line header-actions">
			<Container className='header-actions__wrapper'>
				<div className='header-actions__line'>
					<Logo fill='#3F4E65' />
					<Link to='catalog'> 
						<Button text='Каталог' icon='catalog' variant='orange' style={{margin:'0 30px', minWidth: 192}} />
					</Link>
					<Input placeholder='Поиск...' onChange={()=>{}} icon='search' ></Input>
				</div>
				<div className='header-actions__line'>
					<ContactItem 
						title='+7 (777) 490-00-91'
						subtitle='время работы: 9:00-20:00'
						style={{textAlign: 'end'}}
					>
						<Button text='Заказать звонок' variant='callback' />
					</ContactItem>
					<div className='header-actions__callback header-actions__callback_active'>
						<img src={CallBack} alt='call back'/>
					</div>
					<PriceList varian='orange' style={{margin:'0 30px'}} />
					<Cart variant='little' />
				</div>
			</Container>
		</div>
	</header>
  );
};

export default Header;
