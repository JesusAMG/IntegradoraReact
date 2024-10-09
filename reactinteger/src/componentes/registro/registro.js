import React from 'react';
import './registro.css';

function Registro() {
  return (
    <div className="registro-container">
      <h1 className="registro-title">Registro</h1>
      <p className="registro-login-link">
        ¿Ya tiene una cuenta? <a href="#">Inicie Sesión</a>
      </p>
      <form className="registro-form">
        <label>
          Nombre de usuario *
          <input 
            type="text" 
            placeholder="Ingrese su usuario" 
          />
        </label>
        <label>
          Dirección de correo electrónico *
          <input 
            type="email" 
            placeholder="Ingrese su email" 
          />
        </label>
        <label>
          Cree su contraseña *
          <input 
            type="password" 
            placeholder="Mínimo 8 caracteres" 
          />
        </label>
        <label>
          Confirme su contraseña *
          <input 
            type="password" 
            placeholder="Las contraseñas deben coincidir" 
          />
        </label>
        <button 
          type="submit" 
          className="registro-submit-button"
        >
          Registrese
        </button>
      </form>
    </div>
  );
}

export default Registro;