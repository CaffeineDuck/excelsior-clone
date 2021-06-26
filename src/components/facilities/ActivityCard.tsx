import * as React from "react";
import { Card, CardText, CardWrapper, Wrapper } from "./ActivityCard.style";

const ActivityCard: React.FC = () => {
  const activities = [
    { name: "training", src: "assets/facilities/training.jpg" },
    { name: "swimming", src: "assets/facilities/swimming.jpg" },
    { name: "football", src: "assets/facilities/football.jpg" },
    {
      name: "basketball",
      src: "assets/facilities/basketball.jpg",
    },
  ];

  return (
    <Wrapper>
      {activities.map(({ name, src }, index) => (
        <CardWrapper>
          <Card key={index} src={src}/>
          <CardText key={index}>{name}</CardText>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default ActivityCard;
