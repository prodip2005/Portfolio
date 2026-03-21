import React from 'react';
import { Clock } from 'lucide-react';
import { ContactCard, ContactItem } from './_components/ContactCard';

const ContactPage = () => {
  const socialLinks = [
    {
      iconName: 'github',
      label: 'GitHub',
      value: 'shadowomonarch',
      subValue: 'Open source contributions',
      href: 'https://github.com/shadowomonarch',
    },
    {
      iconName: 'twitter',
      label: 'Twitter',
      value: '@prodiphore',
      subValue: 'Tech updates & insights',
      href: 'https://twitter.com/prodiphore',
    },
    {
      iconName: 'linkedin',
      label: 'LinkedIn',
      value: 'prodiphore',
      subValue: 'Professional networking',
      href: 'https://linkedin.com/in/prodiphore',
    },
    {
      iconName: 'discord',
      label: 'Discord',
      value: '@shadowomonarch',
      subValue: 'Real-time discussions',
      href: 'https://discord.com/users/shadowomonarch',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <ContactCard>
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-primary text-[13px] font-bold uppercase tracking-widest mb-1.5">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Let&apos;s connect and <br /> collaborate together.
          </h1>
          <p className="text-foreground/80 leading-relaxed max-w-2xl text-[15px]">
            I&apos;m always open to discussing web development, network engineering, open-source projects,
            and new technologies. Reach out through any of these channels below!
          </p>
        </div>

        {/* Actionable Contact Items Grouped properly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Direct Contact Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
               <span className="w-1 h-5 rounded-full bg-primary" style={{ backgroundColor: 'var(--primary-color)' }}></span>
               Direct Contact
            </h3>
            <ContactItem
              iconName="mail"
              label="Primary Email"
              value="prodiphore@gmail.com"
              subValue="Best for collaboration inquiries"
              href="mailto:prodiphore@gmail.com"
              isPrimary={true}
            />
          </div>

          {/* Social Links Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
               <span className="w-1 h-5 rounded-full bg-primary" style={{ backgroundColor: 'var(--primary-color)' }}></span>
               Social & Professional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <ContactItem key={index} {...link} />
              ))}
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-14 flex items-center justify-center gap-3 py-4 px-8 bg-card/50 backdrop-blur-md rounded-2xl border border-gray-800 w-fit mx-auto shadow-sm">
          <Clock size={16} className="text-primary" />
          <p className="text-sm text-foreground/70">
            Typical response time:{' '}
            <span className="text-foreground font-bold">24-48 hours</span>
          </p>
        </div>
      </ContactCard>
    </div>
  );
};

export default ContactPage;
