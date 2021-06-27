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
import { HeroSlideProps } from "src/utils/types";

interface Props {
  slideShowData: HeroSlideProps[];
  slideShowAnimationTime: number;
}

const HeroSection: React.FC<Props> = ({
  slideShowData,
  slideShowAnimationTime,
}) => {
  return (
    <section id="hero-section">
      <MainWrapper>
        <ImageWrapper>
          <BlackLayer />
          <TextWrapper>
            <HeroText>We strive for excellence in all that we do</HeroText>
          </TextWrapper>
          <React.Fragment>
            {slideShowData.map(({ imageSrc, animationDelay }, index) => (
              <React.Fragment key={index}>
                <SlideImage
                  src={imageSrc}
                  animationDelay={animationDelay}
                  totalAnimationTime={slideShowAnimationTime}
                />
              </React.Fragment>
            ))}
            <Wave src="assets/wave.svg" />
          </React.Fragment>
        </ImageWrapper>
        <About />
      </MainWrapper>
    </section>
  );
};

export default HeroSection;
