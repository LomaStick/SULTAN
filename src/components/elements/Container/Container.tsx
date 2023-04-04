import * as React from 'react';
import style from './Container.module.scss'

interface IContainerProps {
	className?:string;
	children?: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({className, children}) => {
  return (
	<div className={[className, style.container].join(' ')}>
		{children}
	</div>
  );
};

export default Container;
