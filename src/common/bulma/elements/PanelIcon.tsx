const PanelIcon: React.FC<PanelIconProps> = ({ options, iconName }) => {
	return (
		<span className={`panel-icon ${options}`}>
			<i className={`fas ${iconName}`} aria-hidden="true" />
		</span>
	);
};

interface PanelIconProps {
	options?: string;
	iconName: string;
}

export default PanelIcon;
