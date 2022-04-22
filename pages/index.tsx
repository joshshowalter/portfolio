import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../components/card'

const Home: NextPage = () => {

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!localStorage.getItem('noAnimate'));
    localStorage.setItem('noAnimate', 'true');
  }, []);

  const cards = [
    {
      title: 'About',
      description: 'More about me and how this portfolio site was built',
      page: '/about'
    },
    {
      title: 'Resume',
      description: 'See details about my work experience',
      page: '/about'
    },
    {
      title: 'Reddit Client',
      description: 'Reddit client built with React and a Node.js microservice',
      page: '/about'
    },
    {
      title: 'Demo application',
      description: 'Some other details',
      page: '/about'
    }
  ]
  return (
    <div className="flex flex-col w-full items-center h-screen bg-base-200">
      <Head>
        <title>Josh Showalter</title>
      </Head>
      {/* <header>
        <h1 className={`tracking-tight underline underline-offset-4 font-medium decoration-6 decoration-blue-500 text-3xl sm:text-6xl p-16 ${animate ? 'animate-fadeIn' : ''}`}>
          Josh Showalter
        </h1>
      </header> */}
      <main className="flex flex-col flex-1 items-center px-4 text-center">
          <span className="grid gap-6 grid-cols-2">
            {
              cards.map((card, index) => (
                <Link href={card.page}>
                <span key={index} className={animate ? 'opacity-0 animate-fadeCard1' : ''}>
                  <Card title={card.title}>
                    <div className="flex pt-2 text-left">
                      {card.description}
                    </div>
                  </Card>
                </span>
                </Link>
              ))
            }
          </span>
      </main>
    </div>
  );
}

export default Home
