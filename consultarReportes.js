// Datos simulados de reportes (para simplificar el ejemplo)
const reportes = [
    {
      usuario: 'Usuario1',
      percance: 'Incidente en la línea 1 del metro.',
      fecha: '2023-10-20 14:30:00'
    },
    {
      usuario: 'Usuario2',
      percance: 'Retraso en la línea 2 del metro.',
      fecha: '2023-10-21 10:45:00'
    },
    // ...otros reportes
  ];
  
  // Método para consultar los reportes en el foro
  function consultarReportes() {
    console.log('---- Reportes en el foro ----');
    reportes.forEach((reporte, index) => {
      console.log(`Reporte ${index + 1}:`);
      console.log(`Usuario: ${reporte.usuario}`);
      console.log(`Percance: ${reporte.percance}`);
      console.log(`Fecha: ${reporte.fecha}`);
      console.log('-------------------------------');
    });
  }
  
  // Ejemplo de uso del método consultarReportes()
  consultarReportes();
  