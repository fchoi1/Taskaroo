"use client";

import Theme from "../theme";
import { ThemeProvider } from "../theme/ThemeProvider";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardTitle,
  Center,
  Description,
  Grid,
  Main,
  StyledHome,
} from "./styledComponents";

import CardComponent from "../components/common/Card";
import Button from "../components/common/Button";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <ThemeProvider theme={Theme}>
        <Main>
          <Button
            onClick={() => {
              console.log("clicked button");
            }}
          >
            Button
          </Button>
          <CardComponent onClick={() => {}}></CardComponent>
          <Description> Description Here </Description>

          <Center>
            <h1 style={{ marginRight: "16px" }}>Taskaroo!</h1>
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
      </ThemeProvider>
    </StyledHome>
  );
};

export default Home;
