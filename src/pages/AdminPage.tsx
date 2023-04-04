import * as React from 'react';
import Container from '../components/elements/Container/Container';

interface IAdminPageProps {
}

const AdminPage: React.FunctionComponent<IAdminPageProps> = (props) => {
  return (
	<div className="AdminPage">
		<Container >
			AdminPage
		</Container>
		
	</div>
  );
};

export default AdminPage;
