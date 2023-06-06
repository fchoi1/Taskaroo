import React from "react";
import Link from "next/link";
import { UrlObject } from "url";
import { Route } from "next";
import styled from "styled-components";

interface NavbarLink {
  href: Route | UrlObject;
  label: string;
}

interface NavbarProps {
  links?: NavbarLink[];
  name: string;
}

const NavbarContainer = styled.nav`
  background-color: grey;
  padding: 16px;
  z-index: 999;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const NavbarLink = styled.h1`
  margin-right: 16px;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ links, name }) => {
  const Navbarlinks = links ?? [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
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
