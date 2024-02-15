import SectionHeader from './section-header'

export default function About() {
  return (
    <section id="about" className="py-32">
      <SectionHeader title="About Me"></SectionHeader>
      <div className="max-w-prose">
        <div className="mb-4">
          Hey, I'm Josh! I'm a software engineer based in Denver, CO. I love
          building web apps that give users a sense of{' '}
          <span className="text-accent">delight</span>. My interests in software
          engineering started in college when I built a local polling mobile app
          called Pollar. Witnessing its adoption for the first time was a
          pivotal moment that ignited my career trajectory.
        </div>
        <div>
          Over the last 7+ years, I've had the opportunity to build software for
          startups and established companies in very different industries like
          devtools, esports, ERP, and technology consulting. Take a look below
          for more details about the technologies I've used and the products
          I've helped create!
        </div>
      </div>
    </section>
  )
}
