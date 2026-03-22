'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();

        if (data && data.length > 0) {
          // Show only latest 2 projects
          setProjectsData(data.slice(0, 2));
        } else {
          setProjectsData([]);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (!isLoading && projectsData.length === 0) {
    return null;
  }

  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Projects
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-1">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            A selection of open-source projects I build and maintain.
          </p>
        </div>
        <Link href={'/projects'}>
          {' '}
          <button className="text-gray-400 hover:text-primary text-xs font-semibold transition-colors">
            View all projects
          </button>
        </Link>
      </div>

      {isLoading ? null : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-background/40 border border-gray-800/60 p-6 rounded-2xl hover:border-primary/40 transition-all group relative"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium italic">
                  Type: {project.type}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4 bg-background/60 w-fit px-3 py-1 rounded-lg border border-gray-800 group-hover:border-primary/20 transition-colors">
                <FiCalendar className="text-xs text-primary/70" />
                <span className="text-[11px] font-mono">
                  {project.date || project.Date}
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-background text-[10px] text-gray-400 font-bold rounded border border-gray-700 tracking-wider group-hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.live || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800/40 hover:bg-primary/10 hover:text-primary border border-gray-700 hover:border-primary/40 text-gray-300 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  View details
                </a>
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800/40 hover:bg-primary/10 hover:text-primary border border-gray-700 hover:border-primary/40 text-gray-300 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  View source
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
