const Icon: React.FC<IconProps> = ({ options, iconName }) => {
	return (
		<span className={`icon ${options}`}>
			<i className={`fas ${iconName}`} />
		</span>
	);
};

interface IconProps {
	options?: string;
	iconName: string;
}

export default Icon;
