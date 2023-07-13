import { Route } from 'next';
import Link from 'next/link';
import { FC, createElement } from 'react';
import { Bell, Calendar, HelpCircle, Icon } from 'react-feather';
import { UrlObject } from 'url';

import SearchBar from '../SearchBar';
import Tooltip from '../common/Tooltip';
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightChildrenWrapper,
  SearchBarContainer,
  UserContainer
} from './Navbar.styles';

interface NavbarLinkProps {
  href: Route | UrlObject;
  label: string;
  icon: Icon;
}

interface NavbarProps {
  links?: NavbarLinkProps[];
  name: string;
}

const Navbarlinks = [
  { href: '/', label: 'Home', icon: Calendar },
  { href: '/about', label: 'About', icon: HelpCircle },
  { href: '/about', label: 'Calendar', icon: Calendar },
  { href: '/about', label: 'Notification', icon: Bell }
];

const Navbar: FC<NavbarProps> = ({ name }) => {
  return (
    <NavbarContainer>
      <SearchBarContainer>
        <SearchBar onChange={() => console.log('changed typing')} placeholder="Search" />
      </SearchBarContainer>
      <RightChildrenWrapper>
        <NavbarLinkContainer>
          {Navbarlinks.map(({ href, label, icon }, index) => (
            <Link key={index} href={href} passHref>
              <Tooltip text={label}>
                <NavbarLink>{createElement(icon)}</NavbarLink>
              </Tooltip>
            </Link>
          ))}
        </NavbarLinkContainer>

        <UserContainer>
          <h1>Hello {name}</h1>
        </UserContainer>
      </RightChildrenWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
