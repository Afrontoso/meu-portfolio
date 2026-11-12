import { useState } from 'react';
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';
import { trajetoria } from '../data/portfolio';

const filtros = [
  { id: 'todos', rotulo: 'Tudo' },
  { id: 'trabalho', rotulo: 'Profissional' },
  { id: 'estudo', rotulo: 'Acadêmica' },
];

function Timeline() {
  const [filtro, setFiltro] = useState('todos');
  const itens = trajetoria.filter((t) => filtro === 'todos' || t.tipo === filtro);

  return (
    <section id="trajetoria" className="secao" data-bg="#170f2e" data-accent="#b38cff">
      <div className="container">
        <p className="secao__rotulo reveal">02 — Trajetória</p>
        <h2 className="secao__titulo reveal">Carreira e formação</h2>

        <div className="chips reveal" role="tablist">
          {filtros.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filtro === f.id}
              className={`chip ${filtro === f.id ? 'ativo' : ''}`}
              onClick={() => setFiltro(f.id)}
            >
              {f.rotulo}
            </button>
          ))}
        </div>

        <ol className="timeline">
          {itens.map((t) => (
            <li key={t.titulo + t.local} className="timeline__item">
              <span className="timeline__icone">
                {t.tipo === 'trabalho' ? <HiOutlineBriefcase /> : <HiOutlineAcademicCap />}
              </span>
              <div className="card timeline__card">
                <span className="timeline__periodo">{t.periodo}</span>
                <h3>{t.titulo}</h3>
                <p className="timeline__local">{t.local}</p>
                <p>{t.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
