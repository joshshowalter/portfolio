import SectionHeader from "./section-header";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="work" className="py-32">
      <SectionHeader title="Notable Projects"/>
      <div>
        Check out my <a className="link link-accent" href="https://github.com/joshshowalter" target="_blank">github</a> to see my project work!
      </div>
    </section>
  );
}