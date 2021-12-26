import React, { useEffect, useState } from 'react';
import { Column, Columns, Container, Section } from '../../common/bulma';
import Map from '../../common/google-maps/Map';
import GoogleMapsFactory from '../../common/google-maps/GoogleMapsFactory';
import AirportResponse from '../airports/models/AirportResponse';
import RouteMapSearchArticle from './RouteMapSearchArticle';

const RouteMapIndex: React.FC<RouteMapIndexProps> = ({ airports }) => {
	const markers = airports.map((airport) => GoogleMapsFactory.ToMarker(airport));

	const [polylines, setPolylines] = useState<Array<google.maps.Polyline>>([]);

	return (
		<Container>
			<Section>
				<Columns>
					<Column options="is-one-quarter">
						<RouteMapSearchArticle airports={airports} setPolylines={setPolylines} />
					</Column>
					<Column>
						<Map markers={markers} polylines={polylines} />
					</Column>
				</Columns>
			</Section>
		</Container>
	);
};

interface RouteMapIndexProps {
	airports: Array<AirportResponse>;
}

export default RouteMapIndex;
