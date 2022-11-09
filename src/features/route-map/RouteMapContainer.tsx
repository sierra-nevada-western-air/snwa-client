import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";
import MapLoader from "../../common/google-maps/MapLoader";
import GoogleMaps from "../../utilities/constants/googleMaps";
import HttpClient from "../../utilities/data/httpClient";
import AirportResponse from "../airports/models/AirportResponse";
import RouteMapIndex from "./RouteMapIndex";

const RouteMapContainer: React.FC = () => {
  const [airports, setAirports] = useState<Array<AirportResponse>>([]);

  useEffect(() => {
    //fetchData('', setAirports);

    const fetch = async (): Promise<void> => {
      const result = await HttpClient.GetAirports();

      setAirports(result);
    };

    fetch();
  }, []);

  return (
    <Wrapper apiKey={GoogleMaps.ApiKey} render={MapLoader}>
      <RouteMapIndex airports={airports} />
    </Wrapper>
  );
};

export default RouteMapContainer;
