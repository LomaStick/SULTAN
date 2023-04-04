import {createSlice} from '@reduxjs/toolkit'
import { IProduct } from '../../types/IProduct';

interface cartState{
	cartItems: IProduct[]
	isLoading: boolean;
	error: string,
}

const initialState: cartState = {
	cartItems: [],
	isLoading: false,
	error: '',
}

export const cartSlice = createSlice ({
	name: 'cart',
	initialState,
	reducers:{
		addToCart(state ,action){
			const itemInCart = state.cartItems.find((item) => item.barcode === action.payload.product.barcode);
			itemInCart 
				? itemInCart.cartCount += action.payload.count
				: state.cartItems.push({ ...action.payload.product, cartCount: action.payload.count });
		},
		removeToCart(state ,action){
			const itemInCart = state.cartItems.find((item) => item.barcode === action.payload.barcode);
			if (itemInCart && itemInCart.cartCount > 1){
				itemInCart.cartCount-- 
			}else{
				state.cartItems = state.cartItems.filter((item) => item.barcode !== action.payload.barcode)
			}
		},
		removeItemToCart(state, action){
			state.cartItems = state.cartItems.filter((item) => item.barcode !== action.payload.barcode)
		},
		removeCart(state, action){
			state.cartItems = []
		}
	}
})

export default cartSlice.reducer;