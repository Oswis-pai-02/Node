// Módulo que simula una base de datos de usuarios
const usuarios = [
    {
      id: 1,
      nombre: "Usuario 1",
      correo: "usuario1@example.com",
      contrasena: "contrasena123"
    },
    {
      id: 2,
      nombre: "Usuario 2",
      correo: "usuario2@example.com",
      contrasena: "password456"
    },
    // ...otros usuarios
  ];
  
  // Método para actualizar la contraseña de un usuario
  function actualizarUsuario(idUsuario, nuevaContrasena) {
    // Buscar el usuario por su ID
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    // Verificar si el usuario existe
    if (usuario) {
      // Actualizar la contraseña del usuario
      usuario.contrasena = nuevaContrasena;
      return "Contraseña actualizada correctamente.";
    } else {
      return "Usuario no encontrado. No se pudo actualizar la contraseña.";
    }
  }
  
  // Ejemplo de uso del método actualizarUsuario()
  const idUsuarioActualizar = 1;
  const nuevaContrasenaUsuario = "nuevacontrasena789";
  const mensaje = actualizarUsuario(idUsuarioActualizar, nuevaContrasenaUsuario);
  console.log(mensaje);
  