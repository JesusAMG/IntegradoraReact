import React from 'react';
import logo from './logo/logo.png';
import './logoUni.css';

function LogoUni() {
  return (
    <div className="logo-container">
      <img 
        src={logo} 
        alt="Logo" 
        className="logo-image"
      />
      <h2 className="logo-title">Med & Track</h2>
      <p className="logo-subtitle">Su compañero de salud</p>
    </div>
  );
}

export default LogoUni;