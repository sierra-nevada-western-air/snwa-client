import React from "react";
import { Link } from "react-router-dom";
import { PanelIcon } from "../../common/bulma";
import GoogleMapsFactory from "../../common/google-maps/GoogleMapsFactory";
import SitePaths from "../../router/sitePaths";
import AirportResponse from "../airports/models/AirportResponse";

const RouteMapSearchPanel: React.FC<RouteMapSearchPanelProps> = ({ departure, arrival }) => {
  return (
    <Link className="panel-block" to={SitePaths.Home}>
      <PanelIcon iconName="fa-plane-departure" />
      {arrival.name} - {GoogleMapsFactory.ToDistance(departure, arrival)} Miles
    </Link>
  );
};

interface RouteMapSearchPanelProps {
  departure: AirportResponse;
  arrival: AirportResponse;
}

export default RouteMapSearchPanel;
