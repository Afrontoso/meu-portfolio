import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink, HiOutlinePhotograph } from 'react-icons/hi';
import { projetos, categorias } from '../data/portfolio';
import Lightbox from './Lightbox';

const img = (arquivo) => `${process.env.PUBLIC_URL}/projects/${arquivo}`;

function Capa({ projeto, onAbrir }) {
  if (!projeto.imagens?.length) {
    // Projetos sem print ganham uma capa gerada com as iniciais.
    const iniciais = projeto.nome
      .split(' ')
      .slice(0, 2)
      .map((p) => p[0])
      .join('');
    return (
      <div className="projeto__capa projeto__capa--vazia" aria-hidden="true">
        <span>{iniciais}</span>
      </div>
    );
  }

  return (
    <button className="projeto__capa" onClick={onAbrir} aria-label={`Ver prints de ${projeto.nome}`}>
      <img src={img(projeto.imagens[0])} alt={`Print do projeto ${projeto.nome}`} loading="lazy" />
      {projeto.imagens.length > 1 && (
        <span className="projeto__contador">
          <HiOutlinePhotograph /> {projeto.imagens.length}
        </span>
      )}
    </button>
  );
}

function Projects() {
  const [filtro, setFiltro] = useState('todos');
  const [galeria, setGaleria] = useState(null);

  const lista = projetos.filter((p) => filtro === 'todos' || p.categoria === filtro);

  return (
    <section id="projetos" className="secao" data-bg="#0d1424" data-accent="#ffb547">
      <div className="container">
        <p className="secao__rotulo reveal">04 — Projetos</p>
        <h2 className="secao__titulo reveal">O que eu já construí</h2>

        <div className="chips reveal" role="tablist">
          {Object.entries(categorias).map(([id, rotulo]) => (
            <button
              key={id}
              role="tab"
              aria-selected={filtro === id}
              className={`chip ${filtro === id ? 'ativo' : ''}`}
              onClick={() => setFiltro(id)}
            >
              {rotulo}
            </button>
          ))}
        </div>

        <div className="projetos">
          {lista.map((p) => (
            <article
              key={p.nome}
              className={`card projeto ${p.destaque && filtro === 'todos' ? 'projeto--destaque' : ''}`}
            >
              <Capa projeto={p} onAbrir={() => setGaleria(p)} />
              <div className="projeto__corpo">
                <span className="projeto__categoria">{categorias[p.categoria]}</span>
                <h3>{p.nome}</h3>
                <p>{p.descricao}</p>
                <ul className="tags tags--pequenas">
                  {p.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="projeto__links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <HiOutlineExternalLink /> Ver online
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <FaGithub /> Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {galeria && (
        <Lightbox
          titulo={galeria.nome}
          imagens={galeria.imagens.map(img)}
          onFechar={() => setGaleria(null)}
        />
      )}
    </section>
  );
}

export default Projects;
