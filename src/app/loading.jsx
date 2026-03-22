"use client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../../public/live-chatbot.json";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5 dark:bg-black/80 backdrop-blur-sm z-[9999] transition-all duration-300">
      <div className="w-[300px] h-[300px]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
