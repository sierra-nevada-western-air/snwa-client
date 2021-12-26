import Map from '../../common/google-maps/Map';
import MarkerFactory from '../../common/google-maps/MarkerFactory';
import AirportResponse from '../airports/models/AirportResponse';

const RouteMapIndex: React.FC<RouteMapIndexProps> = ({ airports }) => {
	const markers = airports.map((airport) => MarkerFactory.ToMarker(airport));

	return <Map markers={markers} />;
};

interface RouteMapIndexProps {
	airports: Array<AirportResponse>;
}

export default RouteMapIndex;
