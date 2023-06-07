'use client';

import { NextPage } from 'next';

import Link from 'next/link';

interface AboutPage {
  // Define the props interface here if needed
}

const About: NextPage<AboutPage> = () => {
  return (
    <div>
      <Link href="/">main</Link>
      <div> This is the about with stuff</div>;
    </div>
  );
};

export default About;
