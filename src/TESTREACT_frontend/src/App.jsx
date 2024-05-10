// src/testreact_frontend/App.jsx

import React, { cloneElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConsultaAlumnos from './components/ConsultaAlumnos';
import CargaAlumnos from './components/CargaAlumnos';
import Inicio from './components/inicio';
import './styles/commonStyles.css';

function Nav() {
  return (
    <nav className="nav-bar" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: 500 }}>
      <div style={{ fontSize: 20, display: 'flex', marginTop: -800 }}>
        <Link to="/" className="nav-link"><img style={{ width: 100, height: 100, paddingRight: 100 }} src="./logo.png" /></Link>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div style={{ paddingLeft: 30 }}>
              Inicio
            </div>
            <div style={{ paddingLeft: 40 }}>
              Abejas Parasitadas
            </div>
            <div style={{ paddingLeft: 40, paddingRight: 30, }}>
              Acerca de
            </div>
          </div>
          <div style={{ paddingLeft: 100 }}>
            Iniciar Sesión
          </div>
        </div>
      </div>

    </nav>
  );
}

function App() {
  return (
    <Router>
      <Nav /> {/* Esto hará que el nav aparezca en todas las páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consultar" element={<ConsultaAlumnos />} />
        <Route path="/cargar" element={<CargaAlumnos />} />
      </Routes>
    </Router>
  );
}

export default App;