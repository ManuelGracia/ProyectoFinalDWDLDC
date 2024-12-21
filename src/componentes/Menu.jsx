import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
            <a href="" className="nav-link"><Link to="/">Inicio</Link></a>
            <a href="" className="nav-link"><Link to="/Descrip">Descripción</Link></a>
            <a href="" className="nav-link"><Link to="/Cont">Contacto</Link></a>
            <a href="" className="nav-link"><Link to="/Log">Login</Link></a>
        
        </>

    );
}

