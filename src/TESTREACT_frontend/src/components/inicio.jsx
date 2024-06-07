import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicioStyles.css'; // Esta es la ruta relativa correcta desde inicio.jsx a inicioStyles.css



function Inicio() {
  return (
    <div className="main-content">
      <img src="./PLANTEC.png" alt="Logo" className="logo" />
      <div className="welcome-message">Bienvenidos a Gakubo, la gestión de alumnos descentralizada</div>
      <Link to="/consultar" className="nav-link"><button className="button">Consultar Alumnos</button></Link>
      <Link to="/cargar" className="nav-link"><button className="button">Cargar Alumnos</button></Link>
    </div>
  );
}

export default Inicio;