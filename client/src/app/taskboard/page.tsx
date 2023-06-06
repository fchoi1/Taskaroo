"use client";

import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

import Menu from "../../components/Menu";
import CardComponent from "../../components/common/Card";
import Button from "../../components/common/Button";
import StatusColumn from "../../components/common/StatusColumn";
import Modal from "../../components/common/Modal";

interface TaskBoardProps {
  // Define the props interface here if needed
}

const TaskBoard: NextPage<TaskBoardProps> = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default TaskBoard;
