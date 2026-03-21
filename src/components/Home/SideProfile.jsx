import Image from 'next/image';
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const SideProfile = () => {
  return (
    <div className="bg-card/90 backdrop-blur-md rounded-3xl  overflow-hidden border border-gray-800 shadow-lg transition-all duration-300">
      {/* ইমেজের জন্য প্যাডিং এবং গোল গোল বর্ডার */}
      <div className="p-5 pb-0">
        {' '}
        {/* উপরে এবং পাশে প্যাডিং */}
        <div className="aspect-square w-full rounded-3xl overflow-hidden border-2 border-primary/20">
          {/* border-primary/20 দিয়ে ইমেজের চারপাশে হালকা বর্ডার */}
          <Image
            src="https://i.ibb.co.com/RkfqzktR/190808987.jpg" // আপনার ইমেজ পাথ
            alt="Reidho Satria"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            // hover:scale-105 দিয়ে ইমেজে হোভার ইফেক্ট
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      {/* টেক্সট এবং সোশ্যাল লিঙ্ক সেকশন */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground">Prodip Hore</h3>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          A passionate CTF Player & Network Security Engineer specializing in
          cryptography, binary exploitation, and reverse engineering.
        </p>

        {/* সোশ্যাল লিঙ্ক */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="p-2.5 bg-gray-800 rounded-lg hover:text-primary transition-colors text-lg"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2.5 bg-gray-800 rounded-lg hover:text-primary transition-colors text-lg"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2.5 bg-gray-800 rounded-lg hover:text-primary transition-colors text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
