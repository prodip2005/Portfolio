'use client';

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
      className={`group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 border ${
        isPrimary
          ? 'bg-primary/10 border-primary/30 hover:bg-primary/15 hover:scale-[1.02]'
          : 'bg-background hover:bg-card/80 border-gray-800 hover:border-primary/40 hover:scale-[1.02] shadow-sm'
      }`}
    >
      <div
        className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
          isPrimary
            ? 'bg-primary text-white shadow-lg'
            : 'bg-gray-800/80 text-gray-300 group-hover:bg-primary/20 group-hover:text-primary'
        }`}
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
        {subValue && (
          <p className="text-xs text-foreground/60 mt-0.5">{subValue}</p>
        )}
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
