import './assets/error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className='page-404-main'>
            <h2 className='message-not-found'>404</h2>
            <p>Oups! la page que vous demandez n'existe pas.</p>
            <Link to="/">Retour à la page d'accueil</Link>
        </main>
    )
}

export default Error