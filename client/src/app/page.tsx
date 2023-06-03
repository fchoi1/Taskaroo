'use client'

import Image from 'next/image';
import { Card, CardDescription, CardTitle, Center, Description, Grid, Main, StyledHome } from './styledComponents';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Main>
        <Description> Description Here </Description>

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
            <CardTitle>
              Docs
            </CardTitle>
            <CardDescription>
              Find in-depth information about Next.js features and API.
            </CardDescription>
          </Card>

          <Card
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardTitle>
              Learn
            </CardTitle>
            <CardDescription>
              Learn about Next.js in an interactive course with quizzes!
            </CardDescription>
          </Card>

          <Card
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardTitle>
              Templates
            </CardTitle>
            <CardDescription>
              Explore the Next.js 13 playground.
            </CardDescription>
          </Card>

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardTitle>
              Deploy
            </CardTitle>
            <CardDescription>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </CardDescription>
          </Card>
        </Grid>
      </Main>
    </StyledHome>
  );
};

export default Home;
