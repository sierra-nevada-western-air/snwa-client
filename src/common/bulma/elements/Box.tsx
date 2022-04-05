import { ReactNode } from 'react';

const Box: React.FC<BoxProps> = ({ children }) => {
	return <div className="box">{children}</div>;
};

interface BoxProps {
	children: ReactNode;
}

export default Box;
