import { TitleOptions } from '..';

const Subtitle: React.FC<SubtitleProps> = ({ size, options, children }) => {
	const determineTitle = (): JSX.Element => {
		switch (size) {
			case TitleOptions.One:
				return <h1 className={`subtitle is-1 ${options}`}>{children}</h1>;
			case TitleOptions.Two:
				return <h2 className={`subtitle is-2 ${options}`}>{children}</h2>;
			case TitleOptions.Three:
				return <h3 className={`subtitle is-3 ${options}`}>{children}</h3>;
			case TitleOptions.Four:
				return <h4 className={`subtitle is-4 ${options}`}>{children}</h4>;
			case TitleOptions.Five:
				return <h5 className={`subtitle is-5 ${options}`}>{children}</h5>;
			case TitleOptions.Six:
				return <h6 className={`subtitle is-6 ${options}`}>{children}</h6>;
		}
	};

	return determineTitle();
};

interface SubtitleProps {
	size: TitleOptions;
	options?: string;
	children: string;
}

export default Subtitle;
