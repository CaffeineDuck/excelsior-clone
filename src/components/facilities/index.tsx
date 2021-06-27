import * as React from "react";
import Link from "next/link";

import Button from "../button";
import ActivityCard from "./ActivityCard";
import {
  ButtonWrapper,
  FacilitiesHeader,
  FacilitiesText,
  TextWrapper,
  Wrapper,
} from "./index.style";
import { ActivityProps } from "src/utils/types";

interface Props {
  activities: ActivityProps[];
}

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

        <ActivityCard activities={props.activities} />

        <ButtonWrapper>
          <Link href="/facilities">
            <Button size="md">Explore More</Button>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </section>
  );
};

export default Facilities;
