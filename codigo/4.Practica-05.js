// Obtención de los botones y el campo de entrada
const botonAtras = document.getElementById('botonAtras');
const botonAdelante = document.getElementById('botonAdelante');
const botonIr = document.getElementById('botonIr');
const nuevoDocumentoInput = document.getElementById('nuevoDocumento');

// Acción para el botón "Atrás"
botonAtras.addEventListener('click', function() {
  window.history.back(); // Retrocede una página en el historial
});

// Acción para el botón "Adelante"
botonAdelante.addEventListener('click', function() {
  window.history.forward(); // Avanza una página en el historial
});

// Acción para el botón "Ir" con el número de páginas ingresado
botonIr.addEventListener('click', function() {
  const numeroPaginas = parseInt(nuevoDocumentoInput.value, 10);
  if (!isNaN(numeroPaginas)) {
    window.history.go(numeroPaginas); // Va hacia atrás o adelante el número de páginas indicado
  } else {
    alert("Por favor, introduce un número válido.");
  }
});

