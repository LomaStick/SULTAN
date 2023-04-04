import * as React from 'react';
import './Modal.scss'
import Icon from '../../elements/Icon/Icon';


interface IModalProps {
	children?: React.ReactNode;
	visible?: boolean;
	setVisible?: ()=> void;
}

const Modal: React.FunctionComponent<IModalProps> = ({children , visible = false , setVisible}) => {
	const rootclass = ['modal']
	if (visible){
		rootclass.push('modal_active')
	}
	return (
		<div className={rootclass.join(' ')} onClick = {setVisible}>
			<div className="modal__content" onClick={(e)=> e.stopPropagation()} >
				<div className="modal__cross" onClick = {setVisible}>
					<Icon id='cross'/>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
