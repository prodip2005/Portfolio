'use client';

import React from 'react';

const Banner = () => {
  return (
    <section className="w-full relative h-[450px] md:h-[550px] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute -top-[1%] -left-[1%] w-[102%] h-[102%] object-cover z-0 shadow-inner"
      >
        <source src="/dragon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/20 dark:bg-black/50 z-10 transition-colors duration-300"></div>

      <div className="relative z-30 h-full flex items-center justify-center"></div>
    </section>
  );
};

export default Banner;
