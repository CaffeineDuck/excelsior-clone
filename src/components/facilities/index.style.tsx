import styled from "styled-components";

export const Wrapper = styled.div`
  height: 94vh;
  width: 100%;
  background-color: #f4f7f6;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FacilitiesHeader = styled.h1`
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
`;

export const FacilitiesText = styled.p`
  margin-left: auto;
  margin-right: auto;
`;
