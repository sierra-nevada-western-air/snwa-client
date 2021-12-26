import { ReactNode } from 'react';

const Content: React.FC<ContentProps> = ({ children, options }) => {
	return <div className={`content ${options}`}>{children}</div>;
};

interface ContentProps {
	children: ReactNode;
	options?: string;
}

export default Content;
