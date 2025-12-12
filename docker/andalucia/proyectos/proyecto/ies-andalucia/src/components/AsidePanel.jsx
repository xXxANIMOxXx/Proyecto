import React from 'react';
import MarvelSelect from './MarvelSelect';

function AsidePanel() {
  return (
    <div>
      <h3 className="mb-3">Zona lateral</h3>

      {/* Select autocompletado Material UI */}
      <MarvelSelect />

      {/* Vídeo de YouTube */}
      <div className="mt-4">
        <h5>Vídeo sobre Andalucía</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/watch?v=oVyrkV1qoJY"
            title="Video de Andalucía"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AsidePanel;
