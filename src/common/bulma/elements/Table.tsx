import { ReactNode } from "react";

const Table: React.FC<TableProps> = ({ children, options = "" }) => {
  return <table className={`table ${options}`}>{children}</table>;
};

interface TableProps {
  children: ReactNode;
  options?: string;
}

export default Table;
