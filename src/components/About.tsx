'use client';

import { motion } from 'framer-motion';
import { Server, Layers, Database, Workflow } from 'lucide-react';

const focuses = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Membangun REST API dan layanan backend yang scalable menggunakan Node.js, Express, dan arsitektur yang bersih.',
  },
  {
    icon: Layers,
    title: 'Fullstack Development',
    desc: 'Menguasai frontend (React/Next.js) hingga backend, membangun aplikasi web end-to-end.',
  },
  {
    icon: Workflow,
    title: 'Software Architecture',
    desc: 'Merancang arsitektur perangkat lunak yang maintainable, mengikuti prinsip SOLID dan design patterns.',
  },
  {
    icon: Database,
    title: 'Pemodelan Sistem',
    desc: 'Mendesain database relasional, ERD, dan diagram UML untuk mendokumentasikan kebutuhan sistem.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
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
            Tentang Saya
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Fokus &amp; Keahlian Teknis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Sebagai mahasiswa RPL semester 5, saya berdedikasi mengembangkan
            keterampilan di bidang software engineering dengan fokus pada
            pengembangan backend dan arsitektur perangkat lunak.
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
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-emerald-500/30 hover:bg-zinc-900"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
