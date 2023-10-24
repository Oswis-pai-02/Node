// Módulo que simula una base de datos de usuarios
const usuarios = [
    {
      id: 1,
      nombre: "Usuario 1",
      correo: "usuario1@example.com"
    },
    {
      id: 2,
      nombre: "Usuario 2",
      correo: "usuario2@example.com"
    },
    // ...otros usuarios
  ];
  
  // Método para eliminar un usuario por ID
  function eliminarUsuario(idUsuario) {
    // Buscar el índice del usuario en el arreglo por su ID
    const indiceUsuario = usuarios.findIndex(usuario => usuario.id === idUsuario);
  
    // Verificar si se encontró al usuario
    if (indiceUsuario !== -1) {
      // Eliminar el usuario del arreglo
      usuarios.splice(indiceUsuario, 1);
      return "Usuario eliminado exitosamente.";
    } else {
      return "Usuario no encontrado. No se pudo eliminar.";
    }
  }
  
  // Ejemplo de uso del método eliminarUsuario()
  const idUsuarioAEliminar = 2;
  const mensaje = eliminarUsuario(idUsuarioAEliminar);
  console.log(mensaje);
  