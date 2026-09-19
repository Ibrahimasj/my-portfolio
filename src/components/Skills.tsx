'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Git', category: 'Tool' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'REST API', category: 'Architecture' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[360px] w-[500px] rounded-full bg-blue-900/10 blur-[130px]" />
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
            <Cpu size={13} />
            Tech Stack
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Keahlian{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Teknis
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Teknologi dan tools yang saya gunakan secara aktif dalam
            pengembangan perangkat lunak berkualitas tinggi.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-blue-500/10 bg-slate-900/50 px-4 py-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Subtle hover background highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-sky-300">
                {skill.name}
              </span>
              <span className="mt-2 rounded-full border border-blue-800/40 bg-blue-950/40 px-3 py-0.5 text-[11px] font-medium text-sky-300 transition-all duration-200 group-hover:border-blue-700/60 group-hover:bg-blue-900/50 group-hover:text-sky-200">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
