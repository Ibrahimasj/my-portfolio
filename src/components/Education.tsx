'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  status: string;
  isCurrent: boolean;
  desc: string;
  highlights: string[];
  tags: string[];
}

const educations: ExperienceItem[] = [
  {
    title: 'D4 Rekayasa Perangkat Lunak',
    organization: 'Politeknik Negeri Lampung (Polinela)',
    location: 'Bandar Lampung, Indonesia',
    period: '2024 – Sekarang',
    status: 'Semester 5 • Aktif',
    isCurrent: true,
    desc: 'Mendalami kurikulum rekayasa perangkat lunak secara komprehensif mulai dari perancangan sistem, arsitektur data, hingga implementasi modern front-end dan arsitektur aplikasi.',
    highlights: [
      'Fokus utama pada Front-End Development, UI/UX Design, dan Rekayasa Perangkat Lunak.',
      'Menerapkan prinsip clean code, modular architecture, dan design system.',
      'Mengembangkan aplikasi web berbasis tim dengan metodologi Agile/Scrum.',
    ],
    tags: ['Front-End Dev', 'UI/UX Design', 'Software Engineering', 'Next.js'],
  },
  {
    title: 'MIPA (Matematika & Ilmu Pengetahuan Alam)',
    organization: 'SMAN 7 Bandar Lampung',
    location: 'Bandar Lampung, Indonesia',
    period: '2021 – 2024',
    status: 'Lulus',
    isCurrent: false,
    desc: 'Membangun fondasi logika berpikir komputasional, eksplorasi dasar algoritma pemrograman, dan sains terapan sebagai landasan kuat menuju perkuliahan teknik informatika.',
    highlights: [
      'Mempelajari dasar logika komputasi dan problem solving algoritma.',
      'Aktif dalam kegiatan akademik dan teknologi sekolah.',
    ],
    tags: ['Logika & Algoritma', 'Dasar Pemrograman', 'Problem Solving'],
  },
];

const workExperiences: ExperienceItem[] = [
  {
    title: 'Lead Front-End & UI/UX Designer',
    organization: 'Proyek Kampus SIPANELA (Polinela)',
    location: 'Bandar Lampung',
    period: '2024 – Sekarang',
    status: 'Project Lead',
    isCurrent: true,
    desc: 'Memimpin perancangan UI/UX dan implementasi frontend untuk Sistem Pelaporan Anti-Narkoba Lingkungan Kampus dengan fokus pada kerahasiaan data dan kemudahan penggunaan.',
    highlights: [
      'Merancang wireframe, flow pengguna, dan interactive design system di Figma.',
      'Mengembangkan antarmuka responsif menggunakan Next.js, React, TypeScript, dan Tailwind CSS.',
      'Menghubungkan frontend ke backend REST API secara aman dan real-time.',
    ],
    tags: ['Next.js', 'Figma', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    title: 'Independent Web Developer',
    organization: 'Freelance & Personal Projects',
    location: 'Remote',
    period: '2023 – Sekarang',
    status: 'Ongoing',
    isCurrent: true,
    desc: 'Mengerjakan berbagai proyek pembuatan website, REST API, dashboard interaktif, dan eksplorasi teknologi fullstack modern untuk berbagai kebutuhan sistem informasi.',
    highlights: [
      'Membangun RESTful API dengan otentikasi JWT dan arsitektur database relasional.',
      'Mengembangkan dashboard admin analytics interaktif dengan visualisasi data.',
      'Menerapkan Git workflow dan containerization dengan Docker.',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

  const items = activeTab === 'education' ? educations : workExperiences;

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-slate-50/60 overflow-hidden">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden opacity-[0.03]">
        <span className="text-[120px] sm:text-[180px] font-black uppercase text-slate-900 tracking-wider">
          EXPERIENCE
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600"
          >
            <span>— Education &amp; Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            My Education &amp; Work Experience
          </motion.h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600">
            Jejak akademis dan pengalaman proyek yang membentuk kompetensi teknis saya dalam rekayasa perangkat lunak.
          </p>

          {/* Pill Tab Selector (matches Jenny UI reference) */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('education')}
              className={`group flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
              }`}
            >
              <GraduationCap
                size={18}
                className={activeTab === 'education' ? 'text-[#bef264]' : 'text-slate-400 group-hover:text-indigo-600'}
              />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('work')}
              className={`group flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
              }`}
            >
              <Briefcase
                size={18}
                className={activeTab === 'work' ? 'text-[#bef264]' : 'text-slate-400 group-hover:text-indigo-600'}
              />
              <span>Work &amp; Projects</span>
            </button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="mt-12 sm:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl bg-white p-7 sm:p-9 shadow-md shadow-slate-200/60 border border-slate-200/70 transition-all duration-300 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Icon Avatar */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        {activeTab === 'education' ? (
                          <GraduationCap size={22} />
                        ) : (
                          <Briefcase size={22} />
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm sm:text-base font-semibold text-slate-700">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* Status Pill Badge */}
                    <div className="self-start sm:self-auto">
                      {item.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 px-3.5 py-1 text-xs font-bold text-indigo-700">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
                          </span>
                          {item.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                    <div className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
                      <Calendar size={14} className="text-indigo-600" />
                      <span>{item.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-indigo-600"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
