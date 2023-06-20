import styled from 'styled-components';

import { Theme } from '../../theme';

export const MyProjectHeaderContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? 'space-between' : 'center')};
  align-items: center;
  padding: 5px;
`;

export const MyProjectHeader = styled.h3``;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ProjectListItem = styled.li<{ theme: Theme; isOpen: boolean; color: string }>`
  color: ${({ theme, color }) => theme.colors[color].color};
  margin: 5px;
  padding: ${({ isOpen }) => (isOpen ? ' 0.5em 1.2em' : '0.5em 0')};
  width: auto;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'space-araound' : 'center')};
  gap: ${({ isOpen }) => (isOpen ? '1em' : '0.1em')};

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color].textColor};
    cursor: pointer;
  }
`;
