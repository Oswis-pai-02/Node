const Twit = require('twit');
const mongoose = require('mongoose');

// Configuración de las credenciales de API de Twitter
const twitterConfig = {
  consumer_key: 'TU_CONSUMER_KEY',
  consumer_secret: 'TU_CONSUMER_SECRET',
  access_token: 'TU_ACCESS_TOKEN',
  access_token_secret: 'TU_ACCESS_TOKEN_SECRET'
};

// Configuración de la conexión a la base de datos de MongoDB
mongoose.connect('mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<nombre-basededatos>', { useNewUrlParser: true, useUnifiedTopology: true });

// Define el modelo de datos para los anuncios en MongoDB
const Anuncio = mongoose.model('Anuncio', {
  texto: String,
  fecha: Date
});

// Crea un objeto Twit con las credenciales
const T = new Twit(twitterConfig);

// Método para buscar y almacenar los últimos anuncios con el hashtag #AvisoMetro
function actualizarAnunciosOficiales() {
  // Realiza una búsqueda en Twitter con el hashtag #AvisoMetro
  T.get('search/tweets', { q: '#AvisoMetro', count: 10 }, (err, data, response) => {
    if (err) {
      console.error('Error al buscar los últimos anuncios:', err);
      return;
    }

    // Recorre los resultados de la búsqueda y almacena los anuncios en la base de datos
    data.statuses.forEach(async (tweet) => {
      const nuevoAnuncio = new Anuncio({
        texto: tweet.text,
        fecha: new Date(tweet.created_at)
      });

      try {
        await nuevoAnuncio.save();
        console.log('Anuncio oficial almacenado en la base de datos.');
      } catch (error) {
        console.error('Error al almacenar el anuncio en la base de datos:', error);
      }
    });
  });
}

// Ejemplo de uso del método actualizarAnunciosOficiales()
actualizarAnunciosOficiales();

// Asegúrate de reemplazar 'TU_CONSUMER_KEY', 'TU_CONSUMER_SECRET', 'TU_ACCESS_TOKEN', 'TU_ACCESS_TOKEN_SECRET',
// '<usuario>', '<contraseña>', y '<nombre-basededatos>' con tus propias credenciales y detalles de la base de datos de MongoDB Atlas.
