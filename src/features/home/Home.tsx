import React from 'react';
import Content from '../../common/bulma/elements/Content';
import Container from '../../common/bulma/layout/Container';

const Home: React.FC = () => {
	return (
		<Container>
			<Content>
				<p className="has-text-tertiary">Hello!</p>
			</Content>
		</Container>
	);
};

export default Home;
