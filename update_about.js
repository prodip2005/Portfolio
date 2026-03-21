const fs = require('fs');

const content = `import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-12 relative z-10 -mt-20 lg:-mt-24">
      {/* Intro Section */}
      <div className="bg-card/90 backdrop-blur-md border border-primary-border/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
        <div className="mb-8">
          <h4 className="text-primary text-[13px] font-bold uppercase tracking-widest mb-1.5">
            About
          </h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Prodip Hore
          </h1>
          <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
            <p>
              Hey there! I'm <span className="font-bold text-foreground">Prodip Hore</span> from
              the vibrant land of Bangladesh. 🇧🇩
            </p>
            <p>
              I'm a passionate tech enthusiast with a strong background in web
              development and design. I love exploring new technologies,
              contributing to open-source projects, and creating engaging content.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6" style={{ color: 'var(--primary-color)' }}>
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
            Education
          </h2>
          <ul className="space-y-4 text-foreground/80 text-[15px]">
            <li className="flex flex-col">
              <span className="font-bold text-foreground">
                B.Sc. in Computer Science
              </span>
              <span className="text-sm opacity-70">
                University Name (2024-Ongoing)
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-foreground">
                Computer & Network Engineering
              </span>
              <span className="text-sm opacity-70">
                High School Diploma (2019-2022)
              </span>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6" style={{ color: 'var(--primary-color)' }}>
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground/80 text-[15px]">
            <div>
              <h4 className="font-bold text-foreground mb-2">Languages</h4>
              <p className="text-sm opacity-80">
                JavaScript, TypeScript, React, Next.js, Python, C++
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Tools</h4>
              <p className="text-sm opacity-80">
                Git, Docker, VS Code, Figma, Postman
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6" style={{ color: 'var(--primary-color)' }}>
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></span>
            Experience
          </h2>
          <div className="space-y-6 text-foreground/80 text-[15px]">
            <div className="relative pl-6 border-l-2 border-primary-border/30">
              <div
                className="absolute w-3 h-3 rounded-full -left-[7px] top-1"
                style={{ backgroundColor: 'var(--primary-color)' }}
              ></div>
              <h4 className="font-bold text-foreground">Web Developer Intern</h4>
              <p className="text-xs mb-2 opacity-60">
                Company Name | 2025-Present
              </p>
              <p className="text-sm opacity-80">
                Assisting in building scalable web applications and optimizing UI
                performance.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-primary-border/30">
              <div
                className="absolute w-3 h-3 rounded-full -left-[7px] top-1 opacity-50"
                style={{ backgroundColor: 'var(--primary-color)' }}
              ></div>
              <h4 className="font-bold text-foreground">Freelance Developer</h4>
              <p className="text-xs mb-2 opacity-60">2022-2024</p>
              <p className="text-sm opacity-80">
                Developed custom solutions for various clients focusing on
                automation and data management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
`;

fs.writeFileSync('src/app/(withCommonLayout)/about/page.jsx', content);
