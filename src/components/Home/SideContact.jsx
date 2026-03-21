import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const SideContact = () => {
  const socialLinks = [
    { name: 'GitHub', username: '@eliottophelia', link: '#' },
    { name: 'Twitter', username: '@eliottophelia', link: '#' },
    { name: 'LinkedIn', username: '@eliottophelia', link: '#' },
    { name: 'Discord', username: '@eliottophelia', link: '#' },
  ];

  return (
    <div className="bg-card/90 backdrop-blur-md p-6 rounded-3xl border border-gray-800 mt-6 transition-colors duration-300">
      <h4 className="text-primary font-bold mb-5 flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span> Contact
      </h4>

      <div className="mb-6 p-4 bg-background rounded-2xl border border-gray-700">
        <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">
          Email
        </p>
        <p className="text-sm text-foreground">contact@rei.my.id</p>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          Social Links
        </p>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="flex items-center justify-between group"
          >
            <div>
              <p className="text-sm text-gray-300 font-medium group-hover:text-foreground">
                {social.name}
              </p>
              <p className="text-xs text-gray-500">{social.username}</p>
            </div>
            <FiExternalLink className="text-gray-600 group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideContact;
