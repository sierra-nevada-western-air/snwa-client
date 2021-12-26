import { TitleOptions } from './TitleOptions';

const Title: React.FC<TitleProps> = ({ size, children, options = '' }) => {
	const determineTitle = (): JSX.Element => {
		switch (size) {
			case TitleOptions.One:
				return <h1 className={`title is-1 ${options}`}>{children}</h1>;
			case TitleOptions.Two:
				return <h2 className={`title is-2 ${options}`}>{children}</h2>;
			case TitleOptions.Three:
				return <h3 className={`title is-3 ${options}`}>{children}</h3>;
			case TitleOptions.Four:
				return <h4 className={`title is-4 ${options}`}>{children}</h4>;
			case TitleOptions.Five:
				return <h5 className={`title is-5 ${options}`}>{children}</h5>;
			case TitleOptions.Six:
				return <h6 className={`title is-6 ${options}`}>{children}</h6>;
		}
	};

	return determineTitle();
};

interface TitleProps {
	size: TitleOptions;
	options?: string;
	children: string;
}

export default Title;
