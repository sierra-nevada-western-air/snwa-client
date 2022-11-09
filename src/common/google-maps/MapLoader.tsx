import { Status } from "@googlemaps/react-wrapper";
import { ReactElement } from "react";

export default function MapLoader(status: Status): ReactElement {
  return <h1 className="title is-1">{status}</h1>;
}
