import notFoundImage from '../assets/404.png'

export function NotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>404 - Página no encontrada</h2>
            <img
                src={notFoundImage}
                alt="Página no encontrada"
                style={{ maxWidth: '400px', width: '100%' }}
            />
        </div>
    )
}
