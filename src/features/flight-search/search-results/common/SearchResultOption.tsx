import { Box, Column, Columns, Subtitle, TitleOptions } from '../../../../common/bulma';

const SearchResultOption: React.FC<SearchResultOptionsProps> = ({ isRoundTrip, departure, arrival, duration }) => {
	const pricingTitle = isRoundTrip ? 'Roundtrip' : 'One-Way';

	return (
		<Columns>
			<Column options="is-two-fifths">
				<Box>
					<Columns>
						<Column>Nonstop</Column>
					</Columns>
					<Columns>
						<Column>
							{departure.getHours()}:{departure.getMinutes()}
						</Column>
					</Columns>
				</Box>
			</Column>
			<Column options="is-one-fifth">
				<Box>
					<Subtitle size={TitleOptions.Six}>{pricingTitle}</Subtitle>
				</Box>
			</Column>
			<Column options="is-one-fifth">
				<Box>
					<Subtitle size={TitleOptions.Six}>{pricingTitle}</Subtitle>
				</Box>
			</Column>
			<Column options="is-one-fifth">
				<Box>
					<Subtitle size={TitleOptions.Six}>{pricingTitle}</Subtitle>
				</Box>
			</Column>
		</Columns>
	);
};

interface SearchResultOptionsProps {
	isRoundTrip: boolean;
	departure: Date;
	arrival: Date;
	duration: Date;
}

export default SearchResultOption;
