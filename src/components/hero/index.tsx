import React from "react";

import About from "./About";
import { SlideImage, ImageWrapper, MainWrapper, Wave } from "./index.style";

const HeroSection: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <ImageWrapper>
          <React.Fragment>
            <SlideImage src="assets/hero/0.jpg" animationDelay={0} />
            <SlideImage src="assets/hero/1.jpg" animationDelay={4} />
            <SlideImage src="assets/hero/2.jpg" animationDelay={8} />
            <SlideImage src="assets/hero/3.jpg" animationDelay={12} />
          </React.Fragment>
          <Wave src="assets/wave.svg" />
        </ImageWrapper>
        <About />
      </MainWrapper>
    </>
  );
};

export default HeroSection;
