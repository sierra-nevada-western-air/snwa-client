import AirportResponse from "./AirportResponse";

export default function GetAirports(): Array<AirportResponse> {
  return [
    {
      id: "1",
      name: "Kansas City - MCI",
      position: {
        latitude: 39.3023103,
        longitude: -94.7211899,
      },
    },
    {
      id: "2",
      name: "Pittsburgh - PIT",
      position: {
        latitude: 40.4917827,
        longitude: -80.2370245,
      },
    },
    {
      id: "3",
      name: "Memphis - MEM",
      position: {
        latitude: 35.0462565,
        longitude: -89.9768947,
      },
    },
    {
      id: "4",
      name: "Las Vegas - LAS",
      position: {
        latitude: 36.0861034,
        longitude: -115.1611199,
      },
    },
    {
      id: "5",
      name: "Phoenix - PHX",
      position: {
        latitude: 33.4328907,
        longitude: -112.0094223,
      },
    },
    {
      id: "6",
      name: "Orlando - MCO",
      position: {
        latitude: 28.4129036,
        longitude: -81.3094431,
      },
    },
    {
      id: "7",
      name: "Miami - MIA",
      position: {
        latitude: 25.7949789,
        longitude: -80.2867234,
      },
    },
  ];
}
