import { useRef } from 'react'
import SectionHeader from './section-header'
import Link from 'next/link'
import { useSR } from '../hooks/useSR'

export default function Projects() {
  const revealContainer = useRef(null)
  useSR(revealContainer)

  return (
    <section id="work" className="py-32" ref={revealContainer}>
      <SectionHeader title="Notable Projects" />
      <div>
        Check out my{' '}
        <a
          className="link link-accent"
          href="https://github.com/joshshowalter"
          target="_blank"
        >
          github
        </a>{' '}
        to see my project work!
      </div>
    </section>
  )
}
