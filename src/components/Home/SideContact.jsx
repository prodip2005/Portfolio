import React from 'react';
import { FiExternalLink, FiMail } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const SideContact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      username: '@eliottophelia',
      link: '#',
      icon: <FaGithub className="text-white" />,
      bgColor: 'bg-gray-800',
    },
    {
      name: 'Twitter',
      username: '@eliottophelia',
      link: '#',
      icon: <FaTwitter className="text-[#1DA1F2]" />,
      bgColor: 'bg-[#1DA1F2]/10',
    },
    {
      name: 'LinkedIn',
      username: '@eliottophelia',
      link: '#',
      icon: <FaLinkedin className="text-[#0077B5]" />,
      bgColor: 'bg-[#0077B5]/10',
    },
    {
      name: 'Discord',
      username: '@eliottophelia',
      link: '#',
      icon: <FaDiscord className="text-[#5865F2]" />,
      bgColor: 'bg-[#5865F2]/10',
    },
  ];

  return (
    <div className="bg-card/90 backdrop-blur-md p-6 rounded-3xl border border-gray-800 mt-6 transition-all duration-300 shadow-xl">
      <h4 className="text-primary font-bold mb-6 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary rounded-full"></span>
        <span className="tracking-wide">Contact</span>
      </h4>

      <a
        href="mailto:contact@rei.my.id"
        className="mb-8 p-4 bg-background/50 rounded-2xl border border-gray-700/50 flex items-center gap-4 hover:border-primary/50 transition-all group"
      >
        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
          <FiMail className="text-primary text-xl" />
        </div>
        <div>
          <p className="text-[10px] text-primary uppercase font-black tracking-[0.15em] mb-0.5">
            Email Me
          </p>
          <p className="text-sm text-foreground font-medium">
            contact@rei.my.id
          </p>
        </div>
      </a>

      <div className="space-y-5">
        <p className="text-[11px] text-gray-500 uppercase font-bold tracking-widest ml-1">
          Social Connect
        </p>

        <div className="grid gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-gray-700/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl ${social.bgColor} transition-transform group-hover:scale-110`}
                >
                  {social.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-200 font-semibold group-hover:text-primary transition-colors">
                    {social.name}
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {social.username}
                  </p>
                </div>
              </div>
              <FiExternalLink className="text-gray-600 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContact;
