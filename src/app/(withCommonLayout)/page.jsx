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

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <aside className="w-full lg:w-[320px] relative z-10">
          <div className="-mt-20 lg:-mt-24 space-y-6 lg:sticky lg:top-24">
            <SideProfile />
            <SideContact />
            <Visitors />
          </div>
        </aside>

        <main className="w-full lg:flex-1 space-y-8 relative z-10 -mt-10 lg:-mt-24">
          <Intro />
          <Skills />
          <Education/>
          <Achievement />
          <Projects />
          <Experience />
          <Collaboration />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
