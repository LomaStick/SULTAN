import { useMemo } from 'react';
import { IProduct } from '../types/IProduct';
import { IOption } from '../types/Options';


export const useSortedProducts = (products:any[], sort : IOption) => {
	const sortedProducts = useMemo<IProduct[]>(()=>{
		let sorting;
		if (sort.value === 'price'){
			sorting = [...products].sort((a, b) => a[sort.value]- b[sort.value])
		} else{
			sorting = [...products].sort((a, b) => a[sort.value].localeCompare(b[sort.value]))
		}
		if (!sort.increase){
			return sorting.reverse()
		}
		return sorting
		},[sort, products]) 

	return sortedProducts;
}

export const useProducts = (products:IProduct[], sort : IOption, query: string, field: string ) => {
	const sortedProducts = useSortedProducts(products, sort)
	
	const sortedAndSearchedProducts = useMemo<IProduct[]>(()=>{
		return sortedProducts.filter(product => String(product[field as keyof IProduct]).toLocaleLowerCase().includes(query.toLocaleLowerCase()))
	}, [query, field, sortedProducts])
	return sortedAndSearchedProducts
}