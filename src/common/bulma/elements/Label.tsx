const label: React.FC<labelProps> = ({ children, labelFor, options }) => {
	return (
		<label className={`label ${options}`} htmlFor={labelFor}>
			{children}
		</label>
	);
};

interface labelProps {
	children: string;
	labelFor: string;
	options?: string;
}

export default label;
