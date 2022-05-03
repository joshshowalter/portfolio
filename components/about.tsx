import SectionHeader from "./section-header";

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionHeader title="About Me"></SectionHeader>
      <div className="max-w-prose">
        <div className="mb-4">
          Hey, I'm Josh! I'm a software engineer based in Denver, CO. I love building web apps that give users a sense of <span className="text-accent">enjoyment</span> rather than dread. My interests in front end (and software engineering as a whole) started in college when I built a local polling mobile app called Pollar. I will never forget the sense of <span className="text-accent">fulfillment</span> that came over me when I saw someone using my app for the first time.
        </div>
        <div>
          Over the last 6 years, I've had the opportunity to build software for startups and established companies in very different industries like ERP, Large Construction, and esports. Take a look below for more details about the technologies I've used and the products I've helped create!
        </div>
      </div>
    </section>
  );
}