import express from "express";
import pkg from "pg";
import cors from "cors";

const { Client } = pkg;
const app = express();
const port = 7878;

app.use(cors());

const client = new Client({
  user: 'postgres',
  host: 'db', 
  database: 'Bd_Videojuego',
  password: 'miguel',
  port: 5432, // Puerto mapeado en el host
});

client.connect(err => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/data', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM videojuego');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la consulta a la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});