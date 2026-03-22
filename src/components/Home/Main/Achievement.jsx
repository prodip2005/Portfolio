'use client';
import PageLoader from "@/components/shared/PageLoader";
import React from 'react';
import { useSharedData } from '@/hooks/useSharedData';
import Link from 'next/link';

const Achievement = () => {
    const { data: fullachievements, isLoading } = useSharedData('achievementData', async () => {
    const res = await fetch('/api/achievements');
    return await res.json();
  });
  
  const achievementsData = fullachievements ? fullachievements.slice(0, 3) : [];

  if (!isLoading && achievementsData.length === 0) {
    return null;
  }

  return (
    <section className="bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Achievements
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-1">
            Recent Competition Highlights
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            A few highlights from recent competitions. The rest lives in the
            full archive.
          </p>
        </div>
        <Link
          href="/achievements"
          className="text-gray-400 hover:text-primary text-xs font-semibold transition-colors"
        >
          View all achievements
        </Link>
      </div>

      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="bg-background/50 border border-gray-800 p-5 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-primary/80 font-bold border-b border-primary/30 pb-0.5">
                    {item.type}
                  </span>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {item.date}
                  </p>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-lg text-center">
                  <p className="text-primary font-bold text-sm leading-none">
                    {item.rank}
                  </p>
                  <p className="text-[8px] text-primary/60 uppercase font-bold tracking-tighter">
                    Rank
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-200 mb-6 group-hover:text-foreground transition-colors">
                {item.title}
              </h3>

              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">
                    Result
                  </p>
                  <p className="text-sm text-gray-300 font-semibold">
                    {item.result}
                  </p>
                </div>
                <button className="bg-gray-800/50 hover:bg-gray-700 text-gray-300 px-4 py-1.5 rounded-xl text-xs font-medium transition-all">
                  Writeup
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievement;
