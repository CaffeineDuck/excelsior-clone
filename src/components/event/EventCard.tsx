import Link from "next/link";
import * as React from "react";
import { EventProps } from "src/utils/types";
import Button from "../button";
import {
  EventDate,
  EventDescription,
  EventHeader,
  EventImage,
  EventWrapper,
  Wrapper,
} from "./EventCard.style";


interface Props {
  events: EventProps[];
}

const EventCard: React.FC<Props> = ({ events }) => {
  return (
    <Wrapper>
      {events.map(({ title, date, subtitle, imageSrc, postLink }, index) => (
        <EventWrapper key={index}>
          <EventImage src={imageSrc} />
          <EventHeader>{title}</EventHeader>
          <EventDescription>{subtitle}</EventDescription>
          <EventDate>{date}</EventDate>
          <Link href={postLink}>
            <Button size="sm" />
          </Link>
        </EventWrapper>
      ))}
    </Wrapper>
  );
};

export default EventCard;
