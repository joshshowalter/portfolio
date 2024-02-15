export default function Hero() {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center">
      <div className="ml-1 mb-4">
        <span className="font-mono text-accent">Hello, my name is</span>
      </div>
      <div>
        <h1 className="mb-2 text-6xl font-bold text-white">Josh Showalter</h1>
      </div>
      <div>
        <h2 className="text-6xl font-semibold">I am a Software Engineer</h2>
      </div>
      <div className="">
        <p className="mt-12 max-w-prose">
          I am a full-stack software engineer with a specialization in Next.js
          and React, creating modern and intuitive web applications. Currently
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
    </section>
  )
}
