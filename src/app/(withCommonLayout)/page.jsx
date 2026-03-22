import Achievement from '@/components/Home/Main/Achievement';
import Collaboration from '@/components/Home/Main/Collaboration';
import Education from '@/components/Home/Main/Education';
import Experience from '@/components/Home/Main/Experience';
import Intro from '@/components/Home/Main/Intro';
import Projects from '@/components/Home/Main/Projects';
import Skills from '@/components/Home/Main/Skills';
import SideContact from '@/components/Home/SideContact';
import SideProfile from '@/components/Home/SideProfile';
import Visitors from '@/components/Home/Visitors';
import React from 'react';
import { FadeIn } from '@/components/shared/FadeIn';
import HomeDataLoader from '@/components/shared/HomeDataLoader';

const HomePage = () => {
  return (
    <HomeDataLoader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <aside className="w-full lg:w-[320px] relative z-10">
            <div className="-mt-20 lg:-mt-24 space-y-6 lg:sticky lg:top-24">
              <FadeIn delay={0} direction="up"><SideProfile /></FadeIn>
              <FadeIn delay={0.2} direction="up"><SideContact /></FadeIn>
              <FadeIn delay={0.3} direction="up"><Visitors /></FadeIn>
            </div>
          </aside>

          <main className="w-full lg:flex-1 space-y-8 relative z-10 -mt-10 lg:-mt-24">
            <FadeIn delay={0.1} direction="up"><Intro /></FadeIn>
            <FadeIn delay={0.2} direction="up"><Skills /></FadeIn>
            <FadeIn delay={0.1} direction="up"><Education/></FadeIn>
            <FadeIn delay={0.2} direction="up"><Achievement /></FadeIn>
            <FadeIn delay={0.1} direction="up"><Projects /></FadeIn>
            <FadeIn delay={0.2} direction="up"><Experience /></FadeIn>
            <FadeIn delay={0.1} direction="up"><Collaboration /></FadeIn>
          </main>
        </div>
      </div>
    </HomeDataLoader>
  );
};

export default HomePage;
