import { ReactNode } from 'react';

const Level: React.FC<LevelProps> = ({ children }) => {
	return <div className="level">{children}</div>;
};

interface LevelProps {
	children: ReactNode;
}

export default Level;
