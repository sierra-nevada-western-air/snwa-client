import React from "react";
import {
  Column,
  Columns,
  Container,
  Content,
  Section,
  Table,
  Title,
  TitleOptions,
} from "../../../common/bulma";

const FaresIndex: React.FC = () => {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <Content>
            <article>
              <Title size={TitleOptions.Two}>Our Fares</Title>
              <p>
                Here at Sierra Nevada, we think you deserve a Fare-Untee &trade;. That's why we
                don't have basic-economy or charge you for E.V.E.R.Y.T.H.I.N.G.
              </p>
              <p>
                All of our fares include a personal item, one checked-bag (Bring those full size
                toiletries), and a seat assignment when you check-in. We will nevaaa-da charge you
                to change or cancel your flight.
              </p>
            </article>
          </Content>
        </Container>
      </Section>
      <Section>
        <Container>
          <Columns>
            <Column options="is-one-fifth" />
            <Column>
              <Table options="is-fullwidth has-text-centered">
                <thead>
                  <tr>
                    <th>Fare Options:</th>
                    <th>Foothill</th>
                    <th>Boreal</th>
                    <th>Alpine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Baggage:</td>
                    <td>1 Checked</td>
                    <td>2 Checked</td>
                    <td>2 Checked + 1 Carry-On</td>
                  </tr>
                  <tr>
                    <td>Seats:</td>
                    <td>At Check-In</td>
                    <td>During Booking</td>
                    <td>During Booking</td>
                  </tr>
                  <tr>
                    <td>Boarding:</td>
                    <td>Zone 3</td>
                    <td>Zone 2</td>
                    <td>Zone 1</td>
                  </tr>
                  <tr>
                    <td>Same Day Changes:</td>
                    <td>No</td>
                    <td>Yes (confirmed &amp; standby)</td>
                    <td>Yes (confirmed &amp; standby)</td>
                  </tr>
                  <tr>
                    <td>Refundable:</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Airport Services:</td>
                    <td>No</td>
                    <td>Speedy Security</td>
                    <td>Full</td>
                  </tr>
                </tbody>
              </Table>
            </Column>
            <Column options="is-one-fifth" />
          </Columns>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default FaresIndex;
