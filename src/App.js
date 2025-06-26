import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/pages/HeroSection';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
// colocar o código abaixo no início do arquivo App.js, das rotas
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<HeroSection />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
} export default App;
