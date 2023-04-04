import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";
import Button from "../../UI/Button/Button";
import Icon from "../Icon/Icon";
import './ProductCard.scss'
import AddToCart from "../../UI/Button/AddToCart";
import { cartSlice } from "../../../store/reducers/CartSlice";
import { useAppDispatch } from "../../../hooks/redux";
import Counter from "../../UI/Button/Counter";
import { getTotalPriceCartItem } from "../../../store/reducers/CartServise";
import PriceList from "../PriceList/PriceList";
import ButtonDrop from "../../UI/Button/ButtonDrop";


type IProductCardProps = {
	product: IProduct;
	variant?: "productPage" | "catalog" | "cart" | "order";
};

const ProductCard: FC<IProductCardProps> = ({ product, variant, }) => {
	const { title,imgurl, sizevalue, sizetype, barcode , manufacturer, brand, description, price, currency, cartCount} = product;
	const router = useNavigate()
	let sizeimg: string;
	sizetype === 'мл' ? sizeimg = 'sizebottle' : sizeimg = 'sizebox';

	const [showAll, setShowAll] = React.useState (false);
	const {addToCart, removeToCart, removeItemToCart} = cartSlice.actions
	const [productPageCounter, setProductPageCounter] = useState<number>(1)
	const dispatch = useAppDispatch()
	const totalPriceItem = getTotalPriceCartItem(product)
	
	function handleClickShowAll(){
		setShowAll(!showAll)
	}
	
	const renderCatalogVariant = () => {
		return (
			<div className="product-card_catalog" id={`${barcode}`}>
				<div className="product-card__img">
					<img  src={'/data/img/'+ imgurl} alt=''/>
				</div>
				<div className="product-card__size">
					<Icon  id={sizeimg} />
					<span>{sizevalue} {sizetype}</span>
				</div>
				<button  className='product-card__title' onClick={()=> router(`/catalog/${barcode}`)}>
					<span><b>{brand}</b> {title}</span>
				</button>
				<div className='product-card__attr_list'>
					<div className='product-card__attr'>Штрихкод: <span>{barcode}</span></div>
					<div className='product-card__attr'>Произовдитель: <span>{manufacturer}</span></div>
					<div className='product-card__attr'>Бренд: <span>{brand}</span> </div>
				</div>
				<div className='product-card__actions'>
					<span className='product-card__price'>{price} {currency}</span>
					<AddToCart text='В корзину' icon='cart' style={{width: 153, height: 45}} onClick={()=>{dispatch(addToCart({product, count: 1 }))}} />
				</div>
			</div>
    );
  };

	const renderProductPageVariant = () => {
		return (
		<div className="product-card_productPage">
			<div className="product-card__img">
					<img  src={'/data/img/'+ imgurl} alt=''/>
			</div>
			<div className="product-card__content">
				<span className="product-card__count">В наличии</span>
				<div  className='product-card__title'>
					<span><b>{brand}</b> {title}</span>
				</div>
				<div className="product-card__size">
					<Icon  id={sizeimg} />
					<span>{sizevalue} {sizetype}</span>
				</div>
				<div className='product-card__actions product-cart-actions'>
					<div className="product-cart-actions__cart"> 
						<span className='product-card__price'>{price} {currency}</span>
						<div className="product-card__counter">
							<Counter text="-" onClick={()=>{setProductPageCounter(productPageCounter > 1 ? productPageCounter - 1: productPageCounter)}} />
								<span className="product-card__counter_text">{productPageCounter}</span>
							<Counter text="+" onClick={()=>{setProductPageCounter(productPageCounter + 1)}} />
						</div>
						<AddToCart text='В корзину' icon='cart' style={{width: 153, height: 45}} onClick={()=>{
							dispatch(addToCart({product, count: productPageCounter}));
							setProductPageCounter(1)
							}} />
					</div>
					<div className="product-cart-actions__other">
						<Button icon='share' variant='white'style={{marginRight: 10}}/>
						<p className="Button-white " style={{maxWidth: 360, padding: '0 15px', marginRight: 10}}> При покупке от span 10 000 ₸ 
						бесплатная доставка по Кокчетаву и области </p>
						<PriceList 
							style={{width: 185}}
							varian="white"
						/> 
					</div>
				</div>
				<div className='product-card__attr_list'>
					<p className='product-card__attr'>Произовдитель: <span>{manufacturer}</span></p>
					<p className='product-card__attr'>Бренд: <span>{brand}</span> </p>
					<p className='product-card__attr'>Штрихкод: <span>{barcode}</span></p>
				</div>
				
				<div className="product-card__desc">
					<ButtonDrop text="Описание" state={showAll} onClick={()=> handleClickShowAll()} />
					<span className={['product-card__descText', showAll ? '_active': ''].join(' ')}>{description}</span>
					<span className="product-card__desc_delimeter"></span>
				</div>
				
			</div>
		</div>
		);
	};

	const renderCartVariant = () => {
		return (
			<div className="product-card_cart">
				<div className="product-card__img">
						<img  src={'/data/img/'+ imgurl} alt=''/>
				</div>
				<div className="product-card__content">
					<div className="product-card__size">
						<Icon  id={sizeimg} />
						<span>{sizevalue} {sizetype}</span>
					</div>
					<button  className='product-card__title' onClick={()=> router(`/catalog/${barcode}`)}>
						<div>{brand} {title}</div>
					</button>
					<div className='product-card__descText'>
						{description}
					</div>
				</div>
				<div className='product-card__actions'>
					<div className="product-card__counter">
						<Counter text="-" onClick={()=>{dispatch(removeToCart(product))}} />
						<span className="product-card__counter_text">{cartCount}</span>
						<Counter text="+"onClick={()=>{dispatch(addToCart({product, count: 1 }))}} />
					</div>
					<span className='product-card__price'>{totalPriceItem} {currency}</span>
					<Button icon={'delete'} style={{width: 60} } onClick={()=>{dispatch(removeItemToCart(product))}}/>
				</div>
			</div>
		);
	};

	const renderOrderVariant = () => {
		return (
			<div className="product-card_order">
				<div className="product-card__img">
						<img  src={'/data/img/'+ imgurl} alt=''/>
				</div>
				<div className="product-card__content">
					<div className="product-card__size">
						<Icon  id={sizeimg} />
						<span>{sizevalue} {sizetype}</span>
					</div>
					<button  className='product-card__title' onClick={()=> router(`/catalog/${barcode}`)}>
					<span>{brand} {title}</span>
				</button>
					<span className='product-card__price'>{totalPriceItem} {currency}</span>
				</div>
			</div>
		);
	};

	let productCard = null;
	switch (variant) {
		case "productPage":
		productCard = renderProductPageVariant();
		break;
		case "catalog":
		productCard = renderCatalogVariant();
		break;
		case "order":
		productCard = renderOrderVariant();
		break;
		default:
		productCard = renderCartVariant();
		break;
	}

	return productCard;
};
export default ProductCard;