import React from 'react';

const educationData = [
  {
    degree: 'Bachelor of Computer Science',
    status: 'Ongoing', // অথবা 'Completed' আপনার বর্তমান অবস্থা অনুযায়ী
    institution: 'Patuakhali Science and Technology University (PSTU)',
    period: '2024 - Present',
    major: 'Computer Science',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    status: 'Graduated',
    institution: 'Kalaroa Govt College',
    period: '2021 - 2023', // আপনার সঠিক সাল অনুযায়ী পরিবর্তন করে নিন
    major: 'Science',
  },
];

const Education = () => {
  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl mt-8 transition-all duration-300">
      {/* হেডার */}
      <div className="mb-8">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
          Education
        </span>
        <h2 className="text-2xl font-bold text-foreground mt-1">
          Academic Background
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          My educational journey in tech and computer science.
        </p>
      </div>

      {/* এডুকেশন কার্ড গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-background/40 border border-gray-800/60 rounded-2xl hover:border-primary/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-primary transition-colors leading-tight">
                {edu.degree}
              </h3>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold rounded border border-primary/20">
                {edu.status}
              </span>
            </div>

            <p className="text-primary/80 text-sm font-semibold mb-3">
              {edu.institution}
            </p>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800/50">
              <span className="text-xs font-mono text-gray-500">
                {edu.period}
              </span>
              <span className="px-2.5 py-1 bg-gray-800/80 text-[10px] text-gray-400 font-bold rounded-lg border border-gray-700">
                {edu.major}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
