import Intro from '@/components/Home/Main/Intro';
import SideContact from '@/components/Home/SideContact';
import SideProfile from '@/components/Home/SideProfile';
import Visitors from '@/components/Home/Visitors';
import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* বাম পাশের সাইডবার - যা ব্যানারের ওপর উঠে যাবে */}
        <aside className="w-full lg:w-[320px] relative z-10">
          <div className="-mt-20 lg:-mt-24 space-y-6 lg:sticky lg:top-24">
            <SideProfile />
            <SideContact />
            <Visitors />
          </div>
        </aside>

        {/* মাঝখানের মেইন কন্টেন্ট - এটিও ব্যানারের ওপর উঠে যাবে */}
        <main className="w-full lg:flex-1 space-y-8 relative z-10 -mt-10 lg:-mt-24">
          <Intro /> {/* এখানে আপনার মেইন সেকশনটি বসানো হলো */}
          {/* ভবিষ্যতে এখানে Achievements এবং Projects যোগ করতে পারবেন */}
          {/* <Achievements /> */}
          {/* <Projects /> */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
