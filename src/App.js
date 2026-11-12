import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useActiveSection, useReveal } from './hooks/useScrollEffects';
import { perfil } from './data/portfolio';

function App() {
  const ativa = useActiveSection();
  useReveal();

  return (
    <>
      <Navbar ativa={ativa} />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="rodape">
        <div className="container">
          © {new Date().getFullYear()} {perfil.nome} · Feito com React
        </div>
      </footer>
    </>
  );
}

export default App;
