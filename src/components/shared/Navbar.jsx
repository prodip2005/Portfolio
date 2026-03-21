'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Home, Moon, Palette, Sun, Monitor, RotateCcw } from 'lucide-react';

const Navbar = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [hue, setHue] = useState(340);

  const dropdownRef = useRef(null);
  const pickerRef = useRef(null);

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
    document.documentElement.style.setProperty('--primary-hue', h);
    document.documentElement.style.setProperty(
      '--primary-color',
      `hsl(${h}, 100%, 65%)`,
    );
  };

  const handleThemeChange = (t) => {
    setTheme(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
    setIsThemeOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50  px-4">
      <div className="max-w-5xl mx-auto bg-card backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center justify-between shadow-xl">
        <div
          className="flex items-center gap-2 font-bold cursor-pointer"
          style={{ color: 'var(--primary-color)' }}
        >
          <div
            className="p-1.5 rounded-lg"
            style={{ backgroundColor: `hsla(${hue}, 100%, 65%, 0.1)` }}
          >
            <Home size={18} />
          </div>
          <span className="text-[15px] tracking-tight text-white">
            Prodip Hore
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-300">
          <a href="#" className="hover:text-primary transition-all">
            Home
          </a>
          <a href="#" className="hover:text-primary transition-all">
            About
          </a>
          <a href="#" className="hover:text-primary transition-all">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-gray-400 relative">
          <div ref={pickerRef} className="relative flex items-center">
            <button
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
              className="hover:text-white transition-colors"
            >
              <Palette size={18} />
            </button>
            {isColorPickerOpen && (
              <div className="absolute right-0 top-12 w-64 bg-[#1e1a1d] border border-white/10 rounded-2xl p-4 shadow-2xl z-50">
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(e) => {
                    setHue(e.target.value);
                    applyColor(e.target.value);
                    localStorage.setItem('primary-hue', e.target.value);
                  }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                  }}
                />
              </div>
            )}
          </div>

          <div ref={dropdownRef} className="relative flex items-center">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 rounded-lg hover:text-white transition-all"
            >
              {theme === 'light' ? (
                <Sun size={18} />
              ) : theme === 'system' ? (
                <Monitor size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
            {isThemeOpen && (
              <div className="absolute right-0 top-12 w-32 bg-[#1e1a1d] border border-white/10 rounded-xl shadow-2xl z-50 p-1">
                {['light', 'dark', 'system'].map((t) => (
                  <button
                    key={t}
                    onClick={() => handleThemeChange(t)}
                    className={`flex w-full items-center gap-3 px-3 py-2 text-xs rounded-lg capitalize ${theme === t ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-white/5'}`}
                  >
                    {t === 'light' ? (
                      <Sun size={14} />
                    ) : t === 'system' ? (
                      <Monitor size={14} />
                    ) : (
                      <Moon size={14} />
                    )}{' '}
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
