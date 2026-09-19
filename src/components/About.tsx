'use client';

import { motion } from 'framer-motion';
import { Server, Layers, Database, Workflow, User } from 'lucide-react';

const focuses = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Membangun REST API dan layanan backend yang scalable menggunakan Node.js, Express, dan arsitektur yang bersih.',
  },
  {
    icon: Layers,
    title: 'Fullstack Development',
    desc: 'Menguasai frontend (React/Next.js) hingga backend, membangun aplikasi web modern yang cepat dan end-to-end.',
  },
  {
    icon: Workflow,
    title: 'Software Architecture',
    desc: 'Merancang arsitektur perangkat lunak yang maintainable, mengikuti prinsip SOLID, clean code, dan design patterns.',
  },
  {
    icon: Database,
    title: 'Pemodelan Sistem',
    desc: 'Mendesain database relasional, ERD, dan diagram UML untuk mendokumentasikan kebutuhan sistem secara presisi.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      {/* Subtle section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[380px] w-[550px] rounded-full bg-blue-900/10 blur-[130px]" />
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
            <User size={13} />
            Tentang Saya
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fokus &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Keahlian Teknis
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Sebagai mahasiswa RPL, saya berdedikasi mengembangkan keterampilan
            di bidang software engineering dengan fokus mendalam pada Front-End,
            arsitektur sistem, dan UI/UX Design yang intuitif.
          </p>
        </motion.div>

        {/* Focus cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {focuses.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative rounded-2xl border border-blue-500/10 bg-slate-900/50 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Corner accent glow on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/0 blur-2xl transition-all duration-500 group-hover:bg-sky-500/10" />

              <div className="mb-5 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-3.5 text-sky-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-500/20 group-hover:text-sky-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-sky-200">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
