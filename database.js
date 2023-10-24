const mongoose = require('mongoose');

// URL de conexión a MongoDB Atlas (reemplaza 'tu_url_de_conexion' con la URL real)
const urlConexion = 'tu_url_de_conexion';

// Función para conectar a la base de datos
async function conectarBaseDeDatos() {
  try {
    await mongoose.connect(urlConexion, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB Atlas establecida con éxito.');
  } catch (error) {
    console.error('Error de conexión a MongoDB Atlas:', error);
    throw error; // Lanza el error para que pueda ser manejado en otros lugares
  }
}

module.exports = { conectarBaseDeDatos };
