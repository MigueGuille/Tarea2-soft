import { useEffect, useState } from 'react';
import './App.css';

interface DataItem {
  id: number;
  nombre: string;
  genero: string;
  año: string;
}

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const backendHost = window.location.hostname; // Toma la IP o dominio del host
    const backendUrl = `http://${backendHost}:7878`;
  
    fetch(`${backendUrl}/data`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className="App">
      <h1>Lista de Videojuegos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Género</th>
            <th>Fecha de Lanzamiento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.genero}</td>
              <td>{item.año}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;