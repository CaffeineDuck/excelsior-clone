import * as React from "react";
import { AboutBody, AboutHeader, InnerWrapper, Wrapper } from "./About.style";

const About: React.FC = () => {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <AboutHeader>About Us</AboutHeader>
          <AboutBody>
            The Excelsior School is an award-winning school located in the heart
            of the city with a pristine and child friendly environment. We
            strive for quality education at affordable cost by using recent
            pedagogies so as to attain academic excellence. Our prime focus is
            on developing knowledgeable, inquiring and caring young people who
            can help to create a better and more peaceful world. Thus, we strive
            equipping our young mind with technical, social and academic skills
            to stand in the global community making significant contributions in
            creating habitable society. Our academic and extracurricular
            activities help to enhance students’ attitude and skills to be
            lifelong learners. In our happy and child friendly place of
            excellence, everyone can recognize and achieve their full potential
            in all areas of their development.
          </AboutBody>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
