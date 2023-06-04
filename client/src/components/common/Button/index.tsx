// components/Button/Button.tsx
import React from "react";
// components/Button/Button.styles.ts
import styled from "styled-components";
import { useTheme } from "../../../theme/ThemeProvider";
import BaseInterface from "../../BaseInterface";

interface ButtonProps extends BaseInterface {
  onClick: () => void;
  children: React.ReactNode;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme?.colors.primary};
  color: ${(props) => props.theme?.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
