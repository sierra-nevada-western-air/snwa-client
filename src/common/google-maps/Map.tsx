import { useEffect, useRef, useState } from 'react';
import { Container, Hero } from '../bulma';

const Map: React.FC<MapProps> = ({ markers }) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map>();

	useEffect(() => {
		const options: google.maps.MapOptions = {
			center: { lat: 39, lng: -94 },
			zoom: 4,
		};

		if (elementRef.current && !map) {
			setMap(new window.google.maps.Map(elementRef.current, options));
		}

		if (map) {
			markers.forEach((marker) => marker.setMap(map));
		}
	}, [map, markers]);

	return (
		<Container>
			<Hero options="is-large">
				<div ref={elementRef} className="hero-body" />
			</Hero>
		</Container>
	);
};

interface MapProps {
	markers: Array<google.maps.Marker>;
}

export default Map;
