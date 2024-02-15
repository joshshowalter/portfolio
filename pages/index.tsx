import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

export async function getStaticProps() {
  const data = {
    experiences: [
      {
        role: 'Senior Full Stack Engineer',
        company: 'Courier',
        date: 'May 2022 - Present',
        description: `
        <div>
          <strong>Full stack Engineer | UI Team Lead building notification infrastructure platform backed by YCombinator, Google Ventures, Bessemer Venture Partners</strong>
          <ul>
            <li>Led six-month UI "2.0" initiative across application through comprehensive component library and design system implementation, bringing 30% performance improvement and light/dark mode support</li>
            <li>Co-engineered drag-n-drop automation product for building/managing complex  workflows, leading to notification volume increases in the hundreds of thousands per month</li>
            <li>Built notification digest engine to allow customers to efficiently manage recurring, preference-based daily/weekly notification digests for their end users</li>
            <li>Technical Experience: Next.js, Tailwind, GraphQL, Node.js, Serverless, AWS - Lambda/Kinesis/SQS/Dynamo/S3</li>
          </ul>
        </div>
        `,
      },
      {
        role: 'Senior Software Engineer',
        company: 'Brag House',
        date: 'Jan 2022 - May 2022',
        description: `
        <div>
          <strong>Lead Engineer at Brag House building the community platform for all casual gamers</strong>
          <ul>
            <li>Solely responsible for the architecture and implementation of the web application using Next.js and TailwindCSS to support streaming and community engagement</li>
            <li>Worked closely with Head of Product to drive strategic product direction and decisions</li>
            <li>Implemented Bingo-style game across the stack using React Native, Django/Python, and PostgreSQL</li>
            <li>Technical Experience: Next.js, TailwindCSS, TypeScript, Django, Python, PostgreSQL, EC2, Lambda, CloudFront, S3, Route53</li>
          </ul>
        </div>
        `,
      },
      {
        role: 'Technical Architect',
        company: 'Accenture',
        date: 'Sep 2019 - Jan 2022',
        description: `
        <div>
          <strong>Technical Architect | Full-stack Engineer in the Cloud Native practice</strong>
          <ul>
            <li>Technical architect responsible for full stack architecture, solution designs, and key technical direction/decisions.</li>
            <li>Full stack engineer for React/Angular cloud native web applications</li>
            <li>Architected, designed, and implemented Websocket solution across web, AWS infra, and backend to enable client/server communication for long running SQL calculations</li>
            <li>Developed an interactive map solution. Re-architected existing API, data layer, and database tables to increase API performance by more than 100% and support rendering of 1M+ pins</li>
            <li>Managed 2 offshore development teams</li>
            <li>Lead instructor for 5 week-long Angular fundamentals courses</li>
            <li>Key contributor/maintainer of internal Angular Best Practices guide</li>
            <li>Technical experience: React, Angular, TypeScript, HTML/CSS, Python, Django, EC2, API Gateway, Lambda, CloudFront, RDS, CloudWatch, Route 53</li>
          </ul>
        </div>
        `,
      },
      {
        role: 'Front End Engineer',
        company: 'Nextworld',
        date: 'Jan 2017 - Sep 2019',
        description: `
        <div>
          <strong>Early software engineer developing a no-code ERP PaaS</strong>
          <ul>
            <li>Co-engineered the UI/UX of a turing-complete logic workflow builder to enable business SME's to develop no-code enterprise applications</li>
            <li>Founding engineer for many of the core frontend components</li>
            <li>Re-architected critical Angular modules, reducing code lines by 56%</li>
            <li>Technical Experience: Angular 8, TypeScript, RxJS, Jasmine/Karma</li>
          </ul>
        </div>
        `,
      },
    ],
  }

  return {
    props: {
      experiences: data.experiences,
    },
  }
}

const Home: NextPage = ({ experiences }: any) => {
  return (
    <>
      <Head>
        <title>Josh Showalter</title>
      </Head>
      <main className="min-h-screen bg-base-300 px-6 sm:px-24">
        <Hero />
        <About />
        <Experience experiences={experiences} />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-base-300 py-6 px-6 text-center text-sm font-light">
        <span>
          Built with Next.js | Design inspiration from{' '}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            className="text-accent"
          >
            Brittany Chiang
          </a>
        </span>
      </footer>
    </>
  )
}

export default Home
