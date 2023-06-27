'use client';

import { Inter } from 'next/font/google';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const someMetadata = {
  title: 'Taskaroo',
  description: 'simplify tasks, simplify your life'
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
