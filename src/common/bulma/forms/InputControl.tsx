import { ReactNode } from "react";

const InputControl: React.FC<InputControlProps> = ({ children, options }) => {
  return <div className={`control ${options}`}>{children}</div>;
};

interface InputControlProps {
  children: ReactNode;
  options?: string;
}

export default InputControl;
