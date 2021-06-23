import styled from "styled-components";

export const Wrapper = styled.div<{ transparent: boolean }>`
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  ${(props) =>
    !props.transparent &&
    `
      background-color: #232555;
      padding-top: 0;
    `}
`;

export const LogoText = styled.h1`
  font-size: 1.2rem;
  padding-left: 0.5vw;
  color: #fff;
  font-weight: 500;
  font-family: "Questrial", sans-serif;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.3vh;
  margin-bottom: 0.3vh;
`;
