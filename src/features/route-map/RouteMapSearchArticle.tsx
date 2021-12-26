import { ReactNode, useEffect, useState } from 'react';
import { Icon } from '../../common/bulma';
import GoogleMapsFactory from '../../common/google-maps/GoogleMapsFactory';
import AirportResponse from '../airports/models/AirportResponse';
import RouteMapSearchPanel from './RouteMapSearchPanel';

const RouteMapSearchArticle: React.FC<RouteMapSearchArticleProps> = ({ airports, setPolylines }) => {
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
					<Icon options="is-left" iconName="fa-search" ariaHidden={true} />
				</p>
			</div>
			{from &&
				to.map((toAirport): ReactNode => {
					return <RouteMapSearchPanel departure={from} arrival={toAirport} />;
				})}
		</article>
	);
};

interface RouteMapSearchArticleProps {
	airports: Array<AirportResponse>;
	setPolylines: (polyline: Array<google.maps.Polyline>) => void;
}

export default RouteMapSearchArticle;
