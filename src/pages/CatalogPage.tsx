import React, { ChangeEvent, useState, useEffect } from 'react';
import './CatalogPage.scss'
import Container from '../components/elements/Container/Container';
import Select from '../components/UI/Select/Select';
import { useProducts } from '../hooks/useProducts';
import ProductService from '../API/ProductSevice';
import { useFetching } from '../hooks/useFetching';
import { options } from '../types/Options';
import Categoryes from '../components/elements/Catalog/Categoryes/Categoryes';
import Loader from '../components/elements/Loader/Loader';
import CatalogList from '../components/elements/Catalog/CatalogList/CatalogList';
import FieldFilter from '../components/elements/Catalog/FieldFilter/FieldFilter';
import PriceFilter from '../components/UI/PriceFilter/PriceFilter';


interface ICatalogProps {

}


const Catalog: React.FunctionComponent<ICatalogProps> = (props) => {
	useEffect(()=>{
		fetchProducts();
	},[]) 
	const [products, setProducts] = useState< any[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string | number> ('');
	const [filter, setFilter] = useState({sort: options[0], query:"", field: 'title'})
	const sortedAndSearchedProducts = useProducts (products, filter.sort, filter.query, filter.field)
	const [fetchProducts, isProductsLoading, productsError ] = useFetching(async ()=> {
		const data = await ProductService.getAll();
		setProducts(data);
	})
	const productCategoryes = ProductService.getUniqFieldValues( products ,"manufacturer");

	function handleClickCategory (category:string | number){
		if (selectedCategory === category) {
			setSelectedCategory('')
			setFilter({...filter, query: '', field: "title"})
		}else{
			setSelectedCategory(category)
			setFilter({...filter, query: String(category), field: "typeCategory"})
		}
	}
	function handleChangeFieldFilter(value: string ,field: string){
		setFilter({...filter, query: value, field: field})
	}

  return (
		<div className='catalog'>
			<Container>
				<header className='catalog__header catalog-header'>
					<h2 className='catalog-header__title'>Косметика и гигена</h2>
						<div className='catalog-header-select__wrapper'>
							<h4 className='catalog-header-select__title'>Сортировка:</h4>
							<Select 
								value={filter.sort}
								options = {options}
								onChange={(selection) => {setFilter({...filter, sort :selection})}}
							/>
						</div>
				</header>
				<Categoryes selected={selectedCategory} variant='nav' items={products} onClick = {(category) => handleClickCategory (category)}/> 
				<main className='catalog__main'>
						<aside className='catalog-aside'>
							<h4 className="catalog-aside__title">Подбор по параметрам</h4>
							<PriceFilter />
							<FieldFilter products = {products} title='Производитель' field='manufacturer' value={filter.query} onChange = {(value, field) => handleChangeFieldFilter(value, field)} />
							<FieldFilter products = {products} title='Бренд' field='brand' value={filter.query} onChange = {(value, field) => handleChangeFieldFilter(value, field)} />
							<Categoryes selected={selectedCategory} variant='aside' items={products} onClick = {(category) => handleClickCategory (category)}/>
						</aside>
						<div className='catalog__content'>
							{productsError && <h4 className='catalog-content_error'> произошла ошибка ${productsError} </h4>}
							{isProductsLoading
								? <Loader />
								: <CatalogList  itemsCountPerPage={9} totalItems={sortedAndSearchedProducts.length} products={sortedAndSearchedProducts} /> 
							}
							<h4 className='catalog__desc'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
							</h4>
						</div>
				</main> 
			</Container>
		</div>
  );
};

export default Catalog;
