// Verificar si el script está en la página padre o hijo
if (document.title === "Página Padre") {
    // Código para la página padre
    let ventanaHijo;

    document.getElementById('btnAbrirHijo').addEventListener('click', () => {
        ventanaHijo = window.open('4.Practica-11hijo.html', 'Hijo', 'width=400,height=300');
    });

    document.getElementById('btnEnviarTexto').addEventListener('click', () => {
        if (ventanaHijo && !ventanaHijo.closed) {
            const texto = prompt("Introduce un texto para el hijo:");
            ventanaHijo.recibirTexto(texto);
        } else {
            alert("La ventana hijo no está abierta.");
        }
    });

    // Función que se llama desde el hijo
    window.rellenarFormulario = (datos) => {
        const formulario = document.getElementById('formulario');
        const elementos = formulario.elements;

        datos.forEach((valor, indice) => {
            if (elementos[indice]) {
                elementos[indice].value = valor;
            }
        });
    };
} else if (document.title === "Página Hijo") {
    // Código para la página hijo
    document.getElementById('btnEnviarPadre').addEventListener('click', () => {
        if (window.opener && !window.opener.closed) {
            const datos = ["Dato 1 desde hijo", "Dato 2 desde hijo", "Dato 3 desde hijo", 
            "Dato 4 desde hijo", "Dato 5 desde hijo", "Dato 6 desde hijo"];
            window.opener.rellenarFormulario(datos);
        } else {
            alert("La ventana padre no está disponible.");
        }
    });

    document.getElementById('btnMostrarTexto').addEventListener('click', () => {
        if (window.opener && !window.opener.closed) {
            const texto = prompt("Introduce un texto para mostrar en el padre:");
            window.opener.document.body.innerHTML += `<p>${texto}</p>`;
        } else {
            alert("La ventana padre no está disponible.");
        }
    });

    // Función que se llama desde el padre
    window.recibirTexto = (texto) => {
        alert(`Texto recibido desde el padre: ${texto}`);
    };
}
