import React, { useState } from 'react';
import './Login.css';

/* JUAN MANUEL GRACIA CABRERA | 2-1 */

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <>
    <div className="containerLogin">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="inputs">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" placeholder="Usuario:" required/>
        </div>
        <div className="inputs">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Contraseña:" required/>
        </div>
        <button onClick={() => setUsername(username = '') && setPassword(password = '')} type="submit" className="login-button">Aceptar</button>
      </form>
    </div>
    </>
  );
}
