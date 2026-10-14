import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
