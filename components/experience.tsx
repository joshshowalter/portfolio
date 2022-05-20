import { useEffect } from "react";
import SectionHeader from "./section-header";

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string; 
}

export default function Experience({experiences}: {experiences: Array<Experience>}) {
  return (
    <section id="experience" className="py-32">
      <SectionHeader title="Where I Have Worked" />
      {
        experiences.map((job: Experience, index: number) => (
          <ExperienceItem key={index} job={job} />
        ))
      }
    </section>
  );
}

const ExperienceItem = ({job}: { job: Experience}) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-lg w-full text-xl p-4 mb-4 bg-base-100 shadow-md transition all ease-in-out duration-300 hover:shadow-lg hover:cursor-pointer hover:-translate-y-1">
      <div className="collapse-title">
        <div>
          <span className="">{job.role} | </span>
          <span className="text-accent">{job.company}</span>
        </div>
        <div className="text-sm mt-0.5 italic">{job.date}</div>
      </div>
      <div className="collapse-content prose text-accent-content">
        <div dangerouslySetInnerHTML={{ __html: job.description }}>
        </div>
      </div>
    </div>
  );
}