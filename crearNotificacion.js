const mongoose = require('mongoose');

// Definir un modelo de datos para las notificaciones
const Notificacion = mongoose.model('Notificacion', {
  titulo: String,
  cuerpo: String,
  datosAdicionales: Object,
  fechaCreacion: { type: Date, default: Date.now }
});

// Método para crear y almacenar una notificación en la base de datos
async function crearNotificacion(titulo, cuerpo, datosAdicionales) {
  try {
    const nuevaNotificacion = new Notificacion({
      titulo,
      cuerpo,
      datosAdicionales
    });

    const notificacionGuardada = await nuevaNotificacion.save();
    console.log('Notificación creada y almacenada:', notificacionGuardada);
    return 'Notificación creada y almacenada con éxito.';
  } catch (error) {
    console.error('Error al crear y almacenar la notificación:', error);
    return 'Error al crear y almacenar la notificación.';
  }
}

// Ejemplo de uso del método crearNotificacion
const tituloNotificacion = 'Nuevo mensaje';
const cuerpoNotificacion = 'Tienes un nuevo mensaje.';
const datosAdicionales = { tipo: 'chat', remitente: 'usuario123' };

crearNotificacion(tituloNotificacion, cuerpoNotificacion, datosAdicionales)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
