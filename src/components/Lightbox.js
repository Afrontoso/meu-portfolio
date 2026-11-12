import { useCallback, useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

function Lightbox({ titulo, imagens, onFechar }) {
  const [indice, setIndice] = useState(0);
  const total = imagens.length;

  const anterior = useCallback(() => setIndice((i) => (i - 1 + total) % total), [total]);
  const proxima = useCallback(() => setIndice((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onFechar();
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') proxima();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onFechar, anterior, proxima]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={titulo} onClick={onFechar}>
      <div className="lightbox__conteudo" onClick={(e) => e.stopPropagation()}>
        <header className="lightbox__topo">
          <strong>{titulo}</strong>
          <span>
            {indice + 1} / {total}
          </span>
          <button onClick={onFechar} aria-label="Fechar">
            <HiX />
          </button>
        </header>
        <img src={imagens[indice]} alt={`${titulo} — print ${indice + 1}`} />
        {total > 1 && (
          <>
            <button className="lightbox__nav lightbox__nav--esq" onClick={anterior} aria-label="Anterior">
              <HiChevronLeft />
            </button>
            <button className="lightbox__nav lightbox__nav--dir" onClick={proxima} aria-label="Próxima">
              <HiChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
