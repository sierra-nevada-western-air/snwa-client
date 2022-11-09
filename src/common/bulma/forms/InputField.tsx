import { ReactNode } from "react";

const InputField: React.FC<InputFieldProps> = ({ children }) => {
  return <div className="field">{children}</div>;
};

interface InputFieldProps {
  children: ReactNode;
}

export default InputField;
