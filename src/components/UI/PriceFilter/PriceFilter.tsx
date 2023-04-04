import * as React from 'react';
import './PriceFilter.scss'

interface IPriceFilterProps {
}

const PriceFilter: React.FunctionComponent<IPriceFilterProps> = (props) => {
  return (
	<div className="price-filter">
		<h4 className='price-filter__title'>Цена ₸</h4>
		<div className="price-filter__wrapper">
			<input className='price-filter__input' placeholder='0'/>
			<span className='price-filter__delimeter'>-</span>
			<input className='price-filter__input' placeholder='10 000'/>
		</div>
	</div>
  );
};

export default PriceFilter;
