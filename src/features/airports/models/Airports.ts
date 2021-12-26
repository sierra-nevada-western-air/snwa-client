import AirportResponse from './AirportResponse';

export default function GetAirports(): Array<AirportResponse> {
	return [
		{
			id: '1',
			name: 'Kansas City - MCI',
			position: {
				latitude: 39.3023103,
				longitude: -94.7211899,
			},
		},
		{
			id: '2',
			name: 'Pittsburgh - PIT',
			position: {
				latitude: 40.4917827,
				longitude: -80.2370245,
			},
		},
	];
}
