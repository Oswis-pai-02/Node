// Módulo que simula los datos de tiempos de espera en el metro
const tiemposDeEspera = {
    anden1: 5, // Ejemplo: 5 minutos de espera en el andén 1
    anden2: 10, // Ejemplo: 10 minutos de espera en el andén 2
    // ...otros andenes
  };
  
  // Método para actualizar el tiempo de espera en un andén específico
  function actualizarTiemposDeEspera(anden, nuevoTiempo) {
    // Verificar si el andén existe en los datos de tiempos de espera
    if (tiemposDeEspera[anden] !== undefined) {
      // Actualizar el tiempo de espera en el andén
      tiemposDeEspera[anden] = nuevoTiempo;
      return `Tiempo de espera en el andén ${anden} actualizado a ${nuevoTiempo} minutos.`;
    } else {
      return `El andén ${anden} no existe o no se encuentra disponible.`;
    }
  }
  
  // Ejemplo de uso del método actualizarTiemposDeEspera()
  const andenActualizar = "anden1";
  const nuevoTiempoEspera = 7;
  const mensaje = actualizarTiemposDeEspera(andenActualizar, nuevoTiempoEspera);
  console.log(mensaje);//con comentarios cococococ
  