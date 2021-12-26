import { ReactNode } from 'react';

const Columns: React.FC<ColumnsProps> = ({ children }) => {
	return <div className="columns">{children}</div>;
};

interface ColumnsProps {
	children: ReactNode;
}

export default Columns;
