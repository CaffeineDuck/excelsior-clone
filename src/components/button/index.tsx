import styled from "styled-components";

interface Props {
  size: "sm" | "md" | "lg";
}

const ButtonSizes = {
  sm: ["0.4rem", "0.6rem"],
  md: ["0.625rem", "1.25rem"],
  lg: ["1rem", "2.25rem"],
}

const Button = styled.a<Props>`
  text-decoration: none;
  border: 1px solid #232555;
  letter-spacing: 0.03rem;
  transition: all 0.3s linear;
  text-align: center;
  color: #232555;
  cursor: pointer;

  padding-left: ${props => (ButtonSizes[props.size][1])};  
  padding-right: ${props => (ButtonSizes[props.size][1])};  
  padding-bottom: ${props => (ButtonSizes[props.size][0])};  
  padding-top: ${props => (ButtonSizes[props.size][0])};  

  &:hover,
  &:focus {
    color: #fff;
    background-color: #232555;
    font-size: 1.05em;
    
  }
`;

export default Button;
