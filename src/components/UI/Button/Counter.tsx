import './Counter.scss'



interface CounterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	onClick?: () => void;
	};

const Counter: React.FunctionComponent<CounterProps> = ({
	text, 
	className = '', 
	onClick, 
	...props
}) => {


	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			className='ButtonCounter'
			onClick={handleClick}
			{...props}
		>
			{text && <span className="ButtonCounter__text">{text}</span>}
		</button>
	);
};
export default Counter