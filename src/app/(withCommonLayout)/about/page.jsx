"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Globe, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const iconMap = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  facebook: <Facebook size={18} />,
  discord: <FaDiscord size={18} />
};

const getIcon = (name) => {
  const lowercaseName = name.toLowerCase();
  for (const key in iconMap) {
    if (lowercaseName.includes(key)) {
      return iconMap[key];
    }
  }
  return <Globe size={18} />;
};

const AboutPage = () => {
  const [data, setData] = useState({
    mainInfo: null,
    education: [],
    skills: [],
    experience: [],
    socials: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [mainRes, eduRes, skillRes, expRes, contactRes] = await Promise.all([
          fetch('/api/maininfo'),
          fetch('/api/education'),
          fetch('/api/skills'),
          fetch('/api/journey'),
          fetch('/api/contact')
        ]);

        setData({
          mainInfo: mainRes.ok ? await mainRes.json() : null,
          education: eduRes.ok ? await eduRes.json() : [],
          skills: skillRes.ok ? await skillRes.json() : [],
          experience: expRes.ok ? await expRes.json() : [],
          socials: contactRes.ok ? await contactRes.json() : []
        });
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllData();
  }, []);

  if (isLoading) { return null; }

  const { mainInfo, education, skills, experience, socials } = data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full transition-colors duration-300">
        
        {/* About Me */}
        <div className="mb-10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            About Me
          </span>
          <h1 className="text-4xl font-bold text-foreground mt-4 mb-6">
            {mainInfo?.name || ""}
          </h1>
          <div className="space-y-4 text-gray-400 leading-relaxed text-base whitespace-pre-line">
            {mainInfo?.description ? (
              <p>{mainInfo.description}</p>
            ) : (
               <p>No description available.</p>
            )}
          </div>
        </div>

        {/* Education */}
        {education && education.length > 0 && (
          <div className="mb-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <ul className="space-y-6 text-gray-400">
              {education.map((edu, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">
                    {edu.degree} {edu.major && `in ${edu.major}`}
                  </span>
                  <span className="text-sm mt-1">
                    {edu.institution} • {edu.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
              <h2 className="text-2xl font-bold text-foreground">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
              {skills.map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    {category.title}
                  </h4>
                  <p className="text-sm">
                    {Array.isArray(category.skills) ? category.skills.join(', ') : category.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>
            <div className="space-y-8 text-gray-400">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-gray-800">
                  <div
                    className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${idx !== 0 ? 'opacity-50' : ''}`}
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  ></div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.title || exp.designation}
                  </h3>
                  <p className="text-xs font-mono mt-1 mb-3 opacity-80">
                    {exp.company} • {exp.period}
                  </p>
                  
                  {/* Descriptions fetched from DB rendered as bullets (like Goals) */}
                  {Array.isArray(exp.description) ? (
                     <ul className="list-disc pl-5 marker:text-primary space-y-2 text-sm leading-relaxed mt-3">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                     </ul>
                  ) : (
                     <p className="text-sm leading-relaxed whitespace-pre-line mt-3">
                        {exp.description}
                     </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Let's Collaborate */}
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
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

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {socials && socials.length > 0 ? (
                socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 bg-background border border-gray-800 hover:border-primary text-foreground hover:text-primary rounded-xl transition-all group font-medium text-sm"
                  >
                    {getIcon(social.name)}
                    <span>{social.name}</span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                  </Link>
                ))
              ) : (
                <span className="text-sm text-gray-500">No contact links found</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
