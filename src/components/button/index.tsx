import styled from "styled-components";

interface Props {}

const Button = styled.a<Props>`
  text-decoration: none;
  border: 1px solid #232555;
  letter-spacing: 0.03rem;
  transition: all 0.3s linear;
  text-align: center;
  color: #232555;
  padding: 0.625rem 1.25rem;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #232555;
    font-size: 0.98em;
  }
`;

export default Button;
