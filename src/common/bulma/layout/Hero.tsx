import { ReactNode } from 'react';

const Hero: React.FC<HeroProps> = ({ children, options }) => {
	return <section className={`hero ${options}`}>{children}</section>;
};

interface HeroProps {
	children: ReactNode;
	options: string;
}

export default Hero;
