"use client";

import { NextPage } from "next";

import Sidebar from "../../components/Sidebar";
import CardComponent from "../../components/common/Card";
import Button from "../../components/common/Button";
import StatusColumn from "../../components/common/StatusColumn";
import Modal from "../../components/common/Modal";
import Link from "next/link";

interface AboutPage {
  // Define the props interface here if needed
}

const About: NextPage<AboutPage> = () => {
  return (
    <div>
      <Sidebar name="Name" />
      <CardComponent onClick={() => {}}></CardComponent>
      <StatusColumn />
      {/* <Modal title="Modal title"></Modal> */}
      <Button
        onClick={() => {
          console.log("clicked button here");
        }}
      >
        Button
      </Button>
      <Link href="/">main</Link>
      <div> This is the about with stuff</div>;
    </div>
  );
};

export default About;
