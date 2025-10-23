mostrarNumeros = function () {
  console.log("antes del for");

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  console.log("despues del for");
};

mostrarNumeros2 = function () {
  console.log("antes del for");

  for (let indice = 1; indice <= 5; indice++) {
    console.log(indice);
  }

  console.log("despues del for");
};

mostrarPares = function () {
  console.log("antes del for");

  for (let x = 2; x <= 10; x += 2) {
    console.log(x);
  }

  console.log("despues del for");
};

mostrarInverso = function () {
  console.log("antes del for");

  for (let i = 10; i > 0; i--) {
    console.log(i);
  }

  console.log("despues del for");
};

hackearNasaPelis = function () {
  //hackeando Nasa 0%

  for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
    console.log("Hackeando Nasa" + porcentaje + "%");
  }

  console.log("LA NASA HA SIDO HACKEADA XD");
};

mostrarImpares = function () {
  console.log("antes del for");

  for (let x = 1; x <= 21; x++) {
    if (x % 2 !== 0) {
      console.log(x);
    }
  }

  console.log("despues del for");
};
