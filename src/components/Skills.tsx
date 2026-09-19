'use client';

import { motion } from 'framer-motion';

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
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Keahlian Teknis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Teknologi dan tools yang saya gunakan secara aktif dalam
            pengembangan perangkat lunak.
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
              className="group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-6 text-center transition-all hover:border-emerald-500/30 hover:bg-zinc-900 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <span className="text-base font-semibold text-white transition-colors group-hover:text-emerald-400">
                {skill.name}
              </span>
              <span className="mt-1.5 rounded-full bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-500 transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-400/80">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
