'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '../components/common/Button';
import {
  Card,
  CardDescription,
  CardTitle,
  Center,
  Description,
  Grid,
  Main,
  StyledHome
} from './styledComponents';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Main>
        <Button
          onClick={() => {
            console.log('clicked button');
          }}
        >
          Button
        </Button>
        <Description> Description Here </Description>
        <Link href="/about">about</Link>

        <Link href="/taskboard">taskboard</Link>

        <Center>
          <h1 style={{ marginRight: '16px' }}>Taskaroo!</h1>
          <br />
          <Image
            className="logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Center>

        <Grid>
          <Card
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardTitle>Docs</CardTitle>
            <CardDescription>
              Find in-depth information about Next.js features and API.
            </CardDescription>
          </Card>
        </Grid>
      </Main>
    </StyledHome>
  );
};

export default Home;
