import { Column, Columns, Content, Title, TitleOptions } from '../../../common/bulma';
import Figure from '../../../common/bulma/elements/Figure';
import Aircraft from './Aircraft';

const AircraftArticle: React.FC<AircraftArticleProps> = ({ aircraft }) => {
	return (
		<article>
			<Columns>
				<Column options="is-one-quarter is-flex">
					<Content options="is-flex is-justify-content-center is-flex-direction-column">
						<Title size={TitleOptions.Five}>{aircraft.name}</Title>
						<p>
							<strong>Capacity: </strong>
							{aircraft.capacity} persons
						</p>
						<p>
							<strong>Speed: </strong>
							Mach {aircraft.speed}
						</p>
						<p>
							<strong>Range: </strong>
							{aircraft.range} nmi
						</p>
					</Content>
				</Column>
				<Column>
					<Figure src={require(`../../../assets/images/${aircraft.image.src}`)} alt={aircraft.name} />
				</Column>
			</Columns>
			<hr />
		</article>
	);
};

interface AircraftArticleProps {
	aircraft: Aircraft;
}

export default AircraftArticle;
