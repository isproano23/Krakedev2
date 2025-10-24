probarAtributos = function () {
  let persona = {
    nombre: "Pedro",
    apellido: "Moralees",
    edad: 24,
    estaVivo: true,
  };
  console.log(persona.nombre);
  console.log(persona.edad);
  if(persona.estaVivo==false){
   console.log("No esta vivo")
  }else{
    console.log("Si esta Vivo")
  }
};
 crearProducto=function() {
    // Crear la variable producto1 con atributos nombre (String), precio (float) y stock (int)
    var producto1 = {
        nombre: "Laptop",
        precio: 999.99,
        stock: 50
    };

    // Crear la variable producto2 con los mismos atributos pero valores distintos
    var producto2 = {
        nombre: "Mouse",
        precio: 29.99,
        stock: 200
    };

    // Comparar el stock de producto1 con el stock de producto2
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}
