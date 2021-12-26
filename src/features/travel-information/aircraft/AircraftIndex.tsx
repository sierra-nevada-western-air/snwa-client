import { Column, Columns, Container, Section, Title, TitleOptions } from '../../../common/bulma';
import Aircraft from './Aircraft';
import AircraftArticle from './AircraftArticle';

const AircraftIndex: React.FC = () => {
	const aircraft: Array<Aircraft> = [
		{
			name: 'Boeing 737-600',
			capacity: 120,
			speed: 0.785,
			image: {
				src: '7376.jpg',
				alt: '737-600',
			},
			range: 3235,
			title: 'The Regional Warrior',
		},
	];

	return (
		<Container>
			<Columns>
				<Column options="is-1" />
				<Column>
					<Section>
						<Title size={TitleOptions.Two} options="has-text-tertiary">
							Sierra Nevada Western Airways Fleet
						</Title>
						<article>
							We fly the Boeing 737 family of aircraft. Utilizing different sizes of each aircraft allows us to serve a variety of
							markets.
						</article>
						{aircraft.map((airplane) => {
							return <AircraftArticle key={airplane.capacity} aircraft={airplane} />;
						})}
					</Section>
				</Column>
				<Column options="is-1" />
			</Columns>
		</Container>
	);
};

export default AircraftIndex;
