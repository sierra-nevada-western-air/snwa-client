import React from "react";
import { Column, Columns, Section } from "../../common/bulma";
import Container from "../../common/bulma/layout/Container";
import SearchResultOption from "../flight-search/search-results/common/SearchResultOption";
import FlightSearchIndex from "./flight-search/FlightSearchIndex";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <Columns>
            <Column options="is-one-fifth" />
            <Column>
              <FlightSearchIndex />
            </Column>
            <Column options="is-one-fifth" />
          </Columns>
        </Container>
      </Section>
      <Section>
        <Container>
          <SearchResultOption
            isRoundTrip={true}
            departure={new Date(1, 1, 2000, 6, 37)}
            arrival={new Date(1, 1, 2000, 8, 4)}
            duration={new Date(1, 1, 2000, 1, 28)}
          />
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default Home;
