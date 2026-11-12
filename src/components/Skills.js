import { habilidades } from '../data/portfolio';

function Skills() {
  return (
    <section id="habilidades" className="secao" data-bg="#05221f" data-accent="#3ee0b5">
      <div className="container">
        <p className="secao__rotulo reveal">03 — Habilidades</p>
        <h2 className="secao__titulo reveal">Com o que eu trabalho</h2>
        <div className="habilidades">
          {habilidades.map((h) => (
            <div key={h.grupo} className="card reveal">
              <h3 className="habilidades__grupo">{h.grupo}</h3>
              <ul className="tags">
                {h.itens.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
