import { ReactNode } from "react";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

interface ContainerProps {
  children: ReactNode;
}

export default Container;
