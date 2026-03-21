'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Home, Moon, Palette, Sun, Monitor, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [hue, setHue] = useState(340);
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  const pickerRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedHue = localStorage.getItem('primary-hue') || 340;
    setTheme(savedTheme);
    setHue(savedHue);
    applyTheme(savedTheme);
    applyColor(savedHue);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsThemeOpen(false);
      if (pickerRef.current && !pickerRef.current.contains(event.target))
        setIsColorPickerOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyTheme = (t) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    if (t === 'system') {
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(system);
    } else root.classList.add(t);
  };

  const applyColor = (h) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-hue', h);
    root.style.setProperty('--primary-color', `hsl(${h}, 100%, 65%)`);
    root.style.setProperty('--primary-border', `hsla(${h}, 100%, 65%, 0.2)`);
    root.style.setProperty('--primary-shade', `hsla(${h}, 100%, 65%, 0.1)`);
  };

  const handleThemeChange = (t) => {
    setTheme(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
    setIsThemeOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4">
      <div className="max-w-5xl mx-auto bg-card backdrop-blur-xl border border-primary-border/30 px-6 py-3 rounded-b-2xl flex items-center justify-between shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 font-bold cursor-pointer group"
            style={{ color: 'var(--primary-color)' }}
          >
            <div
              className="p-1.5 rounded-lg transition-transform group-hover:scale-110"
              style={{ backgroundColor: `hsla(${hue}, 100%, 65%, 0.1)` }}
            >
              <Home size={18} />
            </div>
            <span className="text-[15px] tracking-tight text-foreground">
              Prodip Hore
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-all ${isActive ? 'text-primary font-bold drop-shadow-[0_0_8px_var(--primary-shade)] scale-105' : 'text-foreground/80 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      
        <div className="flex items-center gap-2 md:gap-4 text-foreground/70 relative">
          <div ref={pickerRef} className="relative flex items-center">
            <button
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
              className="hover:text-primary transition-colors p-2"
            >
              <Palette size={19} />
            </button>
            {isColorPickerOpen && (
              <div className="absolute right-0 top-14 w-72 bg-card backdrop-blur-2xl border border-primary-border rounded-2xl p-5 shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/70">
                    Theme Color
                  </p>
                  <div
                    className="w-4 h-4 rounded-full shadow-sm border border-foreground/10"
                    style={{ backgroundColor: `hsl(${hue}, 100%, 65%)` }}
                  />
                </div>
                <div className="grid grid-cols-6 gap-3 mb-5">
                  {[0, 30, 45, 120, 160, 210, 240, 270, 290, 310, 330, 340].map(
                    (presetHue) => (
                      <button
                        key={presetHue}
                        onClick={() => {
                          setHue(presetHue);
                          applyColor(presetHue);
                          localStorage.setItem('primary-hue', presetHue);
                        }}
                        className={`w-7 h-7 rounded-full transition-all ${hue == presetHue ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'opacity-80 hover:opacity-100'}`}
                        style={{
                          backgroundColor: `hsl(${presetHue}, 100%, 65%)`,
                        }}
                      />
                    ),
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(e) => {
                    const val = e.target.value;
                    setHue(val);
                    applyColor(val);
                    localStorage.setItem('primary-hue', val);
                  }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
                  }}
                />
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <div ref={dropdownRef} className="relative flex items-center">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 rounded-lg hover:text-primary transition-all"
            >
              {theme === 'light' ? (
                <Sun size={19} />
              ) : theme === 'system' ? (
                <Monitor size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>
            {isThemeOpen && (
              <div className="absolute right-0 top-14 w-36 bg-card backdrop-blur-2xl border border-primary-border rounded-xl shadow-2xl z-50 p-1.5 animate-in fade-in zoom-in duration-200">
                {['light', 'dark', 'system'].map((t) => (
                  <button
                    key={t}
                    onClick={() => handleThemeChange(t)}
                    className={`flex w-full items-center gap-3 px-3 py-2.5 text-xs rounded-lg capitalize transition-colors ${theme === t ? 'text-primary bg-primary/10 font-bold' : 'text-foreground/60 hover:bg-primary/5'}`}
                  >
                    {t === 'light' ? (
                      <Sun size={14} />
                    ) : t === 'system' ? (
                      <Monitor size={14} />
                    ) : (
                      <Moon size={14} />
                    )}
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm bg-card/90 backdrop-blur-2xl border border-primary-border/30 rounded-2xl p-2 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-40">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-primary/5 hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
