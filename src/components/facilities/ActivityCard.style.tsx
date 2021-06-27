import styled from "styled-components";

// TODO: Add animations on hover to the cards

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 50vh;
  width: 100%;
  overflow: hidden;
`;

export const Card = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.8s ease;
`;

export const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    cursor: pointer;
    background: 0 0;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8;
    transition: background 0.8s ease;
  }
  &:hover:before {
    background: rgba(0, 0, 0, 0.6);
  }

  &:hover ${Card} {
    content: "";
    transform: scale(1.05);
  }
`;

export const CardText = styled.h2`
  bottom: 1vh;
  left: 1vw;
  z-index: 9;
  position: absolute;
  text-transform: uppercase;
  color: white;
`;
