import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Josh Showalter</title>
      </Head>      
      <main className="flex flex-1 items-center justify-center px-20 text-center">
        <h1 className="animate-fadeIn text-6xl font-bold">
          Josh Showalter
        </h1>
      </main>
    </div>
  );
}

export default Home
