import * as React from "react";
import { EventProps } from "src/utils/types";
import EventCard from "./EventCard";

import { Wrapper } from "./index.style";

interface Props {
  events: EventProps[];
}

const Events: React.FC<Props> = ({ events }) => {
  return (
    <section id="events">
      <Wrapper>
        <EventCard events={events} />
      </Wrapper>
    </section>
  );
};

export default Events;
