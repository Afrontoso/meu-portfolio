import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiOutlineLocationMarker } from 'react-icons/hi';
import { perfil } from '../data/portfolio';

function Hero() {
  return (
    <section id="inicio" className="hero" data-bg="#0a0f1f" data-accent="#7c9cff">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__conteudo">
        <p className="hero__tag reveal">
          <span className="ponto-verde" /> Disponível para novos projetos
        </p>
        <h1 className="hero__titulo reveal">
          Olá, eu sou o <span className="gradiente">{perfil.nome.split(' ')[0]}</span>.
          <br />
          {perfil.cargo}.
        </h1>
        <p className="hero__resumo reveal">{perfil.resumo}</p>
        <p className="hero__local reveal">
          <HiOutlineLocationMarker /> {perfil.local}
        </p>
        <div className="hero__acoes reveal">
          <a href="#projetos" className="btn btn--primario">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn--secundario">
            Fale comigo
          </a>
          <div className="hero__sociais">
            <a href={perfil.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <a href="#sobre" className="hero__scroll" aria-label="Rolar para baixo">
        <HiArrowDown />
      </a>
    </section>
  );
}

export default Hero;
