import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>Pokedex Rutas</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/gen1">Gen1</Link>
                </li>
                <li>
                    <Link to="/gen2">Gen2</Link>
                </li>
                <li>
                    <Link to="/gen3">Gen3</Link>
                </li>
                
                <li>
                    <Link to="/digimon">Digimon</Link>
                </li>


            </ul>
        </nav>
    )
}
