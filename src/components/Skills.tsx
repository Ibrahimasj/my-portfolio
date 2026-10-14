'use client';

import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Layout, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & Design';
}

const skills: Skill[] = [
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'RESTful API', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Figma & UI/UX', category: 'Tools & Design' },
  { name: 'Git & GitHub', category: 'Tools & Design' },
  { name: 'Docker', category: 'Tools & Design' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-slate-50/60 overflow-hidden border-y border-slate-100">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-indigo-600"
          >
            <span>— Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Technologies I Work With
          </motion.h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600">
            Kombinasi bahasa pemrograman, framework, dan tools yang saya gunakan untuk mewujudkan solusi digital.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-sm hover:shadow-md border border-slate-200/80 hover:border-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {skill.name}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
