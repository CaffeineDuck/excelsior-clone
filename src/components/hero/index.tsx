import React from "react";

import About from "./About";
import { SlideImage, ImageWrapper, MainWrapper } from "./index.style";

const HeroSection: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <ImageWrapper>
          <SlideImage backgroundImage="assets/hero/0.jpg" animationDelay={0}/>
          <SlideImage backgroundImage="assets/hero/1.jpg" animationDelay={6}/>
          <SlideImage backgroundImage="assets/hero/2.jpg" animationDelay={12}/>
          <SlideImage backgroundImage="assets/hero/3.jpg" animationDelay={18}/>
        </ImageWrapper>
        <About />
      </MainWrapper>
    </>
  );
};

export default HeroSection;
