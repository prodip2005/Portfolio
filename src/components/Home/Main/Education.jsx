"use client";
import PageLoader from "@/components/shared/PageLoader";
import React from 'react';
import { useSharedData } from '@/hooks/useSharedData';

const Education = () => {
    const { data: fulleducation, isLoading } = useSharedData('educationData', async () => {
    const res = await fetch('/api/education');
    return await res.json();
  });
  
  const educationData = fulleducation ? fulleducation : [];

  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl mt-8 transition-all duration-300">
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

      {!isLoading && (
        <div className="space-y-6 mt-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-900 group-hover:border-primary/50 group-hover:bg-primary/10 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21l-9-5-9 5 9 5 9-5z"
                  />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/50 border border-gray-800/60 p-5 rounded-2xl group-hover:border-primary/30 transition-all">
                <div className="flex flex-col space-y-2 mb-3">
                  <span className="text-primary font-mono text-xs font-bold tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="font-bold text-gray-200 text-lg leading-tight group-hover:text-primary transition-colors">
                    {item.degree}
                  </h3>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {item.institution}
                </div>
                <div className="text-gray-500 text-xs mt-1 italic">
                  Major: {item.major}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Education;
