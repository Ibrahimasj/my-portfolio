'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: 'SIPANELA',
    description:
      'Sistem Pelaporan Anti-Narkoba Lingkungan Kampus — Platform web untuk memfasilitasi pelaporan dan monitoring aktivitas anti-narkoba di lingkungan kampus secara anonim dan aman.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API untuk manajemen tugas dengan fitur autentikasi JWT, role-based access control, dan real-time notification.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    repo: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'Dashboard admin untuk e-commerce dengan fitur analytics, manajemen produk, dan visualisasi data penjualan interaktif.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    demo: '#',
    repo: '#',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      {/* Ambient Mesh Glow behind Projects */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-gradient-to-r from-blue-900/20 via-sky-900/10 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-950/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky-400 shadow-sm shadow-blue-500/10">
            <FolderGit2 size={13} />
            Portofolio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proyek{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Pilihan
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Beberapa proyek yang sudah saya kembangkan, mulai dari sistem
            informasi interaktif hingga arsitektur API backend yang scalable.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative flex flex-col rounded-2xl border border-blue-500/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Subtle top border gradient accent on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Title */}
              <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-sky-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-800/40 bg-blue-950/40 px-3 py-1 text-[11px] font-medium text-sky-300 transition-colors group-hover:border-blue-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex items-center gap-4 border-t border-blue-500/10 pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-sky-300"
                  >
                    <ExternalLink size={15} />
                    <span>Demo</span>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-sky-300"
                  >
                    <GitHubIcon size={15} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
