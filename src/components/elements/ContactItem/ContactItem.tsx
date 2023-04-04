import * as React from 'react';
import Icon from '../Icon/Icon';
import styles from './ContactItem.module.scss'


interface IContactItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
	title : string;
	subtitle: string;
	icon?: string;
	children?: React.ReactNode
}

const ContactItem: React.FunctionComponent<IContactItemProps> = ({title, subtitle, icon, children, ...props}) => {
  return (
	<div 	className={styles.item__wrapper} >
	{icon && <Icon className={styles.item__icon} id={icon}/>}
	<div className={styles.item} {...props} >
		<span className={styles.item__title}>{title}</span>
		<p className={styles.item__subtitle}>{subtitle}</p>
		{children}
	</div>
</div>
		
  );
};

export default ContactItem;
