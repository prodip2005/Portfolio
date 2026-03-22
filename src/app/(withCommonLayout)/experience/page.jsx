"use client";
import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/journey');
        const data = await response.json();
        if (data && data.length > 0) {
          setExperiences(data);
        } else {
          setExperiences([]);
        }
      } catch (error) {
        console.error('Failed to fetch experiences:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full">
        <div className="mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Briefcase size={16} /> Roadmap
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight">
            Professional Journey
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
            A complete timeline of my professional experience, showcasing the roles I've held, 
            the responsibilities I've taken on, and the progress I've made throughout my career.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : experiences.length === 0 ? (
          <div className="text-center py-20 text-gray-500 bg-background/30 rounded-2xl border border-dashed border-gray-800">
            No experiences recorded yet.
          </div>
        ) : (
          <div className="relative border-l border-gray-800 ml-4 md:ml-8 py-8 space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary-color),0.8)] group-hover:bg-primary transition-colors duration-300"></div>

                <div className="bg-background/40 border border-gray-800/60 p-6 md:p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative">
                  
                  {/* Decorative Arrow Pointing from line to card */}
                  <div className="absolute top-4 -left-3 text-gray-800/60 group-hover:text-primary/40 transition-colors">
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12L0 0V24L12 12Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-lg border border-primary/20 tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-gray-900/60 px-4 py-2 rounded-xl border border-gray-800 self-start">
                      <Calendar size={14} className="text-primary" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-3 relative z-10">
                    {exp.description && exp.description.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary/70 mt-1 shrink-0" />
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;
