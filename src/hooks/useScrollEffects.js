import { useEffect, useState } from 'react';

// Observa as seções da página: troca a cor de fundo/acento conforme a seção
// visível e devolve o id da seção ativa (para destacar o menu).
export function useActiveSection() {
  const [ativa, setAtiva] = useState('inicio');

  useEffect(() => {
    const secoes = document.querySelectorAll('section[data-bg]');
    const root = document.documentElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const { bg, accent } = entry.target.dataset;
          root.style.setProperty('--bg', bg);
          if (accent) root.style.setProperty('--accent', accent);
          setAtiva(entry.target.id);
        });
      },
      // Considera "ativa" a seção que cruza a faixa central da tela.
      { rootMargin: '-45% 0px -50% 0px' }
    );

    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return ativa;
}

// Anima a entrada dos elementos com a classe .reveal ao aparecerem na tela.
// Roda a cada render para pegar elementos novos (ex.: ao filtrar projetos).
export function useReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal:not(.visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
