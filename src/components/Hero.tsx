'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tickerItems = [
    'Web Development',
    'UI/UX Design',
    'Software Architecture',
    'RESTful APIs',
    'Next.js & React',
    'TypeScript',
    'Responsive Design',
    'Database Systems',
    'Polinela RPL',
  ];

  return (
    <section id="home" className="relative pt-32 pb-0 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white">
      {/* Background Soft Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-indigo-100/60 via-blue-50/30 to-transparent blur-3xl" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-100/40 blur-2xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-indigo-100/40 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Header Text */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-slate-500 uppercase"
          >
            <span className="text-indigo-600">—</span> Hello <span className="text-indigo-600">—</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            I&apos;m{' '}
            <span className="relative inline-block text-indigo-600">
              Ibrahim,
              <svg
                className="absolute -bottom-2 left-0 w-full text-[#84cc16]"
                viewBox="0 0 250 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C50 3 150 2 247 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-slate-900">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
          >
            Mahasiswa Rekayasa Perangkat Lunak Politeknik Negeri Lampung yang berfokus pada pengembangan{' '}
            <span className="font-semibold text-indigo-600">Front-End </span>,{' '}
            <span className="font-semibold text-indigo-600">UI/UX Design</span>, dan arsitektur sistem web interaktif.
          </motion.p>
        </div>

        {/* Hero Visual Area with Central Cutout & Geometric Shapes */}
        <div className="relative mt-8 sm:mt-12 flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg flex flex-col items-center">
            
            {/* Tilted Blue Card behind portrait (matches Jenny UI reference) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -7 }}
              transition={{ duration: 0.7, delay: 0.15, type: 'spring' }}
              className="absolute top-12 h-[340px] sm:h-[420px] w-[260px] sm:w-[320px] rounded-3xl bg-gradient-to-tr from-indigo-600 via-indigo-600 to-blue-500 shadow-2xl shadow-indigo-600/30 -z-10"
            />

            {/* Subtle secondary layer */}
            <div className="absolute top-16 h-[320px] sm:h-[400px] w-[250px] sm:w-[310px] rounded-3xl bg-indigo-100/70 -rotate-2 -z-20" />

            {/* Rotating "HIRE ME" Badge (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-4 sm:-right-8 z-20"
            >
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center">
                {/* Rotating SVG with curved text */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <path
                      id="textPathCircle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="fill-slate-900 text-[10px] font-bold tracking-[2px] uppercase">
                      <textPath href="#textPathCircle" startOffset="0%">
                        • HIRE ME • HIRE ME • AVAILABLE NOW •
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Badge Core */}
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900 text-[#bef264] shadow-lg">
                  <Sparkles size={18} className="animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Floating Left Pill: Social proof & stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-20 rounded-2xl bg-white/95 p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md border border-slate-100"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="text-base font-extrabold text-indigo-600">15+</span>
                <span>Proyek Selesai</span>
              </div>
              <div className="mt-1.5 flex items-center -space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-[10px] font-bold text-white shadow-sm">
                  IA
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-[10px] font-bold text-white shadow-sm">
                  JS
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-bold text-white shadow-sm">
                  PL
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#bef264] text-[10px] font-bold text-indigo-950 shadow-sm">
                  +
                </div>
              </div>
            </motion.div>

            {/* Floating Right Pill: Focus Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute right-0 sm:-right-10 bottom-24 z-20 rounded-full bg-white/95 px-4 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.1)] backdrop-blur-md border border-slate-100 flex items-center gap-2"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Star size={13} fill="currentColor" />
              </div>
              <span className="text-xs font-bold text-slate-800">UI/UX &amp; Front-End</span>
            </motion.div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-[280px] sm:w-[340px] pt-6 flex justify-center"
            >
              <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-[36px] sm:rounded-[42px] border-4 border-white shadow-2xl bg-slate-900/10">
                <Image
                  src="/ibra.jpeg"
                  alt="Ibrahim Ahsan Suryajati"
                  fill
                  priority
                  className="object-cover object-[50%_35%] filter contrast-[1.02]"
                />
              </div>
            </motion.div>

            {/* Hero CTA Action Pill Buttons (Right below / overlapping bottom of photo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative -mt-6 z-30 flex items-center gap-3 sm:gap-4"
            >
              {/* Primary Pill with Lime Arrow Badge */}
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white pl-6 pr-2 py-2 text-sm font-bold shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Portfolio</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bef264] text-indigo-950 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </button>

              {/* Secondary Pill */}
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 px-6 py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Hire Me</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Banner (Signature Lime Green Strip from Reference) */}
      <div className="relative mt-16 sm:mt-20 overflow-hidden bg-[#bef264] py-3.5 sm:py-4 shadow-inner border-y border-[#a3e635]">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="mx-6 text-sm sm:text-base font-extrabold tracking-wide uppercase text-indigo-950">
                {item}
              </span>
              <span className="text-indigo-900/60 font-bold text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
