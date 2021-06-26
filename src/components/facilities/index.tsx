import * as React from "react";
import ActivityCard from "./ActivityCard";
import {
  FacilitiesHeader,
  FacilitiesText,
  TextWrapper,
  Wrapper,
} from "./index.style";

interface Props {}

const Facilities: React.FC<Props> = (props) => {
  return (
    <section id="facilities">
      <Wrapper>
        <TextWrapper>
          <FacilitiesHeader>Our Facilities</FacilitiesHeader>
          <FacilitiesText>
            Quality education through child friendly activity based instruction
            by involving different stakeholders.
          </FacilitiesText>
        </TextWrapper>

        <ActivityCard />
      </Wrapper>
    </section>
  );
};

export default Facilities;
