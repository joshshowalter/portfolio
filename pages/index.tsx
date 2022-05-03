import type { NextPage } from 'next'
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Josh Showalter</title>
      </Head>
      <main className="min-h-screen bg-base-300 px-6 sm:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-base-300 text-center py-6 px-6 text-sm font-light">
        <span>Built with Next.js | Design inspiration from Brittany Chiang</span>
      </footer>
    </>
  );
} 

export default Home
