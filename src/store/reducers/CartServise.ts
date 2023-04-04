import { IProduct } from "../../types/IProduct";

export function getTotalPriceCartItem(cartItem : IProduct) {
	let totalPrice = 0;
	totalPrice += cartItem.price * cartItem.cartCount
	return parseFloat(totalPrice.toFixed(2)) 
}

export function getTotalPriceCart(cartItems: IProduct[]) {
	let totalPrice = 0;
	cartItems.map(item => {
		totalPrice += getTotalPriceCartItem(item)
	})
	return parseFloat(totalPrice.toFixed(2)) 
}