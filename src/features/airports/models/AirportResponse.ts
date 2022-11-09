import AirportPosition from "./AirportPosition";

export default interface AirportResponse {
  id: string;
  name: string;
  position: AirportPosition;
}
