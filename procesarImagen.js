const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

// Configurar Express
const app = express();
app.use(express.json());

// Configurar Multer para la carga de imágenes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Conectar a la base de datos (asume que ya tienes una base de datos MongoDB configurada)
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida con éxito.');
});

// Definir un modelo de datos para las imágenes y su análisis
const imagenSchema = new mongoose.Schema({
  nombre: String,
  datos: Buffer, // Almacena los datos de la imagen como un buffer
  afluencia: Number // Almacena la afluencia obtenida del análisis de la imagen
});
const Imagen = mongoose.model('Imagen', imagenSchema);

// Ruta para cargar una imagen y procesarla
app.post('/procesar-imagen', upload.single('imagen'), async (req, res) => {
  try {
    // Guardar la imagen en la base de datos
    const nuevaImagen = new Imagen({
      nombre: req.file.originalname,
      datos: req.file.buffer,
      afluencia: 0 // Inicialmente no se ha realizado el análisis
    });
    await nuevaImagen.save();

    // Realizar el análisis de la imagen (aquí deberías integrar tu motor de análisis de imágenes)
    // El resultado del análisis se almacenaría en nuevaImagen.afluencia

    // Guardar la afluencia en la base de datos
    await nuevaImagen.save();

    res.status(201).json({ mensaje: 'Imagen procesada y analizada con éxito.' });
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    res.status(500).json({ error: 'Ocurrió un error al procesar la imagen.' });
  }
});

// Iniciar el servidor
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
