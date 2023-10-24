const { MongoClient } = require('mongodb');

// Configura la URL de conexión a tu base de datos MongoDB Atlas
const mongoUri = 'mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<basededatos>';

// Método para consultar la afluencia en una estación y dirección específicas
async function consultarAfluenciaEstacionDireccion(estacion, direccion) {
  try {
    // Crea una instancia del cliente MongoDB
    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Conéctate a la base de datos
    await client.connect();
    
    // Accede a la colección que contiene los datos de afluencia
    const collection = client.db().collection('afluencia');
    
    // Realiza la consulta por estación y dirección
    const resultado = await collection.findOne({ estacion, direccion });
    
    if (resultado) {
      return `La afluencia en la estación ${resultado.estacion}, dirección ${resultado.direccion} es del ${resultado.porcentajeAfluencia}%.`;
    } else {
      return `No se encontraron datos de afluencia para la estación ${estacion}, dirección ${direccion}.`;
    }
  } catch (error) {
    console.error('Error al consultar la afluencia:', error);
    return 'Ocurrió un error al consultar la afluencia.';
  } finally {
    // Cierra la conexión a la base de datos
    client.close();
  }
}

// Método para consultar la afluencia en una línea y dirección específicas
async function consultarAfluenciaLineaDireccion(linea, direccion) {
  try {
    // Crea una instancia del cliente MongoDB
    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Conéctate a la base de datos
    await client.connect();
    
    // Accede a la colección que contiene los datos de afluencia
    const collection = client.db().collection('afluencia');
    
    // Realiza la consulta por línea y dirección
    const resultado = await collection.findOne({ linea, direccion });
    
    if (resultado) {
      return `La afluencia en la línea ${resultado.linea}, dirección ${resultado.direccion} es del ${resultado.porcentajeAfluencia}%.`;
    } else {
      return `No se encontraron datos de afluencia para la línea ${linea}, dirección ${direccion}.`;
    }
  } catch (error) {
    console.error('Error al consultar la afluencia:', error);
    return 'Ocurrió un error al consultar la afluencia.';
  } finally {
    // Cierra la conexión a la base de datos
    client.close();
  }
}

// Ejemplo de uso del método consultarAfluenciaEstacionDireccion()
const estacionConsultar = "EstacionA";
const direccionConsultar = "DireccionX";
consultarAfluenciaEstacionDireccion(estacionConsultar, direccionConsultar)
  .then((mensaje) => {
    console.log(mensaje);
  });

// Ejemplo de uso del método consultarAfluenciaLineaDireccion()
const lineaConsultar = "Linea1";
const direccionLineaConsultar = "DireccionA";
consultarAfluenciaLineaDireccion(lineaConsultar, direccionLineaConsultar)
  .then((mensaje) => {
    console.log(mensaje);
  });
