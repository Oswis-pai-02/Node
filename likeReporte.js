// Datos simulados de reportes (para simplificar el ejemplo)
const reportes = [
    {
      id: 1,
      usuario: 'Usuario1',
      percance: 'Incidente en la línea 1 del metro.',
      fecha: '2023-10-20 14:30:00',
      likes: 0 // Inicialmente no hay "likes"
    },
    {
      id: 2,
      usuario: 'Usuario2',
      percance: 'Retraso en la línea 2 del metro.',
      fecha: '2023-10-21 10:45:00',
      likes: 0
    },
    // ...otros reportes
  ];
  
  // Método para dar "like" a un reporte por su ID
  function likeReporte(idReporte) {
    const reporte = reportes.find(report => report.id === idReporte);
    if (reporte) {
      reporte.likes++;
      console.log(`Has dado "like" al reporte ${idReporte}.`);
    } else {
      console.log('El reporte no existe.');
    }
  }
  
  // Método para consultar y mostrar el conteo de "likes" en un reporte por su ID
  function mostrarConteoLikes(idReporte) {
    const reporte = reportes.find(report => report.id === idReporte);
    if (reporte) {
      console.log(`Reporte ${idReporte}:`);
      console.log(`Usuario: ${reporte.usuario}`);
      console.log(`Percance: ${reporte.percance}`);
      console.log(`Fecha: ${reporte.fecha}`);
      console.log(`Likes: ${reporte.likes}`);
    } else {
      console.log('El reporte no existe.');
    }
  }
  
  // Ejemplo de uso del método likeReporte() y mostrarConteoLikes()
  const idReporteAlikear = 1; // ID del reporte al que se desea dar "like"
  likeReporte(idReporteAlikear);
  mostrarConteoLikes(idReporteAlikear);
  