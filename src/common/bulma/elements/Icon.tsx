const Icon: React.FC<IconProps> = ({ options, iconName, ariaHidden = false }) => {
	return (
		<span className={`icon ${options}`}>
			<i className={`fas ${iconName}`} aria-hidden={ariaHidden} />
		</span>
	);
};

interface IconProps {
	options?: string;
	iconName: string;
	ariaHidden?: boolean;
}

export default Icon;
