import React from 'react';

const Visitors = () => {
  return (
    <div className="bg-card/90 backdrop-blur-md p-6 rounded-3xl border border-gray-800 mt-6 text-center transition-colors duration-300">
      <h4 className="text-primary font-bold mb-5 flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span> Visitors
      </h4>

      <div className="flex justify-center items-center gap-1 opacity-80 bg-background/50 py-4 rounded-2xl border border-gray-700/50">
        <img
          src="https://komarev.com/ghpvc/?username=your-github-username&color=blue&style=flat-square"
          alt="visitor count"
          className="rounded shadow-sm"
        />
      </div>

      <div className="flex justify-center gap-2 mt-4 grayscale opacity-50">
        <div className="w-8 h-8 bg-gray-800 rounded-md border border-gray-700"></div>
        <div className="w-8 h-8 bg-gray-800 rounded-md border border-gray-700"></div>
        <div className="w-8 h-8 bg-gray-800 rounded-md border border-gray-700"></div>
      </div>
    </div>
  );
};

export default Visitors;
