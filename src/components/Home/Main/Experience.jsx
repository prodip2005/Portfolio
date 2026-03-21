import React from 'react';

const experiencesData = [
  {
    title: 'Network Security Engineer',
    type: 'Internship',
    company: 'Universitas Indo Global Mandiri',
    period: '2025 - Present',
    description: [
      'Assisted in securing campus networks and implementing monitoring solutions.',
      "Identified and mitigated vulnerabilities in the university's web applications.",
      'Successfully stopped a DDoS attack targeting public-facing services.',
    ],
  },
  {
    title: 'Automation Developer',
    type: 'Freelance',
    company: 'Self-Employed',
    period: '2022 - 2024',
    description: [
      'Developed custom automation bots for various client needs.',
      'Built web automation tools for registration and data extraction tasks.',
    ],
  },
  {
    title: 'Front-end Developer & Whitelist Staff',
    type: 'Freelance',
    company: 'PT Datenshi Games Indonesia',
    period: '2021 - 2022',
    description: [
      'Filtering players to identify and flag cheaters.',
      'Contributed to the creation of the whitelist website.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl mt-8 transition-all duration-300">
      {/* হেডার */}
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

      {/* এক্সপেরিয়েন্স লিস্ট */}
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

            {/* ডেসক্রিপশন লিস্ট */}
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
