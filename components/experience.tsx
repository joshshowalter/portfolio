import SectionHeader from "./section-header";

export default function Experience() {
  const experience = [
    {
      position: 'Front-end Engineer',
      company: 'Nextworld',
      date: 'Jan 2017 - Sep 2019'
    },
    {
      position: 'Full-stack Engineer',
      company: 'Accenture',
      date: 'Sep 2019 - Jan 2022'
    },
    {
      position: 'Senior Software Engineer',
      company: 'Brag House',
      date: 'Jan 2022 - present'
    }
  ];

  return (
    <section id="experience" className="py-32">
      <SectionHeader title="Where I Have Worked" />
      <div className="italic mb-6 text-lg">Section is under progress. Check out my resume for details!</div>
      {
        experience.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))
      }
    </section>
  );
}

const ExperienceItem = ({job}: {job: any}) => {
  return (
    <div className="rounded-lg w-full text-xl p-4 mb-4 bg-base-100 shadow-md transition all ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer hover:-translate-y-1">
      <div>
        <span className="">{job.position} | </span>
        <span className="text-accent">{job.company}</span>
      </div>
      <div className="text-sm mt-0.5 italic">{job.date}</div>
    </div>
  );
}