import styled from 'styled-components';

import type { Theme } from '../../theme';

export const NavbarContainer = styled.nav<{ theme: Theme }>`
  background-color: grey;
  height: 100%;
  padding: ${({ theme }) => theme.sizes.navBar.padding};
  display: flex;
  align-items: center;
  border: red 3px dotted;
`;

export const SearchBarContainer = styled.div`
  margin: 5px;
`;

export const RightChildrenWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserContainer = styled.div``;

export const NavbarLink = styled.h1`
  margin-right: 16px;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;
