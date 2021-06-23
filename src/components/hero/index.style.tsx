import styled from "styled-components";
import Image from "next/image";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 20fr 10fr;
  height: 100vh;
  width: 100%;

`;

export const ImageSlides = styled(Image)`
  z-index: 1;
  object-fit: cover;
`;
