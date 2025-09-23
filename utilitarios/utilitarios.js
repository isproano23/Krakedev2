mostrarTextoCaja=function(idcomponente,mensaje){
  let componente = document.getElementById(idcomponente);
  componente.value = mensaje;
}

recuperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

mostrarTexto = function (idcomponente, mensaje) {
  let componente = document.getElementById(idcomponente);
  componente.innerText = mensaje;
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
mostrarImagen = function (idcomponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.src = rutaImagen;
};
