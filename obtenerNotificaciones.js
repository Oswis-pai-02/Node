const express = require('express');
const mongoose = require('mongoose');

// Configurar Express
const app = express();
app.use(express.json());

// Conectar a la base de datos MongoDB Atlas
mongoose.connect('mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<nombre-basededatos>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB Atlas establecida con éxito.');
});

// Definir el modelo de datos de notificaciones
const notificacionSchema = new mongoose.Schema({
  titulo: String,
  cuerpo: String,
  datosAdicionales: Object,
  fechaCreacion: { type: Date, default: Date.now }
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

// Método para obtener todas las notificaciones
async function obtenerNotificaciones() {
  try {
    const notificaciones = await Notificacion.find({}).exec();
    return notificaciones;
  } catch (error) {
    console.error('Error al obtener las notificaciones:', error);
    throw error;
  }
}

// Ruta para obtener notificaciones
app.get('/notificaciones', async (req, res) => {
  try {
    const notificaciones = await obtenerNotificaciones();
    res.json(notificaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las notificaciones.' });
  }
});

// Iniciar el servidor
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
