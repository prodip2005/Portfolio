const fs = require('fs');

const contentPage = `import React from 'react';
import { Clock } from 'lucide-react';
import { ContactCard, ContactItem } from './_components/ContactCard';

const ContactPage = () => {
  const socialLinks = [
    {
      iconName: 'github',
      label: 'GitHub',
      value: 'shadowomonarch',
      subValue: 'Open source contributions',
      href: 'https://github.com/shadowomonarch',
    },
    {
      iconName: 'twitter',
      label: 'Twitter',
      value: '@prodiphore',
      subValue: 'Tech updates & insights',
      href: 'https://twitter.com/prodiphore',
    },
    {
      iconName: 'linkedin',
      label: 'LinkedIn',
      value: 'prodiphore',
      subValue: 'Professional networking',
      href: 'https://linkedin.com/in/prodiphore',
    },
    {
      iconName: 'discord',
      label: 'Discord',
      value: '@shadowomonarch',
      subValue: 'Real-time discussions',
      href: 'https://discord.com/users/shadowomonarch',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <ContactCard>
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-primary text-[13px] font-bold uppercase tracking-widest mb-1.5">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Let&apos;s connect and <br /> collaborate together.
          </h1>
          <p className="text-foreground/80 leading-relaxed max-w-2xl text-[15px]">
            I&apos;m always open to discussing web development, network engineering, open-source projects,
            and new technologies. Reach out through any of these channels below!
          </p>
        </div>

        {/* Actionable Contact Items Grouped properly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Direct Contact Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
               <span className="w-1 h-5 rounded-full bg-primary" style={{ backgroundColor: 'var(--primary-color)' }}></span>
               Direct Contact
            </h3>
            <ContactItem
              iconName="mail"
              label="Primary Email"
              value="prodiphore@gmail.com"
              subValue="Best for collaboration inquiries"
              href="mailto:prodiphore@gmail.com"
              isPrimary={true}
            />
          </div>

          {/* Social Links Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
               <span className="w-1 h-5 rounded-full bg-primary" style={{ backgroundColor: 'var(--primary-color)' }}></span>
               Social & Professional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <ContactItem key={index} {...link} />
              ))}
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-14 flex items-center justify-center gap-3 py-4 px-8 bg-card/50 backdrop-blur-md rounded-2xl border border-gray-800 w-fit mx-auto shadow-sm">
          <Clock size={16} className="text-primary" />
          <p className="text-sm text-foreground/70">
            Typical response time:{' '}
            <span className="text-foreground font-bold">24-48 hours</span>
          </p>
        </div>
      </ContactCard>
    </div>
  );
};

export default ContactPage;
`;

const contentCard = `'use client';

import React from 'react';
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';

const IconMap = {
  mail: Mail,
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  discord: MessageSquare,
};

const ContactItem = ({ iconName, label, value, subValue, href, isPrimary }) => {
  const Icon = IconMap[iconName] || Mail;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={\`group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 border \${
        isPrimary
          ? 'bg-primary/10 border-primary/30 shadow-[0_0_15px_var(--primary-shade)] hover:bg-primary/15 hover:scale-[1.02]'
          : 'bg-background hover:bg-card/80 border-gray-800 hover:border-primary/40 hover:scale-[1.02] shadow-sm'
      }\`}
    >
      <div
        className={\`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 \${
          isPrimary ? 'bg-primary text-white shadow-lg' : 'bg-gray-800/80 text-gray-300 group-hover:bg-primary/20 group-hover:text-primary'
        }\`}
      >
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/50 mb-1">
          {label}
        </p>
        <h4 className="text-[16px] font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
          {value}
          {!isPrimary && (
            <ExternalLink
              size={14}
              className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
            />
          )}
        </h4>
        {subValue && <p className="text-xs text-foreground/60 mt-0.5">{subValue}</p>}
      </div>
    </a>
  );
};

const ContactCard = ({ children }) => (
  <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full transition-colors duration-300 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
    {children}
  </div>
);

export { ContactCard, ContactItem };
`;

fs.writeFileSync('src/app/(withCommonLayout)/contact/page.jsx', contentPage);
fs.writeFileSync('src/app/(withCommonLayout)/contact/_components/ContactCard.jsx', contentCard);
