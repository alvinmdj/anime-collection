import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Anime Collections</title>
        <meta name="description" content="Anime collections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${inter.className}`}>{children}</main>
    </>
  );
};

export default MainLayout;
