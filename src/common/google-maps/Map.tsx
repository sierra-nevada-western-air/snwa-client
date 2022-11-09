import { useEffect, useRef, useState } from "react";
import { Container } from "../bulma";
import usePolylines from "./usePolylines";

const Map: React.FC<MapProps> = ({ markers, polylines }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const [, setLines] = usePolylines(map, polylines);

  useEffect(() => {
    const options: google.maps.MapOptions = {
      center: { lat: 39, lng: -94 },
      zoom: 4,
    };

    if (elementRef.current && !map) {
      setMap(new window.google.maps.Map(elementRef.current, options));
    }

    if (map && markers) {
      markers.forEach((marker) => marker.setMap(map));
    }
  }, [map, markers, polylines]);

  useEffect(() => {
    if (map && polylines) {
      setLines(polylines);
    }
  }, [polylines, setLines, map]);

  return (
    <Container>
      {/* Hero css needed to make maps works */}
      <div className="hero is-large">
        <div ref={elementRef} className="hero-body" />
      </div>
    </Container>
  );
};

interface MapProps {
  markers?: Array<google.maps.Marker>;
  polylines?: Array<google.maps.Polyline>;
}

export default Map;
