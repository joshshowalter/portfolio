import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full items-center h-screen bg-base-200">
      <Head>
        <title>Josh Showalter</title>
      </Head>
      <header>
        <h1 className="animate-fadeIn font-bold text-3xl sm:text-6xl p-16">
          Josh Showalter
        </h1>
      </header>
      <main className="flex flex-col flex-1 items-center justify-center px-4 text-center h-0">
        <span className="grid gap-6 grid-cols-2">
          <span className="animate-fadeCard1 opacity-0">
          <Card>
            <div className="flex pt-2">
              Example Application 1
            </div>
          </Card>
          </span>
          <span className="animate-fadeCard2 opacity-0">
          <Card>
            <div className="flex pt-2">
              Example Application 2
            </div>
          </Card>
          </span>
          <span className="animate-fadeCard3 opacity-0">
            <Card>
              <div className="flex pt-2">
                Example Application 3
              </div>
            </Card>
          </span>
          <span className="animate-fadeCard4 opacity-0">
          <Card>
            <div className="flex pt-2">
              Example Application 4
            </div>
          </Card>
          </span>
        </span>
      </main>
    </div>
  );
}

export default Home
