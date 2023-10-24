// Datos simulados de reportes (para simplificar el ejemplo)
const reportes = [
    {
      id: 1,
      usuario: 'Usuario1',
      percance: 'Incidente en la línea 1 del metro.',
      fecha: '2023-10-20 14:30:00',
      likes: 0,
      dislikes: 0 // Inicialmente no hay "dislikes"
    },
    {
      id: 2,
      usuario: 'Usuario2',
      percance: 'Retraso en la línea 2 del metro.',
      fecha: '2023-10-21 10:45:00',
      likes: 0,
      dislikes: 0
    },
    // ...otros reportes
  ];
  
  // Método para dar "dislike" a un reporte por su ID
  function dislikeReporte(idReporte) {
    const reporte = reportes.find(report => report.id === idReporte);
    if (reporte) {
      reporte.dislikes++;
      console.log(`Has dado "dislike" al reporte ${idReporte}.`);
    } else {
      console.log('El reporte no existe.');
    }
  }
  
  // Método para consultar y mostrar el conteo de "likes" y "dislikes" en un reporte por su ID
  function mostrarConteoLikesDislikes(idReporte) {
    const reporte = reportes.find(report => report.id === idReporte);
    if (reporte) {
      console.log(`Reporte ${idReporte}:`);
      console.log(`Usuario: ${reporte.usuario}`);
      console.log(`Percance: ${reporte.percance}`);
      console.log(`Fecha: ${reporte.fecha}`);
      console.log(`Likes: ${reporte.likes}`);
      console.log(`Dislikes: ${reporte.dislikes}`);
    } else {
      console.log('El reporte no existe.');
    }
  }
  
  // Ejemplo de uso del método dislikeReporte() y mostrarConteoLikesDislikes()
  const idReporteAdislikear = 1; // ID del reporte al que se desea dar "dislike"
  dislikeReporte(idReporteAdislikear);
  mostrarConteoLikesDislikes(idReporteAdislikear);
  