import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { EventsTable } from "./events/EventsTable";

export const OptionsButtons = (field) => {
  const [radioValue, setRadioValue] = useState(false);
  const radios = [
    { name: "Monitoreo", value: true },
    { name: "los otros", value: false },
  ];

  const eventsType = { radioValue, ...field };

  //   console.log(eventsType);
  return (
    <>
      <br />
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <EventsTable {...eventsType} />
    </>
  );
};
