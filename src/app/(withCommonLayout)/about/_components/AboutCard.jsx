'use client';

import React from 'react';

const AboutCard = ({ title, children }) => {
  return (
    <section className="bg-card/40 backdrop-blur-md border border-primary-border/20 rounded-3xl p-8 mb-8 transition-all duration-500 shadow-xl">
      {title && (
        <h2
          className="text-2xl font-bold mb-6 flex items-center gap-3"
          style={{ color: 'var(--primary-color)' }}
        >
          <span
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: 'var(--primary-color)' }}
          ></span>
          {title}
        </h2>
      )}
      <div className="text-foreground/80 space-y-4 leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
};

export default AboutCard;
