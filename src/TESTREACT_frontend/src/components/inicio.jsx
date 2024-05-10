// src/testreact_frontend/components/Inicio.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicioStyles.css'; // Esta es la ruta relativa correcta desde inicio.jsx a inicioStyles.css



function Inicio() {
  return (
    <div className="main-content">
      <div className="welcome-message">Bienvenidos a Smart Honey</div>
      <Link to="/consultar" className="nav-link"><button className="button">Consultar Datos</button></Link>
      <Link to="/cargar" className="nav-link"><button className="button">Cargar Datos</button></Link>
    </div>
  );
}

export default Inicio;