saludar = function () {
  //recuperar el valor de la caja de texto
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let edad=recuperarInt("txtedad")
  let estatura= recuperarFloat("txtestatura")
};

recuperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarInt = function (idcomponente) {
  let valorCaja = recuperarTexto(idcomponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};
recuperarFloat = function (idcomponente) {
  let valorCaja = recuperarTexto(idcomponente);
  let valorFloat = parseFloat(valorCaja);
  return valorFloat;
};
