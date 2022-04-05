import { Link } from 'react-router-dom';
import { Content, Section } from '../../common/bulma';
import SitePaths from '../../router/sitePaths';

const TravelInformationIndex: React.FC = () => {
	return (
		<Section>
			<Content>A bunch of links in here!</Content>
			<Link to={SitePaths.AircraftIndex} className="is-link">
				Aircraft
			</Link>
			<Link to={SitePaths.FaresIndex} className="is-link">
				Fares
			</Link>
		</Section>
	);
};

export default TravelInformationIndex;
