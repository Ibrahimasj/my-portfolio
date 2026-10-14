'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
    >
      <nav
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled
            ? 'rounded-full bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl border border-slate-200/80 py-2.5 px-6'
            : 'rounded-full bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.04)] backdrop-blur-md border border-slate-200/50 py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with reference twin parallelograms */}
          <button
            onClick={() => handleClick('#home')}
            className="group flex items-center gap-2.5 text-left transition-transform hover:scale-105"
          >
            <div className="flex items-center -space-x-1">
              <span className="h-6 w-3 -skew-x-12 rounded-sm bg-indigo-600 shadow-sm" />
              <span className="h-6 w-3 -skew-x-12 rounded-sm bg-[#84cc16] shadow-sm translate-y-1" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Ibraa<span className="text-indigo-600">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`relative px-4 py-1.5 text-sm font-semibold transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-indigo-600 font-bold'
                        : 'text-slate-600 hover:text-indigo-600'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-indigo-50 border border-indigo-100/80 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleClick('#contact')}
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden pt-4 pb-2 border-t border-slate-100 mt-3"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => handleClick(link.href)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-600 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <button
                    onClick={() => handleClick('#contact')}
                    className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md"
                  >
                    Contact Me
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
