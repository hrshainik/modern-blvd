import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [paused, setPaused] = useState("play")
  
  return (
    <>
      <Head>
        <title>Modern BLVD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  )
}

export default Home
