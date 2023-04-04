import Icon from "../../elements/Icon/Icon";
import './AddToCart.scss'



interface AddToCartProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	onClick?: () => void;
	icon?: string;
	};

const AddToCart: React.FunctionComponent<AddToCartProps> = ({
	text, 
	className = '', 
	onClick, 
	icon,
	...props
}) => {


	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			className='ButtonAddToCart'
			onClick={handleClick}
			{...props}
		>
			{text && <span className="ButtonAddToCart__text">{text}</span>}
			{icon && <Icon className="ButtonAddToCart__icon" id={icon}/>}
		</button>
	);
};
export default AddToCart