export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-start justify-center">
      <div className="ml-1 mb-4">
        <span className="text-accent text-accent font-mono">Hello, my name is</span>
      </div>
      <div>
        <h1 className="text-6xl text-white font-bold mb-2">Josh Showalter</h1>
      </div>
      <div>
        <h2 className="text-6xl font-semibold">I am a Software Engineer</h2>
      </div>
      <div className="">
        <p className="mt-12 max-w-prose">I am a full-stack software engineer, with a specialization in Angular and React, creating intuitive, modern web applications. Currently building the central esports community plaform for all social gamers at Brag House.</p>
      </div>
    </section>
  );
}