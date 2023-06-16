'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

interface AboutPage {
  children: React.ReactNode;
  // Define the props interface here if needed
}

const SomeButton = styled.div`
  display: block;
  margin: 5px;
  color: ${({ theme }) => {
    console.log(theme);
    return theme.colors.primary.color;
  }};
`;

const About: NextPage<AboutPage> = ({ children }) => {
  console.log('About', children);
  return (
    <div>
      <Link href="/">main</Link>
      <SomeButton>Button</SomeButton>
      <div> This is the about with stuff</div>;
    </div>
  );
};

export default About;
