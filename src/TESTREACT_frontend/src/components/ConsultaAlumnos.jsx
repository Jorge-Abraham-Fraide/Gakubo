import { TESTREACT_backend } from 'declarations/TESTREACT_backend';
import React, { useState, useEffect } from 'react';
import '../styles/consultaAlumnos.css';

function ConsultaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnosData = async () => {
      try {
        const response = await TESTREACT_backend.fetchDeteccionesData();
        // Asumiendo que la respuesta es una cadena JSON en texto, la parseamos.
        const data = JSON.parse(response);
        if (data && data.clase) {
          setAlumnos([data.clase]); // Convertimos la propiedad "clase" en un arreglo
        } else {
          // Si data.clase no existe o no es válido, muestra el contenido de data para depuración.
          console.error('El formato de los datos no es el esperado:', data);
        }
      } catch (error) {
        // Captura cualquier error en el proceso, incluyendo errores de parseo.
        console.error('Error al obtener los datos de los alumnos:', error.message);
      }
    };

    fetchAlumnosData();
  }, []);

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
          {alumnos.map(alumno => (
            <tr key={alumno.clase}>
              <td>{alumno.clase}</td>
              <td>{alumno.objetos_detectados}</td>
              <td>{alumno.fecha}</td>
              <td>{alumno.camara}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultaAlumnos;


