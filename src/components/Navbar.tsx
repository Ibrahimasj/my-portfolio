'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-5 left-1/2 z-50 w-[94%] max-w-4xl -translate-x-1/2"
    >
      <nav
        className={`relative transition-all duration-300 ${
          mobileOpen
            ? 'rounded-3xl border border-blue-500/25 bg-slate-950/90 shadow-2xl shadow-blue-950/60 backdrop-blur-2xl'
            : scrolled
            ? 'rounded-full border border-blue-500/20 bg-slate-950/80 shadow-lg shadow-blue-950/40 backdrop-blur-xl'
            : 'rounded-full border border-blue-500/15 bg-slate-950/60 shadow-md shadow-blue-950/30 backdrop-blur-md hover:border-blue-400/30'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-2.5 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => handleClick('#home')}
            className="group flex items-center gap-1 text-lg font-bold tracking-tight text-white transition-transform hover:scale-105"
          >
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              &lt;Ibraa/&gt;
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-sky-300'
                        : 'text-slate-300 hover:text-sky-400'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full border border-blue-400/30 bg-blue-500/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-blue-500/20 bg-blue-950/30 p-2 text-slate-300 transition-colors hover:border-blue-400/40 hover:text-sky-400 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-blue-500/15 px-5 pb-4 pt-2"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href} className="py-1">
                    <button
                      onClick={() => handleClick(link.href)}
                      className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'border border-blue-400/30 bg-blue-500/15 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                          : 'text-slate-300 hover:bg-slate-900/60 hover:text-sky-400'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
