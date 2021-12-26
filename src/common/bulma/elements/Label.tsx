const label: React.FC<labelProps> = ({ children, labelFor }) => {
	return (
		<label className="label" htmlFor={labelFor}>
			{children}
		</label>
	);
};

interface labelProps {
	children: string;
	labelFor: string;
}

export default label;
