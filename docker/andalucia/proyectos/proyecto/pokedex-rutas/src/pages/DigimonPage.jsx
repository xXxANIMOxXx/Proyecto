import { useEffect, useState } from "react";

function getRandomIndexes(total, amount = 10) {
  const indexes = new Set();
  while (indexes.size < amount) {
    indexes.add(Math.floor(Math.random() * total));
  }
  return [...indexes];
}

export function DigimonPage() {  // 👈 IMPORTANTE
  const [digimonList, setDigimonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDigimon = () => {
    setLoading(true);

    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => {
        const randomIndexes = getRandomIndexes(data.length, 10);
        const randomDigimon = randomIndexes.map((i) => data[i]);
        setDigimonList(randomDigimon);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando digimon:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadDigimon();
  }, []);

  if (loading) return <p>Cargando Digimon...</p>;

  return (
    <div>
      <h2>Digimon aleatorios</h2>

      <button
        onClick={loadDigimon}
        style={{ marginBottom: "1rem" }}
      >
        Volver a cargar 10 aleatorios
      </button>

      <div className="pokemon-grid">
        {digimonList.map((digi, index) => (
          <div key={index} className="pokemon-card">
            <h3>{digi.name}</h3>
            <img src={digi.img} alt={digi.name} />
            <p>Nivel: {digi.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
