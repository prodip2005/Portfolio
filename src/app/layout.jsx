import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Prodip Hore | MERN Stack Developer & ML Enthusiast',
    template: '%s | Prodip Hore',
  },
  description:
    'Official portfolio of Prodip Hore. A MERN Stack Developer, Competitive Programmer, and Machine Learning Enthusiast studying CSE at Patuakhali Science and Technology University (PSTU).',

  keywords: [
    'Prodip Hore',
    'Prodip Hore PSTU',
    'Prodip Hore Portfolio',
    'MERN Stack Developer Bangladesh',
    'Patuakhali Science and Technology University',
    'CSE Student PSTU',
    'Machine Learning Engineer Bangladesh',
    'Competitive Programmer',
    'Next.js Developer',
    'React Developer',
    'Full Stack Developer Bangladesh',
  ],

  authors: [{ name: 'Prodip Hore', url: 'https://github.com/prodip2005' }],
  creator: 'Prodip Hore',
  publisher: 'Prodip Hore',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prodip-cse-21.vercel.app',
    title: 'Prodip Hore - Portfolio',
    description:
      'Building scalable web solutions and exploring intelligent systems. Check out my latest MERN and ML projects.',
    siteName: 'Prodip Hore Portfolio',
    images: [
      {
        url: 'https://i.ibb.co.com/gMRFWqxZ/2026-03-21-160000-hyprshot.png',
        width: 1200,
        height: 630,
        alt: 'Prodip Hore Portfolio Home',
      },
      {
        url: 'https://i.ibb.co.com/5x4vfvk7/2026-03-21-160017-hyprshot.png',
        width: 1200,
        height: 630,
        alt: 'Prodip Hore About Section',
      },
      {
        url: 'https://i.ibb.co.com/PZxdnnZb/2026-03-21-160036-hyprshot.png',
        width: 1200,
        height: 630,
        alt: 'Prodip Hore Projects',
      },
      {
        url: 'https://i.ibb.co.com/bg9y1Jgs/2026-03-21-160101-hyprshot.png',
        width: 1200,
        height: 630,
        alt: 'Prodip Hore Experience',
      },
      {
        url: 'https://i.ibb.co.com/z0rqYZF/2026-03-21-160205-hyprshot.png',
        width: 1200,
        height: 630,
        alt: 'Prodip Hore Contact',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prodip Hore | Full Stack Developer',
    description:
      'Exploring the intersection of Web Development and Machine Learning.',
    creator: '@prodiphore',
    images: ['https://i.ibb.co.com/gMRFWqxZ/2026-03-21-160000-hyprshot.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
