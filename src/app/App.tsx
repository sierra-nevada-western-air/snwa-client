import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../common/styles/style.scss';
import Home from '../features/home/Home';
import Footer from '../features/layout/Footer';
import Header from '../features/layout/Header';
import RouteMapContainer from '../features/route-map/RouteMapContainer';
import SitePaths from '../router/sitePaths';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path={SitePaths.RouteMap} element={<RouteMapContainer />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
};

export default App;
