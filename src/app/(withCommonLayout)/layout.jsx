import Banner from '@/components/Home/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <Banner />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
