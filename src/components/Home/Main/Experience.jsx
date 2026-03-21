import React from 'react';

const experiencesData = [
  {
    title: 'MERN Stack Developer',
    type: 'Freelance',
    company: 'Upwork / Fiverr',
    period: '2023 - Present',
    description: [
      'Developed and maintained highly scalable full-stack web applications.',
      'Designed efficient database schemas using MongoDB and PostgreSQL.',
      'Collaborated with clients to deliver polished UI with React and TailwindCSS.',
    ],
  },
  {
    title: 'Frontend Developer',
    type: 'Internship',
    company: 'Tech Startup',
    period: '2022 - 2023',
    description: [
      'Built responsive interfaces using HTML, CSS, and Vue.js.',
      'Optimized application performance and implemented modern web standards.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl mt-8 transition-all duration-300">
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Experience
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-1">
            Professional Journey
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Where I've applied my skills in real-world environments.
          </p>
        </div>
        <button className="text-gray-400 hover:text-primary text-xs font-semibold transition-colors">
          Full resume
        </button>
      </div>

      <div className="space-y-6">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="group relative p-6 bg-background/40 border border-gray-800/60 rounded-2xl hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-md border border-primary/20">
                    {exp.type}
                  </span>
                </div>
                <p className="text-primary/80 text-sm font-semibold mt-1">
                  {exp.company}
                </p>
              </div>
              <span className="text-xs font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
                {exp.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {exp.description.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
