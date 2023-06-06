// components/Button/Button.tsx
import React from "react";
import styled from "styled-components";
import StatusColumnProps from "./StatusColumn.interface";

export const StyledButton = styled.div<StatusColumnProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<StatusColumnProps> = ({children }) => {
  return <StyledButton >{children}</StyledButton>;
};

export default Button;
