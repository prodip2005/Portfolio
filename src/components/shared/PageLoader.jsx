"use client";
import dynamic from 'next/dynamic';
import React, { memo } from 'react';
import animationData from '../../../public/live-chatbot.json';

// Disable SSR for Lottie to prevent hydration errors and speed up initial render
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full">
      <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default memo(PageLoader);
