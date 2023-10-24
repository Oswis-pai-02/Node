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

// Método para actualizar nombre, correo y contraseña de un usuario
function actualizarUsuario(idUsuario, nuevoNombre, nuevoCorreo, nuevaContrasena) {
  // Buscar el usuario por su ID
  const usuario = usuarios.find(usuario => usuario.id === idUsuario);

  // Verificar si el usuario existe
  if (usuario) {
    // Actualizar los campos del usuario
    usuario.nombre = nuevoNombre;
    usuario.correo = nuevoCorreo;
    usuario.contrasena = nuevaContrasena;
    return "Usuario actualizado correctamente.";
  } else {
    return "Usuario no encontrado. No se pudo actualizar.";
  }
}

// Ejemplo de uso del método actualizarUsuario()
const idUsuarioActualizar = 1;
const nuevoNombreUsuario = "Nuevo Nombre";
const nuevoCorreoUsuario = "nuevo@example.com";
const nuevaContrasenaUsuario = "nuevacontrasena789";

const mensaje = actualizarUsuario(idUsuarioActualizar, nuevoNombreUsuario, nuevoCorreoUsuario, nuevaContrasenaUsuario);
console.log(mensaje);
