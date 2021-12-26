import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../common/styles/style.scss';
import Home from '../features/home/Home';
import Footer from '../features/layout/Footer';
import Header from '../features/layout/Header';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
};

export default App;
