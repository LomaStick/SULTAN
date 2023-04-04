import * as React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import CartPage from '../pages/CartPage';
import CatalogPage from '../pages/CatalogPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import OrderPage from '../pages/OrderPage';
import ProductPage from '../pages/ProductPage';

interface IAppRouterProps {
}

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
  return (
	<>
		<Routes >
				<Route path='admin' element={<AdminPage />}> </Route>
				<Route path='/' element={<HomePage />}/>
				<Route path='catalog' element={<CatalogPage />}/>
				<Route path='catalog/:id' element={<ProductPage />}/>
				<Route path='cart' element={<CartPage />}/>
				<Route path='cart/order' element={<OrderPage />}/>
				<Route path='*' element={<ErrorPage />}/>
		</Routes>
	</>
  );
};

export default AppRouter;
