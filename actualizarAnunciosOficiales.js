const Twit = require('twit');

// Configuración de las credenciales de API de Twitter
const twitterConfig = {
  consumer_key: 'TU_CONSUMER_KEY',
  consumer_secret: 'TU_CONSUMER_SECRET',
  access_token: 'TU_ACCESS_TOKEN',
  access_token_secret: 'TU_ACCESS_TOKEN_SECRET'
};

// Crea un objeto Twit con las credenciales
const T = new Twit(twitterConfig);

// Método para actualizar anuncios oficiales en la cuenta del metro de la CDMX
function actualizarAnunciosOficiales(nuevoAnuncio) {
  // ID de usuario de la cuenta del metro de la CDMX
  const metroCDMXUserId = 'ID_DEL_USUARIO';

  // Publicar el nuevo anuncio en Twitter
  T.post('statuses/update', { status: nuevoAnuncio }, (err, data, response) => {
    if (err) {
      console.error('Error al actualizar los anuncios oficiales:', err);
      return;
    }

    console.log('Anuncio oficial actualizado con éxito.');
  });
}

// Ejemplo de uso del método actualizarAnunciosOficiales()
const nuevoAnuncio = '¡Nuevo anuncio oficial del metro de la CDMX!';
actualizarAnunciosOficiales(nuevoAnuncio);

//Asegúrate de reemplazar 'TU_CONSUMER_KEY', 'TU_CONSUMER_SECRET', 'TU_ACCESS_TOKEN', 'TU_ACCESS_TOKEN_SECRET', y 'ID_DEL_USUARIO' con tus propias credenciales de Twitter y el ID de usuario de la cuenta del metro de la CDMX que desees actualizar.

