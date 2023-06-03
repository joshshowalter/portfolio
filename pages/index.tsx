import remarkParse from 'remark-parse'
import { unified } from 'unified'
import remarkHtml from 'remark-html'
import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'
import client from '../apollo-client'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Experiences {
        experiences(orderBy: priority_ASC) {
          id
          role
          date
          company
          description
        }
      }
    `,
  })

  const copy = JSON.parse(JSON.stringify(data.experiences))
  const result = await Promise.all(
    copy.map(async (item: any) => {
      const processedContent = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(item.description)

      item['description'] = processedContent.value
      return item
    })
  )

  return {
    props: {
      experiences: result,
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
          Built with Next.js | Design inspiration from Brittany Chiang
        </span>
      </footer>
    </>
  )
}

export default Home
