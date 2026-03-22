"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import animationData from '../../../public/live-chatbot.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const GlobalLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        const timer = setTimeout(() => setIsLoading(false), 800);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-md z-[9999] transition-opacity duration-500">
          <div className="w-[300px] h-[300px]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      )}
      {children}
    </>
  );
};
