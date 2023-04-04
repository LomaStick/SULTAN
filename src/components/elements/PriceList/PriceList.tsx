import * as React from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import PriceListModal from './PriceListModal';

interface IPriceListProps  {
	varian : 'orange' | 'white'
	style?: any
}

const PriceList: React.FunctionComponent<IPriceListProps> = ({varian, style}) => {

	const [modal, setModal] = React.useState(false)
  return (
	<>
		<Modal visible = {modal} setVisible={() => setModal(false)} >
			<PriceListModal />
		</Modal>
		<Button text='Прайс-лист' icon={'price-list'} onClick={()=>{setModal(true)}} variant={varian} style={style} />
	</>
  );
};

export default PriceList;
