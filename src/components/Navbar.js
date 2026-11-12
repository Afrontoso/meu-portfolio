import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'trajetoria', rotulo: 'Trajetória' },
  { id: 'habilidades', rotulo: 'Habilidades' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'contato', rotulo: 'Contato' },
];

function Navbar({ ativa }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${rolou ? 'navbar--solida' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="logo" onClick={() => setAberto(false)}>
          <span className="logo__marca">VL</span>
          <span className="logo__nome">Victor Leandro</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <nav className={`navbar__links ${aberto ? 'aberto' : ''}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={ativa === l.id ? 'ativo' : ''}
              onClick={() => setAberto(false)}
            >
              {l.rotulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
