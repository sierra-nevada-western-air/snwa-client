import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../common/styles/style.scss';
import Home from '../features/home/Home';
import Footer from '../features/layout/Footer';
import Header from '../features/layout/Header';
import RouteMapContainer from '../features/route-map/RouteMapContainer';
import AircraftIndex from '../features/travel-information/aircraft/AircraftIndex';
import TravelInformation from '../features/travel-information/TravelInformation';
import TravelInformationIndex from '../features/travel-information/TravelInformationIndex';
import SitePaths from '../router/sitePaths';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path={SitePaths.RouteMap} element={<RouteMapContainer />} />
				<Route path={SitePaths.TravelInformationIndex} element={<TravelInformation />}>
					<Route path={SitePaths.AircraftIndex} element={<AircraftIndex />} />
					<Route index element={<TravelInformationIndex />} />
				</Route>
			</Routes>
			<Footer />
		</React.Fragment>
	);
};

export default App;
