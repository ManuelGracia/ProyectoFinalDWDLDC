import './Header.css';
import Menu from './Menu';

export default function Header() {
    return (
        <>
            <header>
                <a href="#" className="Logo">
                    <img src="https://www.freepnglogos.com/uploads/stack-twitch-stream-schedule-png-5.png" alt="Logo de Twitch" />
                    <h2 className="NombreEmpresa">Twitch</h2>
                </a>
                <div>
                    <nav>
                        <Menu />
                    </nav>
                </div>
            </header>
        </>
    );
}