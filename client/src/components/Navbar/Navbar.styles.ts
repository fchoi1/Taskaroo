import styled from 'styled-components';

import { Theme } from '../../theme';

export const NavbarContainer = styled.nav<{ theme: Theme }>`
  background-color: grey;
  height: ${({ theme }) => theme.sizes.navBar.height};
  padding: ${({ theme }) => theme.sizes.navBar.padding};
  z-index: 999;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border: red 3px dotted;
`;

export const NavbarLink = styled.h1`
  margin-right: 16px;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;
