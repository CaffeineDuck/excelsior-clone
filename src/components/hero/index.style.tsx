import styled from "styled-components";

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

export const Figure = styled.figure<{
  backgroundImage: string;
  animationDelay: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: slideShow 24s linear infinite 0s;

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
  background: url(${(props) => props.backgroundImage});
  background-size: cover;
  position: absolute;
`;
