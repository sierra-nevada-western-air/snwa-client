import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { ReactElement } from 'react';
import GoogleMaps from '../../utilities/constants/googleMaps';
import RouteMapIndex from './RouteMapIndex';

const RouteMapContainer: React.FC = () => {
	const render = (status: Status): ReactElement => {
		return <h1>{status}</h1>;
	};

	return (
		<Wrapper apiKey={GoogleMaps.ApiKey} render={render}>
			<RouteMapIndex />
		</Wrapper>
	);
};

export default RouteMapContainer;
