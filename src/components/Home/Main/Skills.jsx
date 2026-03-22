"use client";
import PageLoader from "@/components/shared/PageLoader";
import React from 'react';
import { useSharedData } from '@/hooks/useSharedData';
import { Code2, Database, Layout, BrainCircuit, Wrench, Globe } from 'lucide-react';

const getIconForCategory = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('language') || lowerTitle.includes('code')) return Code2;
  if (lowerTitle.includes('frontend') || lowerTitle.includes('design') || lowerTitle.includes('ui')) return Layout;
  if (lowerTitle.includes('backend') || lowerTitle.includes('database') || lowerTitle.includes('server')) return Database;
  if (lowerTitle.includes('machine learning') || lowerTitle.includes('ai') || lowerTitle.includes('cp') || lowerTitle.includes('algorithm')) return BrainCircuit;
  if (lowerTitle.includes('tool') || lowerTitle.includes('devops')) return Wrench;
  return Globe;
};

const SkillCategory = ({ title, skills }) => {
  const Icon = getIconForCategory(title);
  
  return (
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
};

const Skills = () => {
    const { data: fullskill, isLoading } = useSharedData('skillsData', async () => {
    const res = await fetch('/api/skills');
    return await res.json();
  });
  
  const skillData = fullskill ? fullskill : [];

  if (!isLoading && skillData.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-8">
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

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {skillData.map((category) => (
              <SkillCategory
                key={category._id || category.title}
                title={category.title}
                skills={Array.isArray(category.skills) ? category.skills : []}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Skills;
