'use client';

import React from 'react';

import { TaskProvider } from '../../context/taskContext';

interface TaskboardLayoutProps {
  children: React.ReactNode;
}

export default function TaskboardLayout({ children }: TaskboardLayoutProps) {
  return <TaskProvider currentUser="currentUser">{children}</TaskProvider>;
}
