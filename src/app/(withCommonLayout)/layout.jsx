import Banner from '@/components/Home/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { FadeIn } from '@/components/shared/FadeIn';

const Layout = ({ children }) => {
  return (
    <div className="relative bg-background flex flex-col min-h-screen">
      {/* Navbar সবার উপরে থাকবে */}
      <Navbar />

      {/* Banner সেকশন */}
      <div className="relative z-0">
        <FadeIn delay={0.1} direction="none"><Banner /></FadeIn>
      </div>

      {/* Main Content: 
          এখানে relative এবং z-10 ব্যবহার করা হয়েছে যাতে 
          children-এর ভেতর থাকা নেগেটিভ মার্জিনওয়ালা কার্ডগুলো 
          ব্যানারের ওপরে ভেসে ওঠে।
      */}
      <main className="grow relative z-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
