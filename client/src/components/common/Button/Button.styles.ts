import styled from 'styled-components';

import { Theme } from '../../../theme';

export const StyledButton = styled.button<{ theme: Theme; hover: boolean; color?: string }>`
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color]?.color : theme.colors.primary.color};

  color: ${({ theme, color }) =>
    color ? theme.colors[color]?.textColor : theme.colors.primary.textColor};

  background-color: white;
  color: darkgrey;

  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  ${({ theme, hover, color }) => {
    if (hover) {
      const colorType = color ? theme.colors[color]?.color : theme.colors.primary.color;
      console.log(hover, 'hoverColor', 'color', color, 'colorType', colorType);

      console.log('new hover color', theme.hoverColor(colorType, 10));
      return `&:hover {
        background-color: ${theme.hoverColor(colorType, -10)};
          }`;
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.accent.color};
  }
`;
