import React from 'react';
import ServiceCard from './ServiceCard';
import './MainSection.css';

function MainSection() {
  const cardsData = [
    {
      title: 'Formación Profesional',
      text: 'Ciclos formativos de grado medio y superior orientados al mundo laboral.',
      img: '/img/fp.jpg',
      bgColor: '#f8f9fa',
    },
    {
      title: 'Bachillerato',
      text: 'Itinerarios adaptados a tus objetivos universitarios o profesionales.',
      img: '/img/bachillerato.jpg',
      bgColor: '#e9ecef',
    },
    {
      title: 'Actividades Extraescolares',
      text: 'Talleres, deportes y proyectos culturales durante todo el curso.',
      img: '/img/actividades.jpg',
      bgColor: '#f8f9fa',
    },
  ];

  const galeriaAndalucia = [
    '/img/andalucia1.jpg',
    '/img/andalucia2.jpg',
    '/img/andalucia3.jpg',
    '/img/andalucia4.jpg',
    '/img/andalucia5.jpg',
    '/img/andalucia6.jpg',
  ];

  return (
    <div id="inicio">
      {/* Cards */}
      <section id="servicios">
        <h2 className="mb-4">Servicios del centro</h2>
        <div className="row">
          {cardsData.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              text={card.text}
              img={card.img}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </section>

      {/* Galería de Andalucía */}
      <section className="mt-5">
        <h2 className="mb-4">Galería de Andalucía</h2>
        <div className="row">
          {galeriaAndalucia.map((foto, index) => (
            <div className="col-6 col-md-4 mb-3" key={index}>
              <img
                src={foto}
                alt={`Andalucía ${index + 1}`}
                className="img-fluid galeria-foto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sección de contacto simple para el anchor #contacto */}
      <section id="contacto" className="mt-5">
        <h2>Contacto</h2>
        <p>Puedes contactar con el IES Andalucía para más información.</p>
      </section>
    </div>
  );
}

export default MainSection;
