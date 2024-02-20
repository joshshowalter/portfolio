import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Hero = () => {
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTransition(true)
    }, 0)
  }, [])

  const one = (
    <div className="ml-1 mb-4">
      <span className="font-mono text-accent">Hello, my name is</span>
    </div>
  )

  const two = (
    <div>
      <h1 className="mb-2 text-6xl font-bold text-white">Josh Showalter</h1>
    </div>
  )

  const three = (
    <div>
      <h2 className="text-6xl font-semibold">I am a Software Engineer</h2>
    </div>
  )

  const four = (
    <div>
      <p className="mt-12 max-w-prose">
        I am a full-stack software engineer with a specialization in Next.js and
        React, creating modern and intuitive web applications. Currently
        building a platform to handle product notification infrastructure at{' '}
        <a
          href="https://courier.com"
          target="_blank"
          className="text-secondary"
        >
          Courier
        </a>
        .
      </p>
    </div>
  )

  const transitionItems = [one, two, three, four]

  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center">
      {transitionItems.map((item, index) => (
        <Animate show={transition} key={index} index={index}>
          {item}
        </Animate>
      ))}
    </section>
  )
}

const Animate = ({
  children,
  index,
  show,
}: {
  children: any
  index: number
  show: boolean
}) => {
  const ref = useRef(null)

  return (
    <CSSTransition classNames="fade-up" timeout={2000} in={show} nodeRef={ref}>
      {/* the transition will end with fade-up-enter-done which sets opacity to 1 */}
      <div
        className="fade-up-enter"
        style={{ transitionDelay: `${(index + 1) * 150}ms` }}
        ref={ref}
      >
        {children}
      </div>
    </CSSTransition>
  )
}

export default Hero
