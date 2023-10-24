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
  
  // Método para iniciar sesión
  function iniciarSesion(correo, contrasena) {
    // Buscar el usuario por correo electrónico
    const usuario = usuarios.find(usuario => usuario.correo === correo);
  
    // Verificar si el usuario existe y si la contraseña coincide
    if (usuario && usuario.contrasena === contrasena) {
      return `¡Bienvenido, ${usuario.nombre}! Sesión iniciada correctamente.`;
    } else {
      return "Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
  }
  
  // Ejemplo de uso del método iniciarSesion()
  const correoUsuario = "usuario1@example.com";
  const contrasenaUsuario = "contrasena123";
  const mensaje = iniciarSesion(correoUsuario, contrasenaUsuario);
  console.log(mensaje);
  