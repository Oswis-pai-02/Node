// Módulo que simula una base de datos de usuarios
const usuarios = [];

// Método para registrar un usuario
function registrarUsuario(nombre, correo, contraseña) {
  // Verificar si el correo ya está en uso
  const usuarioExistente = usuarios.find(usuario => usuario.correo === correo);
  if (usuarioExistente) {
    return "El correo electrónico ya está registrado. Por favor, elige otro.";
  }

  // Crear un nuevo usuario
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    correo,
    contraseña // En una aplicación real, la contraseña debería ser almacenada de manera segura (hash)
  };

  usuarios.push(nuevoUsuario);
  return "Usuario registrado exitosamente.";
}

// Ejemplo de uso del método registrarUsuario()
const nombre = "Ejemplo Usuario";
const correo = "usuario@example.com";
const contraseña = "contraseña123";

const mensaje = registrarUsuario(nombre, correo, contraseña);
console.log(mensaje);
