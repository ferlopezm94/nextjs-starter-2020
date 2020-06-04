import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | NextJS Starter</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Run NextJS applications with typescript, eslint, prettier and semantic release support.'
        />
        <meta name='keywords' content='nextjs, react, typescript' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:title' content='NextJS Starter' />
        <meta
          property='og:description'
          content='Run NextJS applications with typescript, eslint, prettier and semantic release support.'
        />
        <meta property='og:url' content='https://https://nextjs-starter.ferlopezm94.now.sh' />
        <meta property='og:type' content='website' />
      </Head>

      <main>
        <p>Welcome to Next.js!</p>
      </main>
    </div>
  );
};

export default Home;
