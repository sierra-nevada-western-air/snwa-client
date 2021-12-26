import { ReactNode } from 'react';

const InputControl: React.FC<InputControlProps> = ({ children }) => {
	return <div className="control">{children}</div>;
};

interface InputControlProps {
	children: ReactNode;
}

export default InputControl;
