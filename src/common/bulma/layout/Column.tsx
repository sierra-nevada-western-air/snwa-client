import { ReactNode } from 'react';

const Column: React.FC<ColumnProps> = ({ children, options = '' }) => {
	return <div className={`column ${options}`}>{children}</div>;
};

interface ColumnProps {
	children?: ReactNode;
	options?: string;
}

export default Column;
