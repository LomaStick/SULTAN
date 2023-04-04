import * as React from 'react';
import { Navigate } from 'react-router-dom';

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
	<div className="HomePage">
		Home
		<Navigate to={'/catalog'} / >
	</div>
  );
};

export default HomePage;
