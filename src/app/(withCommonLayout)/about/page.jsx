import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      {/* Main Card container */}
      <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full transition-colors duration-300">
        {/* Intro Section */}
        <div className="mb-10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            About Me
          </span>
          <h1 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Prodip Hore
          </h1>
          <div className="space-y-4 text-gray-400 leading-relaxed text-base">
            <p>
              Hey there! I am{' '}
              <span className="font-bold text-foreground">Prodip Hore</span>{' '}
              from the vibrant land of Bangladesh.
            </p>
            <p>
              I am a passionate tech enthusiast with a strong background in web
              development and design. I love exploring new technologies,
              contributing to open-source projects, and creating engaging
              content.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            ></span>
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <ul className="space-y-6 text-gray-400">
            <li className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                B.Sc. in Computer Science
              </span>
              <span className="text-sm mt-1">
                Patuakhali Science and Technology University (PSTU) • 2024 -
                Present
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                Computer & Network Engineering
              </span>
              <span className="text-sm mt-1">
                High School Diploma • 2019 - 2022
              </span>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            ></span>
            <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
            <div>
              <h4 className="font-bold text-foreground mb-2 text-lg">
                Languages
              </h4>
              <p className="text-sm">
                JavaScript, TypeScript, React, Next.js, Python, C++
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2 text-lg">Tools</h4>
              <p className="text-sm">Git, Docker, VS Code, Figma, Postman</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            ></span>
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-8 text-gray-400">
            <div className="relative pl-6 border-l-2 border-gray-800">
              <div
                className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5"
                style={{ backgroundColor: 'var(--primary-color)' }}
              ></div>
              <h3 className="text-lg font-bold text-foreground">
                Web Developer Intern
              </h3>
              <p className="text-xs font-mono mt-1 mb-3 opacity-80">
                Company Name • 2025 - Present
              </p>
              <p className="text-sm leading-relaxed">
                Assisting in building scalable web applications and optimizing
                UI performance.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-gray-800">
              <div
                className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 opacity-50"
                style={{ backgroundColor: 'var(--primary-color)' }}
              ></div>
              <h3 className="text-lg font-bold text-foreground">
                Freelance Developer
              </h3>
              <p className="text-xs font-mono mt-1 mb-3 opacity-80">
                2022 - 2024
              </p>
              <p className="text-sm leading-relaxed">
                Developed custom solutions for various clients focusing on
                automation and data management.
              </p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            ></span>
            <h2 className="text-2xl font-bold text-foreground">Goals</h2>
          </div>
          <div className="space-y-4 text-gray-400">
            <ul className="list-disc pl-5 marker:text-primary space-y-2 text-sm leading-relaxed">
              <li>
                Mastering advanced Full-Stack Development and Web Security.
              </li>
              <li>
                Contributing to meaningful open-source projects and communities.
              </li>
              <li>
                Building scalable, accessible, and user-centric web
                applications.
              </li>
              <li>
                Continually learning new technologies and sharing knowledge with
                others.
              </li>
            </ul>
          </div>
        </div>

        {/* Collaborate Section */}
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            ></span>
            <h2 className="text-2xl font-bold text-foreground">
              Let&apos;s Collaborate
            </h2>
          </div>
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p>
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you need a
              freelance developer to help bring your ideas to life or a teammate
              for an open-source initiative, feel free to reach out.
            </p>
            <p className="font-medium text-foreground text-base">
              Let&apos;s build something amazing together!
            </p>

            {/* Social Links for Collaboration */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="https://github.com/shadowomonarch"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-background border border-gray-800 hover:border-primary text-foreground hover:text-primary rounded-xl transition-all group font-medium text-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ExternalLink
                  size={14}
                  className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                />
              </Link>

              <Link
                href="https://linkedin.com/in/prodiphore"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-background border border-gray-800 hover:border-primary text-foreground hover:text-primary rounded-xl transition-all group font-medium text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ExternalLink
                  size={14}
                  className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
