import SectionHeader from "./section-header";

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <SectionHeader title="Where I Have Worked" />
      <div className="italic mb-6 text-lg">Section is under progress. Check out my resume for details!</div>
      <div className="border-slate-500 border border-solid rounded-lg w-full text-2xl p-3 mb-4 cursor-pointer">Front End Engineer @ Nextworld</div>
      <div className="border-slate-500 border border-solid rounded-lg w-full text-2xl p-3 mb-4 cursor-pointer">Full Stack Engineer @ Accenture</div>
      <div className="border-slate-500 border border-solid rounded-lg w-full text-2xl p-3 mb-4 cursor-pointer">Senior Software Engineer @ Brag House</div>

    </section>
  );
}