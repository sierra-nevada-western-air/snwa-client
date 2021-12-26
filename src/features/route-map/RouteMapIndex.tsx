import React, { useEffect, useState } from 'react';
import { Column, Columns, Container, Section } from '../../common/bulma';
import Map from '../../common/google-maps/Map';
import GoogleMapsFactory from '../../common/google-maps/GoogleMapsFactory';
import AirportResponse from '../airports/models/AirportResponse';

const RouteMapIndex: React.FC<RouteMapIndexProps> = ({ airports }) => {
	const markers = airports.map((airport) => GoogleMapsFactory.ToMarker(airport));

	const [polylines, setPolylines] = useState<Array<google.maps.Polyline>>([]);
	const [from, setFrom] = useState<AirportResponse>();
	const [to, setTo] = useState<Array<AirportResponse>>([]);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const eventAirport = event.target.value;

		setFrom(airports.filter((x) => x.name === eventAirport)[0]);
		setTo(airports.filter((x) => x.name !== eventAirport));
	};

	useEffect(() => {
		if (from) {
			setPolylines(to.map((toAirport) => GoogleMapsFactory.ToPolyline(from, toAirport)));
		}
	}, [from, setPolylines, to]);

	return (
		<Container>
			<Section>
				<Columns>
					<Column options="is-one-quarter">
						<article className="panel is-primary">
							<p className="panel-heading">Where we fly:</p>
							<div className="panel-block">
								<p className="control has-icons-left">
									<input
										className="input is-primary"
										list="airportDataList"
										type="text"
										placeholder="Search"
										onChange={(event): void => onInputChange(event)}
									/>
									<datalist id="airportDataList">
										{airports.map((airport): JSX.Element => {
											return <option key={airport.id} value={airport.name} />;
										})}
									</datalist>
									<span className="icon is-left">
										<i className="fas fa-search" aria-hidden="true" />
									</span>
								</p>
							</div>
							{from &&
								to.map((airport): JSX.Element => {
									return (
										<a className="panel-block">
											<span className="panel-icon">
												<i className="fas fa-plane-departure" aria-hidden="true" />
											</span>
											{airport.name} - {GoogleMapsFactory.ToDistance(from, airport)} Miles
										</a>
									);
								})}
						</article>
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
