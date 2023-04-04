import React, { useState } from 'react';
import List from '../../List/List';
import ProductCard from '../../ProductCard/ProductCard';
import Icon from '../../Icon/Icon';
import { IProduct } from '../../../../types/IProduct';
import { useItemsPerPage, usePageNumbers } from '../../../../hooks/usePagination';
import Pagination from '../../../UI/Pagination/Pagination';
import './CatalogList.scss'


interface ICatalogListProps {
	itemsCountPerPage: number;
	totalItems: number;
	products: IProduct[];
}

const CatalogList: React.FunctionComponent<ICatalogListProps> = ({itemsCountPerPage, totalItems, products}) => {
	const [currentPage, setCurrentPage] = useState (1);
	const productPerPage = useItemsPerPage (currentPage, itemsCountPerPage, products)
	const pageNumbers = usePageNumbers (totalItems, itemsCountPerPage);
	
	return (
		<>
			{products.length 
				? <List className='catalogList catalogList_grid' items={productPerPage} renderItem = {(product) => 
					<ProductCard key={product.barcode} variant={'catalog'} product={product} />}/>
				: <div className='catalogList_error'>Товары не найдены...</div>}
				
			{pageNumbers.length > 1 
				?
				<div className="catalogList__pagination">
					<Icon onClick={()=> setCurrentPage(currentPage > 1 ? currentPage - 1: currentPage)} className='catalogList__pagination_icon' id='arrow_left' />
					<Pagination currentPage={currentPage} pageNumbers = {pageNumbers} className="catalog-content-pagination" onClick={(pageNumber) => setCurrentPage(pageNumber)}/>
					<Icon onClick={()=> setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1: currentPage)} className='catalogList__pagination_icon' id='arrow_right' />
				</div>
				: <span></span>}
		</>
	)
}
export default CatalogList;