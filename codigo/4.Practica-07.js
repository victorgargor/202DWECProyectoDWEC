// Función para obtener el nuevo texto del input
function obtenerNuevoTexto() {
    return document.getElementById("nuevoTexto").value;
}

// Funciones para cambiar el texto de acuerdo a la selección por etiqueta y por id

// Selección por etiqueta y modificación con textContent
document.getElementById("botonEtiqueta1").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var parrafos = document.getElementsByTagName("p");
    for (let parrafo of parrafos) {
        parrafo.textContent = textoNuevo;
    }
});

// Selección por etiqueta y modificación con innerText
document.getElementById("botonEtiqueta2").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var parrafos = document.getElementsByTagName("p");
    for (let parrafo of parrafos) {
        parrafo.innerText = textoNuevo;
    }
});

// Selección por etiqueta y modificación con innerHTML
document.getElementById("botonEtiqueta3").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var parrafos = document.getElementsByTagName("p");
    for (let parrafo of parrafos) {
        parrafo.innerHTML = textoNuevo;
    }
});

// Selección por id y modificación con textContent
document.getElementById("botonId1").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var elemento = document.getElementById("texto");
    elemento.textContent = textoNuevo;
});

// Selección por id y modificación con innerText
document.getElementById("botonId2").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var elemento = document.getElementById("texto");
    elemento.innerText = textoNuevo;
});

// Selección por id y modificación con innerHTML
document.getElementById("botonId3").addEventListener("click", function() {
    var textoNuevo = obtenerNuevoTexto();
    var elemento = document.getElementById("texto");
    elemento.innerHTML = textoNuevo;
});
