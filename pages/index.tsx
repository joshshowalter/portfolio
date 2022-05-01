import type { NextPage } from 'next'
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-base-200 px-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
} 

export default Home
