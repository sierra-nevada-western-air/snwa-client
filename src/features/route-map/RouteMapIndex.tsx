import Map from '../../common/google-maps/Map';
import AirportResponse from '../airports/models/AirportResponse';

const RouteMapIndex: React.FC<RouteMapIndexProps> = ({ airports }) => {
	const markers: Array<google.maps.Marker> = [
		new google.maps.Marker({
			position: { lat: 39.3023103, lng: -94.7211899 },
			title: 'Kansas City - MCI',
		}),
	];

	return <Map markers={markers} />;
};

interface RouteMapIndexProps {
	airports: Array<AirportResponse>;
}

export default RouteMapIndex;
