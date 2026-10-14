'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Globe, ArrowRight, ArrowUpRight, Layers } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    desc: 'Merancang antarmuka aplikasi yang intuitif, estetis, dan berorientasi pada kepuasan pengguna menggunakan Figma dan design system modern.',
    icon: Layout,
    tag: 'Figma & Prototype',
  },
  {
    id: 2,
    title: 'Frontend Development',
    desc: 'Mengubah desain antarmuka menjadi website interaktif, responsif, dan performa tinggi menggunakan React, Next.js, dan Tailwind CSS.',
    icon: Globe,
    tag: 'React & Next.js',
  },
  {
    id: 3,
    title: 'Software & API Architecture',
    desc: 'Merancang arsitektur backend scalable, RESTful API terstruktur, serta pemodelan database relasional dan dokumentasi sistem yang rapi.',
    icon: Smartphone,
    tag: 'Node.js & Database',
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number>(1);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#4338ca] text-white overflow-hidden">
      {/* Giant Ghost Watermark Typography (matches reference "SERVICES") */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
        <span className="text-[120px] sm:text-[180px] lg:text-[230px] font-black tracking-widest text-white/[0.04] uppercase translate-y-10">
          SERVICES
        </span>
      </div>

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-indigo-900/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#bef264]"
            >
              <span>— Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            >
              My Services
            </motion.h2>
          </div>

          {/* Top Right "View All Services" Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#bef264] hover:bg-[#a3e635] text-indigo-950 pl-3 pr-5 py-2 text-xs sm:text-sm font-bold shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-95"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-950 text-[#bef264] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
              <span>Hubungi Saya</span>
            </button>
          </motion.div>
        </div>

        {/* 3 Arch-Topped Cards Grid (Exact signature shape from Reference) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const isActive = activeCard === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onMouseEnter={() => setActiveCard(service.id)}
                className={`group relative flex flex-col items-center text-center rounded-t-[90px] rounded-b-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-2xl shadow-indigo-950/40 -translate-y-2'
                    : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md hover:-translate-y-1'
                }`}
              >
                {/* Top Arch Circular Icon */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 shadow-inner'
                      : 'bg-white/10 text-white group-hover:scale-105'
                  }`}
                >
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                {/* Service Tag */}
                <span
                  className={`mt-6 inline-block rounded-full px-3.5 py-1 text-xs font-semibold ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-white/10 text-indigo-100'
                  }`}
                >
                  {service.tag}
                </span>

                {/* Title */}
                <h3
                  className={`mt-4 text-2xl font-bold tracking-tight ${
                    isActive ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed ${
                    isActive ? 'text-slate-600' : 'text-indigo-100/80'
                  }`}
                >
                  {service.desc}
                </p>

                {/* Bottom Link Action */}
                <div className="mt-8 pt-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'text-indigo-600 group-hover:translate-x-1'
                        : 'text-[#bef264] group-hover:translate-x-1'
                    }`}
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
