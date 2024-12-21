import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                
                <h2>Twitch</h2>

                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Descrip">Descripción</Link></li>
                    <li><Link to="/Cont">Contacto</Link></li>
                    <li><Link to="/Log">Login</Link></li>
                </ul>

            </footer>
        </>
    );
}