import SectionHeader from "./section-header";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="work" className="py-32">
      <SectionHeader title="Notable Projects"/>
      <div>
        Check out my <Link href="https://github.com/joshshowalter"><a className="text-blue-500" target="_blank">github</a></Link> for some project work
      </div>
    </section>
  );
}