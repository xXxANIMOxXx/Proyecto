import { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'

function getRandomInt(min, max) {
    // ambos inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function GenerationPage({ minId, maxId, title }) {
    const [pokemonIds, setPokemonIds] = useState([])

    useEffect(() => {
        const ids = []
        for (let i = 0; i < 10; i++) {
            ids.push(getRandomInt(minId, maxId))
        }
        setPokemonIds(ids)
    }, [minId, maxId])

    return (
        <div>
            <h2>{title}</h2>
            <button
                onClick={() => {
                    const ids = []
                    for (let i = 0; i < 10; i++) {
                        ids.push(getRandomInt(minId, maxId))
                    }
                    setPokemonIds(ids)
                }}
                style={{ marginBottom: '1rem' }}
            >
                Volver a cargar 10 aleatorios
            </button>
            <div className="pokemon-grid">
                {pokemonIds.map((id, index) => (
                    <PokemonCard key={index} id={id} />
                ))}
            </div>
        </div>
    )
}
