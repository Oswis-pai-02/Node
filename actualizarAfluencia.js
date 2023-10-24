// Módulo que simula los datos de afluencia en el metro
const datosAfluencia = {
  linea1: {
    estacionA: {
      direccion1: {
        "2023-10-24 08:00": 50,
        "2023-10-24 12:00": 30,
        // ...otros registros de afluencia para la dirección 1
      },
      direccion2: {
        "2023-10-24 08:00": 40,
        "2023-10-24 12:00": 20,
        // ...otros registros de afluencia para la dirección 2
      },
      // ...otros direcciones
    },
    // ...otros estaciones
  },
  // ...otros líneas
};

// Método para actualizar la afluencia en un registro específico
function actualizarAfluencia(linea, estacion, direccion, fechaHora, nuevaAfluencia) {
  // Verificar si la línea existe en los datos de afluencia
  if (datosAfluencia[linea] !== undefined &&
      datosAfluencia[linea][estacion] !== undefined &&
      datosAfluencia[linea][estacion][direccion] !== undefined) {
    // Actualizar la afluencia en el registro específico
    datosAfluencia[linea][estacion][direccion][fechaHora] = nuevaAfluencia;
    return `Afluencia en línea ${linea}, estación ${estacion}, dirección ${direccion}, fecha y hora ${fechaHora} actualizada a ${nuevaAfluencia} personas.`;
  } else {
    return `Los datos proporcionados no son válidos o no se encuentran disponibles.`;
  }
}

// Ejemplo de uso del método actualizarAfluencia()
const lineaActualizar = "linea1";
const estacionActualizar = "estacionA";
const direccionActualizar = "direccion1";
const fechaHoraActualizar = "2023-10-24 08:00";
const nuevaAfluencia = 60;
const mensaje = actualizarAfluencia(lineaActualizar, estacionActualizar, direccionActualizar, fechaHoraActualizar, nuevaAfluencia);
console.log(mensaje);
