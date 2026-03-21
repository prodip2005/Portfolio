import React from 'react';

const Collaboration = () => {
  return (
    <div className="mt-8 space-y-8">
      <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300">
        <div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Collaboration
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-1">
            Let's build together
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            I'm always open to collaborating on exciting projects.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2 rounded-xl text-sm font-bold border border-primary/20 transition-all">
            Contact
          </button>
          <button className="bg-gray-800/50 hover:bg-gray-700 text-gray-300 px-6 py-2 rounded-xl text-sm font-bold border border-gray-700 transition-all">
            GitHub
          </button>
        </div>
      </section>

    </div>
  );
};

export default Collaboration;
