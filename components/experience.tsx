import { useRef } from 'react';
import SectionHeader from './section-header';
import { useSR } from '../hooks/useSR';

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  description: string;
};

export default function Experience({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  const revealContainer = useRef(null);
  useSR(revealContainer);

  return (
    <section id="experience" className="py-56" ref={revealContainer}>
      <SectionHeader title="Where I Have Worked" />
      {experiences.map((job: ExperienceItem, index: number) => (
        <ExperienceItem key={index} job={job} />
      ))}
    </section>
  );
}

const ExperienceItem = ({ job }: { job: ExperienceItem }) => {
  return (
    <div className="collapse collapse-arrow mb-4 w-full rounded-lg bg-base-100 p-4 text-xl shadow-md hover:cursor-pointer hover:shadow-lg">
      <input type="checkbox" />
      <div className="collapse-title">
        <div>
          <span className="">{job.role} | </span>
          <span className="text-accent">{job.company}</span>
        </div>
        <div className="mt-0.5 text-sm italic">{job.date}</div>
      </div>
      <div className="collapse-content prose max-w-[80ch] text-white">
        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
      </div>
    </div>
  );
};
