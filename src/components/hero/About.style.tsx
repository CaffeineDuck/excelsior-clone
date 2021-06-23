import styled from "styled-components";

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  max-width: 960px;
`

export const AboutHeader = styled.h1`
  font-size: 1.6rem;
  font-family: "Work Sans", sans-serif;
  color: #232323;
  font-weight: 600;
  text-transform: uppercase;
`;

export const AboutBody = styled.p`
  padding-top: 1vh;
  font-size: 1rem;
  line-height: 1.5rem;
`;
