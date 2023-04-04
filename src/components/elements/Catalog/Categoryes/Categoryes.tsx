import React from 'react';
import { IProduct } from '../../../../types/IProduct';
import ProductService from '../../../../API/ProductSevice';
import List from '../../List/List';
import './Categoryes.scss'
import ButtonDrop from '../../../UI/Button/ButtonDrop';

interface ICategoryesProps {
	items: IProduct[];
	variant: "nav" | "aside"
	selected: string | number;
	onClick: (category: string | number) => void
}

const Categoryes: React.FC<ICategoryesProps> = ({items, variant, selected, onClick}) => {

	const productCategoryes = ProductService.getUniqFieldValues( items ,"typeCategory");
	const [showAll, setShowAll] = React.useState (false);
	
	function handleClickShowAll(){
		setShowAll(!showAll)
	}
	const renderAsideVariant = () => {
		return(
			<>
				<List	className={['categoryesAside', showAll ? '_active': ''].join(' ')} items={productCategoryes}	renderItem={(category) =>
					<div key={category} className = {selected === category ? 'categoryesAside__item _active': 'categoryesAside__item'}>
						<h4 className='categoryesAside__title'
							onClick = {() => onClick(category)}	
						>{category}</h4>
						<p className='categoryesAside__subtitle'>Подкатегория</p>
						<p className='categoryesAside__subtitle'>Подкатегория</p>
						<p className='categoryesAside__subtitle'>Подкатегория</p>
					</div>
				}/>
				<ButtonDrop state={showAll} onClick={()=> handleClickShowAll()} text='Показать все' />
			</>
		)
	}
	const renderNavVariant = () => {
		return(
			<List	className='categoryesNav'	items={productCategoryes}	renderItem={(category) =>
				<div key={category} 
					className = {selected === category ? 'categoryesNav__item _active': 'categoryesNav__item'}
					onClick = {() => onClick(category)}
				>
					{category}
				</div>}/>
		)
	}
	
	let categoryes = null;
	switch (variant) {
		case "aside":
			categoryes = renderAsideVariant();
			break;
		default:
			categoryes = renderNavVariant();
			break;
	}
 
	return categoryes;
};

export default Categoryes;
