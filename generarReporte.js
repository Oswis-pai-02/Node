const fs = require('fs');

// Datos simulados de reportes (para simplificar el ejemplo)
const reportes = [];

// Método para generar un reporte y compartirlo en el foro
function generarReporte(usuario, percance) {
  const nuevoReporte = {
    usuario: usuario,
    percance: percance,
    fecha: new Date().toLocaleString()
  };

  // Agregar el nuevo reporte al arreglo de reportes
  reportes.push(nuevoReporte);

  // Guardar el reporte en un archivo (puedes ajustar la ubicación y el nombre del archivo)
  const reportesJSON = JSON.stringify(reportes, null, 2);
  fs.writeFileSync('reportes.json', reportesJSON);

  console.log('Reporte generado y compartido en el foro.');
}

// Ejemplo de uso del método generarReporte()
const usuario = 'Usuario1';
const percance = 'Incidente en la línea 1 del metro.';
generarReporte(usuario, percance);
