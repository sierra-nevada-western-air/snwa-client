import { ReactNode } from 'react';

const Table: React.FC<TableProps> = ({ children }) => {
	return <table className="table">{children}</table>;
};

interface TableProps {
	children: ReactNode;
}

export default Table;
