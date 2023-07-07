'use client';

import { ReactNode } from 'react';

import { TaskProvider } from '../../context/taskContext';

interface TaskboardLayoutProps {
  children: ReactNode;
}

export default function TaskboardLayout({ children }: TaskboardLayoutProps) {
  return <TaskProvider currentUser="currentUser">{children}</TaskProvider>;
}
