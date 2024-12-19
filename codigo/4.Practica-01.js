// Variables para almacenar la referencia de la ventana abierta
let ventana;

document.getElementById("abrirVentana").addEventListener("click", function() {
    // Obtener el tamaño de la ventana desde los inputs
    const ancho = document.getElementById("ancho").value || 500;
    const alto = document.getElementById("alto").value || 500;

    // Abrir la ventana con el tamaño especificado
    ventana = window.open("https://google.es", "miventana", `resizable, left=100, top=100, width=${ancho}, height=${alto}`);
});

document.getElementById("cerrarVentana").addEventListener("click", function() {
    if (ventana) {
        ventana.close();
    } else {
        alert("No hay ninguna ventana abierta para cerrar.");
    }
});

document.getElementById("alturaExterior").addEventListener("click", function() {
    alert(`Altura exterior ventana actual: ${window.outerHeight}px`);
});

document.getElementById("alturaInterior").addEventListener("click", function() {
    alert(`Altura interior ventana actual: ${window.innerHeight}px`);
});

document.getElementById("anchoExterior").addEventListener("click", function() {
    alert(`Ancho exterior ventana actual: ${window.outerWidth}px`);
});

document.getElementById("anchoInterior").addEventListener("click", function() {
    alert(`Ancho interior ventana actual: ${window.innerWidth}px`);
});
