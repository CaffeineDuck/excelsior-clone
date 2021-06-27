import * as React from "react";
import { ActivityProps } from "src/utils/types";
import { Card, CardText, CardWrapper, Wrapper } from "./ActivityCard.style";

interface Props {
  activities: ActivityProps[];
}

const ActivityCard: React.FC<Props> = ({ activities }) => {
  return (
    <Wrapper>
      {activities.map(({ name, imageSrc: ImageSrc }, index) => (
        <CardWrapper key={index}>
          <Card src={ImageSrc} />
          <CardText>{name}</CardText>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default ActivityCard;
