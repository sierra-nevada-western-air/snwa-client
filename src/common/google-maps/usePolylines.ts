import { useEffect, useState } from 'react';

export default function usePolylines(
	map: google.maps.Map | undefined,
	polylines: Array<google.maps.Polyline> | undefined
): [Array<google.maps.Polyline>, (setLines: Array<google.maps.Polyline>) => void] {
	const [currentLines, setCurrentLines] = useState<Array<google.maps.Polyline>>([]);

	useEffect(() => {
		if (map && polylines) {
			currentLines.forEach((polyline) => polyline.setMap(null));
			polylines.forEach((polyline) => polyline.setMap(map));
			setCurrentLines(polylines);
		}
	}, [map, polylines, currentLines]);

	return [currentLines, setCurrentLines];
}
