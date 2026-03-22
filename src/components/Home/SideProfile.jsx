"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaDiscord, FaGlobe } from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  discord: <FaDiscord />
};

const getIcon = (name) => {
  const lowercaseName = name.toLowerCase();
  for (const key in iconMap) {
    if (lowercaseName.includes(key)) {
      return iconMap[key];
    }
  }
  return <FaGlobe />;
};

const SideProfile = () => {
  const [data, setData] = useState({
    mainInfo: null,
    socials: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainRes, contactRes] = await Promise.all([
          fetch('/api/maininfo'),
          fetch('/api/contact')
        ]);

        setData({
          mainInfo: mainRes.ok ? await mainRes.json() : null,
          socials: contactRes.ok ? await contactRes.json() : []
        });
      } catch (error) {
        console.error("Failed to fetch side profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) { return null; }

  const { mainInfo, socials } = data;

  return (
    <div className="bg-card/90 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 shadow-lg transition-all duration-300">
      <div className="p-5 pb-0">
        <div className="aspect-square w-full rounded-3xl overflow-hidden border-2 border-primary/20 bg-gray-800/50">
          {mainInfo?.image ? (
            <Image
              src={mainInfo.image}
              alt={mainInfo?.name || "Profile"}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              width={500}
              height={500}
              priority
            />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-500">
               No Image
             </div>
          )}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground">
          {mainInfo?.name || ""}
        </h3>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-4">
          {mainInfo?.description || "No description available."}
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {socials && socials.length > 0 ? (
            socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 rounded-lg hover:text-primary transition-colors text-lg flex items-center justify-center"
                title={social.name}
              >
                {getIcon(social.name)}
              </a>
            ))
          ) : (
            <span className="text-xs text-gray-500">No social links</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
