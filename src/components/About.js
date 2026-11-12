import { sobre, numeros } from '../data/portfolio';

function About() {
  return (
    <section id="sobre" className="secao" data-bg="#0f1629" data-accent="#7c9cff">
      <div className="container sobre">
        <div>
          <p className="secao__rotulo reveal">01 — Sobre</p>
          <h2 className="secao__titulo reveal">Quem sou eu</h2>
          {sobre.map((p, i) => (
            <p key={i} className="sobre__texto reveal">
              {p}
            </p>
          ))}
        </div>
        <div className="sobre__numeros">
          {numeros.map((n) => (
            <div key={n.rotulo} className="card numero reveal">
              <strong className="gradiente">{n.valor}</strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
