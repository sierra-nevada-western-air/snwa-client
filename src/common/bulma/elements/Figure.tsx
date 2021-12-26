const Figure: React.FC<FigureProps> = ({ src, alt, options = '' }) => {
	return (
		<figure className={`image ${options}`}>
			<img src={src} alt={alt} />
		</figure>
	);
};

interface FigureProps {
	src: string;
	alt: string;
	options?: string;
}

export default Figure;
