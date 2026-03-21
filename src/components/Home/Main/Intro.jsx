import React from 'react';

const Intro = () => {
  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl transition-colors duration-300">
      {/* ছোট ট্যাগ অংশ - এখানে প্রাইমারি কালার ব্যবহার করা হয়েছে */}
      <span className="text-primary text-xs font-bold uppercase tracking-widest">
        CTF Player & Network Security Engineer
      </span>

      {/* মেইন টাইটেল */}
      <h1 className="text-4xl font-bold text-foreground mt-4">
        Hi, I'm Prodip Hore.
      </h1>

      {/* ডেসক্রিপশন */}
      <p className="text-gray-400 mt-6 leading-relaxed">
        A passionate CTF Player & Network Security Engineer specializing in
        cryptography, binary exploitation, and reverse engineering.
      </p>

      {/* স্কিল ট্যাগসমূহ */}
      <div className="flex flex-wrap gap-3 mt-6">
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          Palembang, Indonesia
        </span>
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          CTF & Network Engineering
        </span>
        <span className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
          GNU/Linux Enthusiast
        </span>
      </div>

      {/* অ্যাকশন বাটনসমূহ */}
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
