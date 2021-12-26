import React from 'react';
import GoogleMapsFactory from '../../common/google-maps/GoogleMapsFactory';
import AirportResponse from '../airports/models/AirportResponse';

const RouteMapSearchPanel: React.FC<RouteMapSearchPanelProps> = ({ from, to }) => {
	return (
		<React.Fragment>
			{from &&
				to.map((airport) => {
					return (
						<a className="panel-block">
							<span className="panel-icon">
								<i className="fas fa-plane-departure" aria-hidden="true" />
							</span>
							{airport.name} - {GoogleMapsFactory.ToDistance(from, airport)} Miles
						</a>
					);
				})}
		</React.Fragment>
	);
};

interface RouteMapSearchPanelProps {
	from: AirportResponse | undefined;
	to: Array<AirportResponse>;
}

export default RouteMapSearchPanel;
