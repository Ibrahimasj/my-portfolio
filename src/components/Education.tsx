'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'current' | 'completed';
  statusText: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const educations: EducationItem[] = [
  {
    degree: 'D4 Rekayasa Perangkat Lunak',
    institution: 'Politeknik Negeri Lampung (Polinela)',
    location: 'Bandar Lampung, Indonesia',
    period: '2024 – Sekarang',
    status: 'current',
    statusText: 'Semester 5 • Aktif',
    description:
      'Mendalami rekayasa perangkat lunak komprehensif mulai dari perancangan arsitektur, basis data, hingga implementasi modern front-end dan back-end development.',
    highlights: [
      'Fokus: Front-End Development, UI/UX Design, dan Software Engineering.',
      'Menerapkan best practices clean code, modular architecture, dan design systems.',
      'Mengembangkan aplikasi web responsif dan sistem informasi berbasis tim.',
    ],
    tags: ['Front-End Development', 'UI/UX Design', 'Software Engineering', 'Web Development'],
  },
  {
    degree: '[MIPA]',
    institution: '[SMAN 7 BANDAR LAMPUNG]',
    location: 'Bandar Lampung, Indonesia',
    period: '[2021] – [2024]',
    status: 'completed',
    statusText: 'Lulus',
    description:
      'Membangun fondasi logika berpikir komputasional, dasar-dasar pemrograman, serta pemahaman matematika dan sains sebagai pijakan studi lanjut.',
    highlights: [
      'Mempelajari dasar algoritma dan pemecahan masalah komputasi.',
      'Aktif mengikuti kegiatan akademik dan eksplorasi teknologi informasi.',
    ],
    tags: ['Logika & Algoritma', 'Dasar Pemrograman', 'Problem Solving'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            <Sparkles size={16} />
            Riwayat Pendidikan
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Pendidikan Formal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Jejak akademis yang membentuk fondasi keahlian teknis dan dedikasi saya dalam dunia rekayasa perangkat lunak.
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mt-16"
        >
          {/* Vertical timeline spine */}
          <div className="absolute top-4 bottom-4 left-4 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-500/40 to-zinc-800 sm:left-8" />

          {/* Education list */}
          <div className="space-y-12">
            {educations.map((edu, index) => {
              const isCurrent = edu.status === 'current';

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline icon node */}
                  <div className="absolute left-4 -translate-x-1/2 sm:left-8">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform duration-300 hover:scale-110 sm:h-11 sm:w-11 ${isCurrent
                        ? 'border-emerald-400 bg-zinc-950 text-emerald-400 shadow-lg shadow-emerald-500/20'
                        : 'border-zinc-700 bg-zinc-950 text-zinc-400'
                        }`}
                    >
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="ml-12 w-full sm:ml-20">
                    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900 hover:shadow-xl hover:shadow-emerald-500/5 sm:p-8">
                      {/* Header row: Degree & Status badge */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                            {edu.degree}
                          </h3>
                          <p className="mt-1 text-base font-medium text-zinc-200">
                            {edu.institution}
                          </p>
                        </div>

                        {/* Status badge */}
                        <div className="self-start sm:self-auto">
                          {isCurrent ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                              </span>
                              {edu.statusText}
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-400">
                              {edu.statusText}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Meta information: Period & Location */}
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400 sm:text-sm">
                        <div className="inline-flex items-center gap-1.5 text-zinc-300">
                          <Calendar size={15} className="text-emerald-400" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-zinc-400">
                          <MapPin size={15} className="text-zinc-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400 sm:text-sm">
                          {edu.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-emerald-400"
                              />
                              <span className="leading-normal">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tags / Topics */}
                      {edu.tags && edu.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {edu.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-zinc-800/70 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors group-hover:border group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5 group-hover:text-emerald-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
