import * as React from "react";
import About from "./About";
import { ImageSlides, MainWrapper } from "./index.style";

const HeroSection: React.FC = () => {
  return (
    <MainWrapper>
      <ImageSlides />
      <About />
    </MainWrapper>
  );
};

export default HeroSection;
