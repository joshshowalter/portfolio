import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'

const Home: NextPage = () => {
  return (
    <div className="flex w-full h-screen">
      <Head>
        <title>Josh Showalter</title>
      </Head>      
      <main className="flex flex-col flex-1 bg-base-200 items-center justify-center px-4 text-center">
        <h1 className="animate-fadeIn font-bold text-4xl sm:text-6xl">
          Josh Showalter
        </h1>
        <Card>
          <div className="flex pt-2"> 

            Hahahahah
          </div>
        </Card>        
      </main>
    </div>
  );
}

export default Home
