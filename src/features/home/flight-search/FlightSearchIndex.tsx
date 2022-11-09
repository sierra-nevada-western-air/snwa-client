import { useState } from "react";
import { Box, Column, Columns, InputControl, InputField, Label } from "../../../common/bulma";
import Button from "../../../common/bulma/elements/Button";

const FlightSearchIndex: React.FC = () => {
  const airports: Array<string> = [
    "Ontario - ONT",
    "Las Vegas - LAS",
    "Reno - RNO",
    "Colorado Springs - COS",
    "Kansas City - MCI",
    "Memphis- MEM",
  ];

  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(true);

  const toggleRoundTrip = (): void => {
    setIsRoundTrip(!isRoundTrip);
  };

  return (
    <Box>
      <form>
        <Columns>
          <Column>
            <InputField>
              <InputControl>
                <label className="radio">
                  <input
                    type="radio"
                    name="roundTripRadio"
                    onClick={toggleRoundTrip}
                    defaultChecked
                  />
                  Round Trip
                </label>
                <label className="radio">
                  <input type="radio" name="roundTripRadio" onClick={toggleRoundTrip} />
                  One Way
                </label>
              </InputControl>
            </InputField>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <InputField>
              <Label labelFor="fromInput">From:</Label>
              <InputControl>
                <input className="input" id="fromInput" list="airportList" />
              </InputControl>
            </InputField>
          </Column>
          <Column>
            <InputField>
              <Label labelFor="toInput">To:</Label>
              <InputControl>
                <input className="input" id="toInput" list="airportList" />
              </InputControl>
            </InputField>
          </Column>
          <datalist id="airportList">
            {airports.map((airport) => (
              <option key={airport} value={airport} />
            ))}
          </datalist>
        </Columns>
        <Columns>
          <Column>
            <InputField>
              <Label labelFor="departureInput">Departure:</Label>
              <InputControl>
                <input
                  type="date"
                  className="input"
                  id="departureInput"
                  min={new Date().toISOString().split("T")[0]}
                />
              </InputControl>
            </InputField>
          </Column>
          <Column>
            <InputField>
              <Label labelFor="returnInput">Return:</Label>
              <InputControl>
                <input type="date" className="input" id="returnInput" disabled={!isRoundTrip} />
              </InputControl>
            </InputField>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <InputField>
              <Label labelFor="numberOfTravelersInput">Travelers:</Label>
              <InputControl>
                <input className="input" type="number" id="numberOfTravelersInput" min={1} />
              </InputControl>
            </InputField>
          </Column>
          <Column>
            <InputField>
              <Label labelFor="" options="is-invisible">
                ''
              </Label>
              <InputControl>
                <Button options="is-primary">Blast off!</Button>
              </InputControl>
            </InputField>
          </Column>
        </Columns>
      </form>
    </Box>
  );
};

export default FlightSearchIndex;
