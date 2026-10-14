'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none overflow-hidden opacity-[0.03]">
        <span className="text-[140px] sm:text-[220px] font-black uppercase text-slate-900 tracking-wider">
          ABOUT
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Signature Experience Box (Iconic element from reference) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-indigo-600 p-7 sm:p-9 text-white shadow-2xl shadow-indigo-600/30 overflow-hidden">
              {/* Subtle geometric circles in background */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-xl" />
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-500/40 blur-lg" />

              <div className="flex h-full items-stretch gap-6">
                {/* Vertical Rotated Text Ribbon (matches reference) */}
                <div className="flex items-center justify-center border-r border-indigo-400/40 pr-5">
                  <span className="rotate-180 [writing-mode:vertical-rl] text-xs font-black tracking-[4px] uppercase text-indigo-200 select-none">
                    IBRAHIM SURYAJATI
                  </span>
                </div>

                {/* Main Content inside Box */}
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <span className="inline-block rounded-full bg-indigo-500/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#bef264]">
                      SE Student • Polinela
                    </span>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-7xl sm:text-8xl font-black tracking-tight text-white">
                        03
                      </span>
                      <span className="ml-1 text-3xl font-extrabold text-[#bef264]">+</span>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-indigo-400/30 pt-4">
                    <p className="text-lg font-bold text-white leading-tight">
                      Years of Coding &amp;
                    </p>
                    <p className="text-sm font-medium text-indigo-200">
                      Software Project Journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Stats & Signature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600">
              <span>— About Me</span>
            </div>

            {/* Headline */}
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Who is <span className="text-indigo-600">Ibrahim</span> Alexander Suryajati?
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Saya adalah mahasiswa program studi <strong className="text-slate-900 font-semibold">D4 Rekayasa Perangkat Lunak</strong> di Politeknik Negeri Lampung.
              Memiliki dedikasi tinggi pada perancangan antarmuka pengguna yang bersih dan interaktif serta pengembangan arsitektur web modern yang kokoh dan scalable.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
              Berpengalaman dalam pengembangan <span className="text-indigo-600 font-medium">Front-End (React, Next.js, TypeScript)</span>, desain sistem UI/UX di Figma, hingga perancangan API dan pemodelan basis data relasional.
            </p>

            {/* Stats Row (matches reference) */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-slate-100 py-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">15</span>
                  <span className="text-2xl font-bold text-indigo-600">+</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Project Completed
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">10</span>
                  <span className="text-2xl font-bold text-indigo-600">+</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Tech Stack Mastered
                </p>
              </div>
            </div>

            {/* Actions: Download CV + Handwritten Signature */}
            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Download CV Pill Button with Lime Circle Arrow */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white pl-6 pr-2.5 py-2.5 text-sm font-bold shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Download CV</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bef264] text-indigo-950 transition-transform group-hover:translate-y-0.5">
                  <Download size={16} strokeWidth={2.5} />
                </span>
              </a>

              {/* Signature Graphic (matches reference) */}
              <div className="flex flex-col">
                <span className="font-['Caveat',cursive] text-3xl sm:text-4xl font-bold text-slate-800 -rotate-3 select-none">
                  Ibrahim Suryajati
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Software Engineer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
