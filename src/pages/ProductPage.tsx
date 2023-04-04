import React, { useEffect, useState } from 'react'; 
import { Navigate, useParams } from 'react-router-dom'; 
import { useFetching } from '../hooks/useFetching'; 
import { IProduct } from '../types/IProduct';
import ProductService from '../API/ProductSevice';
import Container from '../components/elements/Container/Container';
import ProductCard from '../components/elements/ProductCard/ProductCard';
import Loader from '../components/elements/Loader/Loader';

 
interface ProductPageParams { 
	id: string; 
	[key: string]: string | undefined; 
} 
 
interface IProductPageProps { 
} 
 
const ProductPage: React.FunctionComponent<IProductPageProps> = (props) => { 
	const id  = Number(useParams<ProductPageParams>().id); 

	const [product, setProduct] = useState<IProduct | null> (null)
	const [fetchProductById, isLoading, error] = useFetching ( async ()=>{ 
		const data = await ProductService.getById (id) 
		setProduct(data)
	}) 

	useEffect(()=>{ 
	fetchProductById()
	}, [id])
 
	
	if (isNaN(id)) return <Navigate to={'*'} />
	if (!product) return <div>Товар не найден</div>; 
	
   
	return ( 
		<div className='productPage'>
			<Container>
				{isLoading
				?	<Loader />
				:	<div className='productPage__product product'> 
						<ProductCard variant={'productPage'} product={product} />
					</div> 
				}
			</Container>
		</div>
	); 
}; 
 
export default ProductPage;