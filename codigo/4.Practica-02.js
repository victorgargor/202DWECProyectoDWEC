// Mostrar los plugins instalados
function mostrarPlugins() {
    const salida = document.getElementById("salida");
    salida.innerHTML = "<h3>Plugins Instalados:</h3>";
    
    if (navigator.plugins.length > 0) {
        for (let i = 0; i < navigator.plugins.length; i++) {
            salida.innerHTML += `<p>${navigator.plugins[i].name} - ${navigator.plugins[i].description}</p>`;
        }
    } else {
        salida.innerHTML += "<p>No se encontraron plugins instalados.</p>";
    }
}

// Verificar si las cookies están habilitadas
function cookiesHabilitadas() {
    const salida = document.getElementById("salida");
    if (navigator.cookieEnabled) {
        salida.innerHTML = "<h3>Las cookies están habilitadas.</h3>";
    } else {
        salida.innerHTML = "<h3>Las cookies NO están habilitadas.</h3>";
    }
}

// Mostrar el lenguaje del navegador
function mostrarLenguaje() {
    const salida = document.getElementById("salida");
    const lenguaje = navigator.language || navigator.userLanguage;
    salida.innerHTML = `<h3>El lenguaje del navegador es: ${lenguaje}</h3>`;
}

// Verificar si el navegador está online o no
function verificarConexion() {
    const salida = document.getElementById("salida");
    if (navigator.onLine) {
        salida.innerHTML = "<h3>El navegador está ONLINE.</h3>";
    } else {
        salida.innerHTML = "<h3>El navegador está OFFLINE.</h3>";
    }
}

// Mostrar la versión del navegador
function mostrarVersion() {
    const salida = document.getElementById("salida");
    const navegador = navigator.userAgent;
    salida.innerHTML = `<h3>Versión del navegador: ${navegador}</h3>`;
}
