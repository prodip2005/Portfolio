'use client';

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="w-full relative h-[450px] md:h-[550px] overflow-hidden">
      <Image
        src="/Naruto2.jpg"
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

    
    </section>
  );
};

export default Banner;
