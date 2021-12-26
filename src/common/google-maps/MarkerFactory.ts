import AirportResponse from '../../features/airports/models/AirportResponse';

export default class MarkerFactory {
	public static ToMarker(response: AirportResponse): Marker {
		return new google.maps.Marker();
	}
}
