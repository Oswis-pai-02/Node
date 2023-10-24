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

// Método para consultar los anuncios oficiales del metro de la CDMX
function consultarAnunciosOficiales() {
  // ID de usuario de la cuenta del metro de la CDMX
  const metroCDMXUserId = 'ID_DEL_USUARIO';

  T.get('statuses/user_timeline', { user_id: metroCDMXUserId, count: 5 }, (err, data, response) => {
    if (err) {
      console.error('Error al consultar los anuncios oficiales:', err);
      return;
    }

    // Procesar los datos de los tweets
    data.forEach(tweet => {
      console.log(`Fecha: ${tweet.created_at}`);
      console.log(`Texto del tweet: ${tweet.text}`);
      console.log('---------------------------------------------');
    });
  });
}

// Ejemplo de uso del método consultarAnunciosOficiales()
consultarAnunciosOficiales();

//Asegúrate de reemplazar 'TU_CONSUMER_KEY', 'TU_CONSUMER_SECRET', 'TU_ACCESS_TOKEN', 'TU_ACCESS_TOKEN_SECRET', y 'ID_DEL_USUARIO' con tus propias credenciales de Twitter y el ID de usuario de la cuenta del metro de la CDMX que desees consultar.