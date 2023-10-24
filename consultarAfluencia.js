// Módulo que simula los datos de afluencia en el metro
const datosAfluencia = {
    anden1: 50, // Ejemplo: 50 personas en el andén 1
    anden2: 30, // Ejemplo: 30 personas en el andén 2
    // ...otros andenes
  };
  
  // Método para consultar la afluencia en un andén específico
  function consultarAfluencia(anden) {
    // Verificar si el andén existe en los datos de afluencia
    if (datosAfluencia[anden]) {
      return `La afluencia en el andén ${anden} es de ${datosAfluencia[anden]} personas.`;
    } else {
      return `El andén ${anden} no existe o no se encuentra disponible.`;
    }
  }
  
  // Ejemplo de uso del método consultarAfluencia()
  const andenConsultar = "anden2";
  const mensaje = consultarAfluencia(andenConsultar);
  console.log(mensaje);
  