import { useEffect, useState } from 'react'

export function PokemonCard({ id }) {
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

                if (!res.ok) {
                    throw new Error('Error al cargar el Pokémon')
                }

                const data = await res.json()

                const p = {
                    numero: data.id,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    imgJuego: data.sprites.front_default,
                    imgCvg: data.sprites.other.dream_world.front_default,
                    nombre: data.name,
                    experiencia: data.base_experience,
                    hp: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    especial: data.stats[3].base_stat,
                }

                setPokemon(p)
            } catch (err) {
                console.error(err)
                setError(true)
            }
        }

        fetchPokemon()
    }, [id])

    if (error) {
        return (
            <div className="pokemon-card error">
                <p>Error al cargar el Pokémon (id: {id})</p>
            </div>
        )
    }

    if (!pokemon) {
        return (
            <div className="pokemon-card">
                <p>Cargando Pokémon (id: {id})...</p>
            </div>
        )
    }

    return (
        <div className="pokemon-card">
            <h3>
                #{pokemon.numero} - {pokemon.nombre}
            </h3>
            <img src={pokemon.img} alt={pokemon.nombre} />
            <p>Experiencia base: {pokemon.experiencia}</p>
            <p>
                HP: {pokemon.hp} | Ataque: {pokemon.ataque} | Defensa: {pokemon.defensa}
            </p>
        </div>
    )
}
