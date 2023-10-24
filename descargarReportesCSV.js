const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Datos simulados de reportes (para simplificar el ejemplo)
const reportes = [
  {
    id: 1,
    usuario: 'Usuario1',
    percance: 'Incidente en la línea 1 del metro.',
    fecha: '2023-10-20 14:30:00',
    likes: 0,
    dislikes: 0
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

// Método para descargar los reportes en un archivo CSV
function descargarReportesCSV() {
  const csvWriter = createCsvWriter({
    path: 'reportes.csv', // Nombre del archivo CSV
    header: [
      { id: 'id', title: 'ID' },
      { id: 'usuario', title: 'Usuario' },
      { id: 'percance', title: 'Percance' },
      { id: 'fecha', title: 'Fecha' },
      { id: 'likes', title: 'Likes' },
      { id: 'dislikes', title: 'Dislikes' }
    ]
  });

  csvWriter.writeRecords(reportes) // Escribe los reportes en el archivo CSV
    .then(() => console.log('Reportes descargados como CSV en reportes.csv'))
    .catch(error => console.error('Error al descargar los reportes:', error));
}

// Ejemplo de uso del método descargarReportesCSV()
descargarReportesCSV();
