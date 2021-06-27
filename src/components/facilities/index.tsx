import * as React from "react";
import Link from 'next/link'

import Button from "../button";
import ActivityCard from "./ActivityCard";
import {
  ButtonWrapper,
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

        <ButtonWrapper>
          <Link href="/facilities" >
            <Button size="md">Explore More</Button>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </section>
  );
};

export default Facilities;
