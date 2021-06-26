import styled from "styled-components";

// TODO: Add animations on hover to the cards

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 99vw;
  min-height: 50vh;
`;

export const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Card = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  object-fit: cover;
`;

export const CardText = styled.h2`
  bottom: 1vh;
  left: 1vw;
  z-index: 9;
  position: absolute;
  text-transform: uppercase;
  color: white;
`;
