import { Route } from 'next';
import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

import { NavbarContainer, NavbarLink } from './Navbar.styles';

interface NavbarLinkProps {
  href: Route | UrlObject;
  label: string;
}

interface NavbarProps {
  links?: NavbarLinkProps[];
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, name }) => {
  const Navbarlinks = links ?? [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ];
  return (
    <NavbarContainer>
      <h1>Hello {name}</h1>

      {Navbarlinks.map((link, index) => (
        <Link key={index} href={link.href} passHref>
          <NavbarLink>{link.label}</NavbarLink>
        </Link>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
