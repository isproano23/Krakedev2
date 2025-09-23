saludar = function () {
  //recuperar el valor de la caja de texto
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let edad = recuperarInt("txtedad");
  let estatura = recuperarFloat("txtestatura");
  let mensajeBienvenida = "Bienvenido" + nombre + "  " + apellido;

  mostrarImagen("imgsaludo","./imagenes/saludo.gif")

  mostrarTexto("lblResultado", mensajeBienvenida);

  mostrarTextoCaja("txtNombre","")
};


