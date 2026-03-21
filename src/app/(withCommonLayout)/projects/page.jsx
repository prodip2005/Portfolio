'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Cpu,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ project }) => (
  <div className="group relative bg-background/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl flex flex-col h-full">
    {/* Project Image */}
    <div className="relative h-48 w-full overflow-hidden border-b border-gray-800">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.github}
          target="_blank"
          className="p-3 bg-background rounded-full text-foreground hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
        >
          <Github size={20} />
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="p-3 bg-background rounded-full text-foreground hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6 flex flex-col grow space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md">
          {project.type}
        </span>
        <span className="text-[10px] font-mono text-gray-500">
          {project.year}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-bold text-gray-500 bg-gray-800/40 px-2 py-0.5 rounded border border-gray-700/50"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-6 pt-4 mt-auto border-t border-gray-800/50">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-primary transition-colors"
        >
          <Github size={16} />
          <span>Source Code</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-primary transition-colors"
        >
          <Globe size={16} />
          <span>Live Link</span>
        </a>
      </div>
    </div>
  </div>
);

const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: 'MERN eCommerce Platform',
      type: 'Full Stack',
      year: '2025',
      image: '/projects/ecommerce.jpg',
      description:
        'A scalable marketplace with real-time inventory, secure Stripe checkout, and an advanced admin analytics panel.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Redux'],
      github: 'https://github.com/prodiphore/ecommerce',
      demo: 'https://ecommerce-live.com',
    },
    {
      title: 'Medical Image Classification',
      type: 'Machine Learning',
      year: '2025',
      image: '/projects/ml-health.jpg',
      description:
        'Deep Learning model built with TensorFlow to identify patterns in medical imaging with 98% accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      github: 'https://github.com/prodiphore/med-ml',
      demo: 'https://med-ml-demo.com',
    },
    {
      title: 'Real-time Chat Engine',
      type: 'Web App',
      year: '2024',
      image: '/projects/chat.jpg',
      description:
        'Encrypted messaging platform using Socket.io for instant delivery and Supabase for database management.',
      tech: ['Next.js', 'Socket.io', 'Supabase', 'Prisma'],
      github: 'https://github.com/prodiphore/chat-app',
      demo: 'https://chat-live.com',
    },
  ];

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' }); // পেজ চেঞ্জ হলে স্মুথ স্ক্রল
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full">
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Showcase
          </span>
          <h1 className="text-4xl font-bold text-foreground mt-4 mb-6">
            All My Projects
          </h1>
          <p className="text-gray-400 text-base max-w-3xl">
            A curated list of my technical work, covering{' '}
            <span className="text-foreground font-semibold">
              Web Development
            </span>{' '}
            and <span className="text-foreground font-semibold">AI/ML</span>.
          </p>
        </div>

        <div className="mb-10 flex items-center gap-3">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          <h2 className="text-2xl font-bold text-foreground">
            Featured Portfolio
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Pagination Controls */}
        {projects.length > projectsPerPage && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:text-gray-400 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl border font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(var(--primary-color),0.4)]'
                      : 'border-gray-800 text-gray-500 hover:border-gray-600'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-gray-800 text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
