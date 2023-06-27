import styled from 'styled-components';

import { Theme } from '../../../theme';

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))<{
  theme: Theme;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  color?: string;
  type?: string;
}>`
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
      return `&:hover {
        background-color: ${theme.hoverColor(colorType, -10)};
          }`;
    }
  }}

  ${({ theme, active, color }) => {
    if (active) {
      const colorType = color ? theme.colors[color]?.color : theme.colors.primary.color;
      return `&:active {
        background-color: ${theme.hoverColor(colorType, -15)};
      }`;
    }
  }}

  ${({ theme, focus, color }) => {
    if (focus) {
      const colorType = color ? theme.colors[color]?.color : theme.colors.primary.color;
      return `&:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${theme.hoverColor(colorType, -15)};
      }`;
    }
  }}
`;
