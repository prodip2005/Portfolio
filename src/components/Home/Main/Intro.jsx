"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [mainInfo, setMainInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMainInfo = async () => {
      try {
        const res = await fetch('/api/maininfo');
        if (res.ok) {
          const data = await res.json();
          setMainInfo(data);
        }
      } catch (error) {
        console.error("Failed to fetch main info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMainInfo();
  }, []);

  if (isLoading) { return null; }

  // Helper arrays for dynamic titles based on user preferences in future
  const defaultTitles = ["MERN Stack Developer", "Competitive Programmer", "ML Enthusiast"];

  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl transition-colors duration-300">
      <span className="text-primary text-xs font-bold uppercase tracking-widest">
        MERN Stack Developer & Competitive Programmer
      </span>

      <h1 className="text-4xl font-bold text-foreground mt-4">
        Hi, I&apos;m {mainInfo?.name || "Prodip Hore"}.
      </h1>

      <p className="text-gray-400 mt-6 leading-relaxed whitespace-pre-line">
        {mainInfo?.description || "A passionate MERN Stack Developer. Currently building robust web applications and learning new technologies."}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {defaultTitles.map((title, idx) => (
          <span key={idx} className="px-3 py-1 bg-background text-gray-400 text-xs rounded-lg border border-gray-700">
            {title}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-10">
        <Link href={'/projects'}>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition shadow-lg">
            View Projects
          </button>
        </Link>
        <Link href={'/about'}>
          <button className="text-gray-400 font-medium hover:text-primary transition">
            About Me
          </button>
        </Link>
        <Link href={'/contact'}>
          <button className="text-gray-400 font-medium hover:text-primary transition">
            Get in Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
