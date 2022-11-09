import { Column, Columns, Container, Section, Title, TitleOptions } from "../../../common/bulma";
import IAircraft from "./IAircraft";
import AircraftArticle from "./AircraftArticle";

const AircraftIndex: React.FC = () => {
  const aircraft: Array<IAircraft> = [
    {
      name: "Boeing 737-700",
      capacity: 144,
      speed: 0.781,
      image: {
        src: "7377.jpg",
        alt: "737-700",
      },
      range: 3010,
      title: "The Workhorse",
    },
    {
      name: "Boeing 737-800",
      capacity: 174,
      speed: 0.789,
      image: {
        src: "7378.jpg",
        alt: "737-800",
      },
      range: 2935,
      title: "The Route Winner",
    },
  ];

  return (
    <Container>
      <Columns>
        <Column options="is-1" />
        <Column>
          <Section>
            <Title size={TitleOptions.Two} options="has-text-tertiary">
              Sierra Nevada Western Airways Fleet
            </Title>
            <article>
              We fly the Boeing 737 family of aircraft. Utilizing different sizes of each aircraft
              allows us to serve a variety of markets. Every aircraft is equipped with in-seat
              power, seat-back IFE, and high-speed WiFi. That's our Fare-untee! &trade;
            </article>
            {aircraft.map((airplane): JSX.Element => {
              return <AircraftArticle key={airplane.capacity} aircraft={airplane} />;
            })}
          </Section>
        </Column>
        <Column options="is-1" />
      </Columns>
    </Container>
  );
};

export default AircraftIndex;
