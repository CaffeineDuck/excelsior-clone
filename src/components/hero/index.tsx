import React from "react";

import About from "./About";
import {
  SlideImage,
  ImageWrapper,
  MainWrapper,
  Wave,
  BlackLayer,
  HeroText,
  TextWrapper,
} from "./index.style";

const HeroSection: React.FC = () => {
  return (
    <section id="hero-section">
      <MainWrapper>
        <ImageWrapper>
          <BlackLayer />
          <TextWrapper>
            <HeroText>We strive for excellence in all that we do</HeroText>
          </TextWrapper>
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
    </section>
  );
};

export default HeroSection;
