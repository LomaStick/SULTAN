import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import AppRouter from './routes/AppRouter';
import Breadcrumbs from './components/UI/Breadcrumbs/Breadcrumbs';
import { Provider } from 'react-redux'
import { setupStore } from './store/store';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
	const store = setupStore();
	return (
		<Provider store={store} >
			<BrowserRouter >
				<div className='App'>
					<Header />
					<Breadcrumbs />
					<main className='App__main'>
						<AppRouter />
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
