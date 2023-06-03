// components/Button/Button.styles.ts
import styled from 'styled-components';
import Theme from '../../../theme/theme';

interface ButtonProps {
    theme: Theme;
  }

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
