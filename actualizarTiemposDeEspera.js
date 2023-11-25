// Módulo que simula los datos de tiempos de espera en el metro
const tiemposDeEspera = {
  linea1: {
    estacionA: {
      direccion1: {
        "2023-10-24 08:00": 5,
        "2023-10-24 12:00": 10,
        // ...otros tiempos de espera para la dirección 1
      },
      direccion2: {
        "2023-10-24 08:00": 8,
        "2023-10-24 12:00": 15,
        // ...otros tiempos de espera para la dirección 2
      },
      // ...otros direcciones
    },
    // ...otros estaciones
  },
  // ...otros líneas....
};

// Método para actualizar el tiempo de espera en un registro específico
function actualizarTiemposDeEspera(linea, estacion, direccion, fechaHora, tiempoDeEspera) {
  // Verificar si la línea existe en los datos de tiempos de espera
  if (tiemposDeEspera[linea] !== undefined &&
      tiemposDeEspera[linea][estacion] !== undefined &&
      tiemposDeEspera[linea][estacion][direccion] !== undefined) {
    // Actualizar el tiempo de espera en el registro específico
    tiemposDeEspera[linea][estacion][direccion][fechaHora] = tiempoDeEspera;
    return `Tiempo de espera en línea ${linea}, estación ${estacion}, dirección ${direccion}, fecha y hora ${fechaHora} actualizado a ${tiempoDeEspera} minutos.`;
  } else {
    return `Los datos proporcionados no son válidos o no se encuentran disponibles.`;
  }
}

// Ejemplo de uso del método actualizarTiemposDeEspera()
const lineaActualizar = "linea1";
const estacionActualizar = "estacionA";
const direccionActualizar = "direccion1";
const fechaHoraActualizar = "2023-10-24 08:00";
const nuevoTiempoEspera = 7;
const mensaje = actualizarTiemposDeEspera(lineaActualizar, estacionActualizar, direccionActualizar, fechaHoraActualizar, nuevoTiempoEspera);
console.log(mensaje);
