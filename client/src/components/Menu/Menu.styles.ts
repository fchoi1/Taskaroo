import styled from 'styled-components';

import { Theme } from '../../theme';

export const MenuContainer = styled.div<{ theme: Theme; isOpen: boolean }>`
  display: grid;
  grid-template-columns: ${({ isOpen }) => (isOpen ? '200px' : '80px')} 1fr;
  grid-template-rows: ${({ theme }) => theme.sizes.navBar.height} 1fr;
  gap: 1em;
  height: 100vh;

  background-color: darkgrey;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto auto;
  }
`;

export const SidebarGrid = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 100%;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
    width: 100%;
  }
`;

export const NavBarGrid = styled.div`
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const MainContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
  }
`;
