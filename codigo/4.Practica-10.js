let nuevaVentana = null;

// Abre la ventana de la práctica anterior
document.getElementById("abrirVentana").addEventListener("click", function() {
    nuevaVentana = window.open("4.Practica-09.html", "VentanaSecundaria", "width=600,height=400");
});

// Lista las clases de los divs en la ventana secundaria
document.getElementById("listarClases").addEventListener("click", function() {
    if (nuevaVentana && !nuevaVentana.closed) {
        const divs = nuevaVentana.document.querySelectorAll('div');
        divs.forEach((div, index) => {
            console.log(`Div ${index + 1} clases: ${div.className}`);
        });
    } else {
        alert("La ventana secundaria no está abierta.");
    }
});

// Cierra la ventana secundaria
document.getElementById("cerrarVentana").addEventListener("click", function() {
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.close();
    } else {
        alert("La ventana secundaria ya está cerrada.");
    }
});

// Cambia el estilo de los botones de la ventana principal
document.getElementById("cambiarEstiloBotones").addEventListener("click", function() {
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.classList.toggle("estilo-boton"); // Añade o quita la clase
        boton.style.backgroundColor = "#4CAF50";
        boton.style.color = "white";
        boton.style.border = "none";
        boton.style.fontSize = "18px";
    });
});
