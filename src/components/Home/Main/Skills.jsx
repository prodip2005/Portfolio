import React from 'react';
import { Code2, Database, Layout, BrainCircuit } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-primary-border/10 hover:border-primary/30 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-primary-border/10 text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Java', 'JavaScript', 'PHP'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        'HTML',
        'CSS',
        'React.js',
        'Next.js',
        'Vue',
        'Tailwind',
        'DaisyUI',
        'ShadeCN UI',
      ],
    },
    {
      title: 'Backend & DB',
      icon: Database,
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'Prisma',
        'Supabase',
      ],
    },
    {
      title: 'Machine Learning & CP',
      icon: BrainCircuit,
      skills: [
        'Algorithms',
        'Data Structures',
        'Competitive Programming',
        'Machine Learning',
      ],
    },
  ];

  return (
    <div className="mt-8 space-y-8">
      {/* Header Section (Same as Collaboration style) */}
      <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-primary-border/10 shadow-2xl transition-all duration-300">
        <div className="mb-8">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Expertise
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-1">
            Technical Skills
          </h2>
          <p className="text-foreground/50 text-sm mt-1">
            My diverse toolkit for building robust and scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillData.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
