let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
];

function mostraropcionempleado() {
  ocultarComponente("divEmpleado");
  mostrarComponente("divEmpleado");
  document.getElementById("divEmpleado");
  document.getElementById("divRol");
  document.getElementById("divResumen");
}

function mostraropcionrol() {
  // Invocar la función o cortar componente y mostrar componente
  ocultarComponente("divRol");
  mostrarComponente("divRol");

  // Código existente para mostrar/ocultar divs
  document.getElementById("divEmpleado");
  document.getElementById("divRol");
  document.getElementById("divResumen");
}

function mostrar_opcion_resumen() {
  ocultarComponente("divResumen");
  mostrarComponente("divResumen");
  document.getElementById("divEmpleado");
  document.getElementById("divRol");
  document.getElementById("divResumen");
}
