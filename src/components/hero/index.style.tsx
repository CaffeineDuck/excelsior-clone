import styled from "styled-components";

interface FigureProps {
  animationDelay: number;
}

export const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 20fr 10fr;
  height: 100vh;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  object-fit: cover;
  position: relative;
  overflow: hidden;
`;

export const Figure = styled.img<FigureProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  animation: slideShow 16s linear infinite 0s;

  @keyframes slideShow {
    0% {
      opacity: 0;
      transform: scale(1);
    }

    5% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    30% {
      opacity: 0;
      transform: scale(1.1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

export const SlideImage = styled(Figure)`
  animation-delay: ${(props) => props.animationDelay}s;
  z-index: 1;
`;

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 3;
  margin-bottom: -2px;
`;

export const BlackLayer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 30%;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const HeroText = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 3rem;
  z-index: 4;
  max-width: 600px;
  text-align: center;
  font-family: Questrial,sans-serif;
`;
