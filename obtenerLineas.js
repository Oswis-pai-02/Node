const express = require('express');
const mongoose = require('mongoose');

// Configurar Express
const app = express();
app.use(express.json());

// URL de conexión a MongoDB Atlas (reemplaza 'tu_url_de_conexion' con la URL real)
const urlConexion = 'tu_url_de_conexion';

// Conectar a la base de datos MongoDB Atlas
mongoose.connect(urlConexion, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB Atlas establecida con éxito.');
});

// Definir el modelo de datos para las líneas del metro (reemplaza 'LineaMetro' con tu modelo)
const LineaMetro = mongoose.model('LineaMetro', {
  nombre: String,
  color: String
});

// Método para obtener todas las líneas del metro desde la base de datos
app.get('/lineas-metro', async (req, res) => {
  try {
    const lineas = await LineaMetro.find();
    res.json({ lineas });
  } catch (error) {
    console.error('Error al obtener las líneas del metro:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las líneas del metro.' });
  }
});

// Iniciar el servidor
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
