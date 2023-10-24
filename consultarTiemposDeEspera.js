// Módulo que simula los datos de tiempos de espera en el metro
const tiemposDeEspera = {
    anden1: 5, // Ejemplo: 5 minutos de espera en el andén 1
    anden2: 10, // Ejemplo: 10 minutos de espera en el andén 2
    // ...otros andenes
  };
  
  // Método para consultar el tiempo de espera en un andén específico
  function consultarTiemposDeEspera(anden) {
    // Verificar si el andén existe en los datos de tiempos de espera
    if (tiemposDeEspera[anden] !== undefined) {
      return `El tiempo de espera en el andén ${anden} es de ${tiemposDeEspera[anden]} minutos.`;
    } else {
      return `El andén ${anden} no existe o no se encuentra disponible.`;
    }
  }
  
  // Ejemplo de uso del método consultarTiemposDeEspera()
  const andenConsultar = "anden1";
  const mensaje = consultarTiemposDeEspera(andenConsultar);
  console.log(mensaje);
  