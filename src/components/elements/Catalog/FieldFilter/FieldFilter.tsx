import * as React from 'react';
import Input from '../../../UI/Input/Input';
import ProductService from '../../../../API/ProductSevice';
import { IProduct } from '../../../../types/IProduct';
import List from '../../List/List';
import './FieldFilter.scss'
import ButtonDrop from '../../../UI/Button/ButtonDrop';
import CheckBox from '../../../UI/CheckBox/CheckBox';

interface IFieldFilterProps {
	products: IProduct[]
	title: string;
	value: string;
	onChange: (value: string, field: string) => void
	field: string;
}

const FieldFilter: React.FunctionComponent<IFieldFilterProps> = ({products, value, onChange, title, field}) => {
	const checkboxValues = ProductService.getUniqFieldValues(products, field)
	const [showAll, setShowAll] = React.useState (false);
	
	function handleClickShowAll(){
		setShowAll(!showAll)
	}
	function handleChangeFieldFilter(value: string, field: string){
		onChange(value, field)
	}
  return (
		<div className="field-filter">
			<h4 className='field-filter__title'>{title}</h4>
			<Input placeholder='Поиск...' onChange={e => handleChangeFieldFilter(e.target.value, field)} icon='search' />
			<div className="field-filter__checkbox field-filter-checkbox">
				<List className={['field-filter-checkbox__list',  showAll ? '_active': ''].join(' ')} items={checkboxValues} renderItem = {(value) => 
						<CheckBox id={value} label={value} isChecked = {false} onChange={(id: string | number  )=>{}} />}/>
			</div>
			<ButtonDrop text='Показать все' state={showAll} onClick={()=> handleClickShowAll()} /> 
		</div>
  );
};

export default FieldFilter;
