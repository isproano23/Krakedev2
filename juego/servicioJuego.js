obtenerAleatorio = function () {
  return Math.floor(Math.random() * 3) + 1;
};
generarElemento = function () {
  let numero = obtenerAleatorio();
  if (numero === 1) {
    return "piedra";
  } else if (numero === 2) {
    return "papel";
  } else if (numero === 3) {
    return "tijera";
  }
};
determinarGanador=function(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    } else if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra")
    ) {
        return 1;
    } else {
        return 2;
    }
}

 generarRuta=function(nombre) {
    return "imagenes/" + nombre + ".png";
}
