import { TESTREACT_backend } from 'declarations/TESTREACT_backend';
import React, { useState, useEffect } from 'react';
import '../styles/consultaAlumnos.css';

function ConsultaAlumnos() {
  const [detecciones, setDetecciones] = useState([]);

  useEffect(() => {
    const fetchDeteccionesData = async () => {
      try {
        const response = await TESTREACT_backend.fetchDeteccionesData();
        const data = JSON.parse(response);
        if (data && data.clase) {
          // Agregar la nueva detección al principio del arreglo
          setDetecciones([data, ...detecciones]);
        } else {
          console.error('El formato de los datos no es el esperado:', data);
        }
      } catch (error) {
        console.error('Error al obtener los datos de la detección:', error.message);
      }
    };

    // Llamar a fetchDeteccionesData al cargar la página y luego cada 10 segundos
    fetchDeteccionesData();
    const interval = setInterval(fetchDeteccionesData, 10000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [detecciones]); // Agregar detecciones como dependencia para que se actualice cuando cambie

  return (
    <div className="alumnos-table-container">
      <h1 className="table-heading">Últimas detecciones en tu colmena:</h1>
      <table className="alumnos-table">
        <thead>
          <tr>
            <th>Clase</th>
            <th>Objetos detectados</th>
            <th>Fecha</th>
            <th>Cámara</th>
          </tr>
        </thead>
        <tbody>
          {detecciones.map((deteccion, index) => (
            <tr key={index}>
              <td>{deteccion.clase}</td>
              <td>{deteccion.objetos_detectados}</td>
              <td>{deteccion.fecha}</td>
              <td>{deteccion.camara}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultaAlumnos;





