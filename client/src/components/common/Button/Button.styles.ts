import styled from 'styled-components';

import { Theme } from '../../../theme';

export const StyledButton = styled.button<{
  theme: Theme;
  color?: string;
  backgroundColor?: string;
}>`
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color]?.color : theme.colors.primary.color};
  color: ${({ theme, color }) =>
    color ? theme.colors[color].textColor : theme.colors.primary.textColor};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
