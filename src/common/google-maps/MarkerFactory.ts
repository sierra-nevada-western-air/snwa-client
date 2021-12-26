import AirportResponse from '../../features/airports/models/AirportResponse';

export default class MarkerFactory {
	public static ToMarker(response: AirportResponse): google.maps.Marker {
		return new google.maps.Marker({
			position: { lat: response.position.latitude, lng: response.position.longitude },
			title: response.name,
		});
	}
}
