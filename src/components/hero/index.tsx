import About from "./About";
import { ImageSlides, MainWrapper} from "./index.style";

import Image1 from "../../../public/assets/hero/1.jpg";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <React.Fragment>
          <ImageSlides src={Image1} />
        </React.Fragment>
        <About />
      </MainWrapper>
    </>
  );
};

export default HeroSection;
