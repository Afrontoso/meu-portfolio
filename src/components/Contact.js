import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDocumentDownload } from 'react-icons/hi';
import { perfil } from '../data/portfolio';

function Contact() {
  const canais = [
    { icone: <HiOutlineMail />, rotulo: 'E-mail', valor: perfil.email, href: `mailto:${perfil.email}` },
    { icone: <FaLinkedin />, rotulo: 'LinkedIn', valor: 'in/victorleandro', href: perfil.linkedin },
    { icone: <FaGithub />, rotulo: 'GitHub', valor: '@Afrontoso', href: perfil.github },
  ];

  return (
    <section id="contato" className="secao contato" data-bg="#240d1c" data-accent="#ff7aa8">
      <div className="container">
        <p className="secao__rotulo reveal">05 — Contato</p>
        <h2 className="secao__titulo contato__titulo reveal">
          Vamos construir <span className="gradiente">algo juntos?</span>
        </h2>
        <p className="contato__texto reveal">
          Tem um projeto, uma vaga ou só quer trocar uma ideia? Me chama por qualquer um dos canais abaixo.
        </p>
        <div className="contato__canais">
          {canais.map((c) => (
            <a
              key={c.rotulo}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="card canal reveal"
            >
              <span className="canal__icone">{c.icone}</span>
              <span>
                <small>{c.rotulo}</small>
                <strong>{c.valor}</strong>
              </span>
            </a>
          ))}
        </div>
        {perfil.curriculo && (
          <a href={perfil.curriculo} className="btn btn--primario reveal" download>
            <HiOutlineDocumentDownload /> Baixar currículo
          </a>
        )}
      </div>
    </section>
  );
}

export default Contact;
