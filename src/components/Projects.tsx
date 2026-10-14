'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'SIPANELA',
    category: 'Design Mobile App',
    description:
      'Sistem Pelaporan Anti-Narkoba Lingkungan Kampus Politeknik Negeri Lampung. Platform web yang dirancang untuk memfasilitasi pelaporan dan monitoring aktivitas anti-narkoba secara aman, anonim, dan real-time.',
    tags: ['Figma'],
    demo: '#',
    repo: 'https://github.com/Ibrahimasj/ibr4aa',
    featured: true,
  },
  {
    title: 'Tanitu Keren',
    category: 'UI/UX Design',
    description:
      'Website untuk memudahkan para petani dalam transaksi jual beli hasil tani.',
    tags: ['Figma'],
    repo: 'https://github.com/Ibrahimasj/ibr4aa',
    featured: false,
  },
  {
    title: 'E-Commerce Admin Dashboard',
    category: 'UI/UX & Frontend',
    description:
      'Dashboard admin interaktif untuk platform e-commerce dengan visualisasi analytics penjualan, manajemen stok produk, dan layout responsif dengan dark/light mode.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Figma'],
    demo: '#',
    repo: 'https://github.com/Ibrahimasj/ibr4aa',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 select-none overflow-hidden opacity-[0.03]">
        <span className="text-[140px] sm:text-[220px] font-black uppercase text-slate-900 tracking-wider">
          PROJECTS
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600"
            >
              <span>— Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Featured Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="https://github.com/Ibrahimasj/ibr4aa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-sm hover:shadow transition-all"
            >
              <GitHubIcon size={16} />
              <span>Explore GitHub</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-slate-50/70 hover:bg-white p-7 sm:p-8 border border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Top Row: Category & Featured Pill */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="rounded-full bg-[#bef264] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-indigo-950">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-300/80 px-4 py-2 text-xs font-bold transition-all hover:scale-105"
                    >
                      <GitHubIcon size={13} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
