import React from 'react';

const Intro = () => {
  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl transition-colors duration-300">
      <span className="text-primary text-xs font-bold uppercase tracking-widest">
        MERN Stack Developer & Competitive Programmer
      </span>

      <h1 className="text-4xl font-bold text-foreground mt-4">
        Hi, I'm Prodip Hore.
      </h1>

      <p className="text-gray-400 mt-6 leading-relaxed">
        A passionate MERN Stack Developer and Competitive Programmer. Currently
        studying Computer Science and Engineering (CSE) at Patuakhali Science
        and Technology University. My ultimate goal is to dive deep into Machine
        Learning while building robust web applications.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          Patuakhali, Bangladesh
        </span>
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          Web Dev & CP
        </span>
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          ML Enthusiast
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-10">
        <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition shadow-lg">
          View Projects
        </button>
        <button className="text-gray-400 font-medium hover:text-primary transition">
          About Me
        </button>
        <button className="text-gray-400 font-medium hover:text-primary transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Intro;
