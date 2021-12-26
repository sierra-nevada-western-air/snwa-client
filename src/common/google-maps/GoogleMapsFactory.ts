import AirportResponse from '../../features/airports/models/AirportResponse';

export default class GoogleMapsFactory {
	public static ToMarker(response: AirportResponse): google.maps.Marker {
		return new google.maps.Marker({
			position: { lat: response.position.latitude, lng: response.position.longitude },
			title: response.name,
		});
	}

	public static ToPolyline(from: AirportResponse, to: AirportResponse): google.maps.Polyline {
		return new google.maps.Polyline({
			path: [
				new google.maps.LatLng(from.position.latitude, from.position.longitude),
				new google.maps.LatLng(to.position.latitude, to.position.longitude),
			],
			geodesic: true,
			strokeColor: '#40E0D0',
			strokeOpacity: 1.0,
			strokeWeight: 2,
		});
	}

	public static ToDistance(from: AirportResponse, to: AirportResponse): number {
		const degreesToRadians = (degrees: number): number => {
			return (degrees * Math.PI) / 180;
		};

		const distanceInKmBetweenEarthCoordinates = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
			var earthRadiusKm = 6371;

			var dLat = degreesToRadians(lat2 - lat1);
			var dLon = degreesToRadians(lon2 - lon1);

			lat1 = degreesToRadians(lat1);
			lat2 = degreesToRadians(lat2);

			var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			return Math.round(earthRadiusKm * c * 0.6213);
		};

		return distanceInKmBetweenEarthCoordinates(from.position.latitude, from.position.longitude, to.position.latitude, to.position.longitude);
	}
}
