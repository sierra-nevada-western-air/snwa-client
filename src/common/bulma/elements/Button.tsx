const Button: React.FC<ButtonProps> = ({ children, options }) => {
  return <button className={`button ${options}`}>{children}</button>;
};

interface ButtonProps {
  options?: string;
  children: string;
}

export default Button;
