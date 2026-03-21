import React from 'react';
import { FiExternalLink, FiMail } from 'react-icons/fi';
import { FaGithub,  FaLinkedin, FaDiscord } from 'react-icons/fa';

const SideContact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      username: '@prodiphore',
      link: 'https://github.com/prodiphore',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      username: 'prodiphore',
      link: 'https://linkedin.com/in/prodiphore',
      icon: <FaLinkedin />,
    },
    {
      name: 'Discord',
      username: '@prodiphore',
      link: '#',
      icon: <FaDiscord />,
    },
  ];

  return (
    <div className="bg-card/40 backdrop-blur-xl p-6 rounded-[32px] border border-primary-border/10 mt-6 transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/5 group/main relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-[50px] -z-10 group-hover/main:bg-primary/10 transition-colors duration-500"></div>

      <h4 className="text-foreground font-bold mb-8 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-primary rounded-full shadow-[0_0_10px_var(--primary-color)]"></span>
        <span className="tracking-tight text-lg">Contact Me</span>
      </h4>

      {/* Email Section */}
      <a
        href="mailto:contact@prodiphore.id"
        className="mb-8 p-5 bg-primary/5 rounded-2xl border border-primary-border/10 flex items-center gap-4 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group/email"
      >
        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover/email:scale-110 transition-transform duration-300">
          <FiMail size={22} />
        </div>
        <div>
          <p className="text-[10px] text-primary uppercase font-bold tracking-[0.2em] mb-1">
            Email Me
          </p>
          <p className="text-[13px] text-foreground/80 font-medium group-hover/email:text-primary transition-colors">
            contact@prodiphore.id
          </p>
        </div>
      </a>

      <div className="space-y-6">
        <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-[0.2em] ml-1">
          Social Connect
        </p>

        <div className="grid gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-transparent hover:bg-primary/5 border border-transparent hover:border-primary-border/20 transition-all duration-300 group/link"
            >
              <div className="flex items-center gap-4">
                {/* Icons are now monochromatic (Foreground color) */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground/60 group-hover/link:bg-primary/10 group-hover/link:text-primary transition-all duration-300 text-xl">
                  {social.icon}
                </div>
                <div>
                  <p className="text-sm text-foreground/80 font-bold group-hover/link:text-primary transition-colors">
                    {social.name}
                  </p>
                  <p className="text-[11px] text-foreground/40 font-medium">
                    {social.username}
                  </p>
                </div>
              </div>
              <FiExternalLink
                className="text-foreground/20 group-hover/link:text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
                size={14}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContact;
