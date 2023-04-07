import {Link} from "react-router-dom";

import './NotFound.scss'
export const NotFound = () => {
    return <div className='body-component-wrapper not-found-container'>
        <h1>404</h1>
        <h2>Oops! Nie znaleziono strony!</h2>
        <Link to='/' className='rescue-link'>Powrót na stronę glówną</Link>
    </div>
}
