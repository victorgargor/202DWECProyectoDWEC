// Función que crea el formulario en una nueva ventana
function crearFormularioEnNuevaVentana() {
    // Abrir una nueva ventana 
    const nuevaVentana = window.open('', '', 'width=500,height=600');

    // Crear el contenido HTML del formulario en la nueva ventana
    nuevaVentana.document.write(`
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulario de Contacto</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                .boton {
                    margin: 10px 5px;
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .boton:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <form>
                <h2>Contacto</h2>
                <input type="text" placeholder="Nombre"><br><br>
                <input type="text" placeholder="Apellidos"><br><br>
                <input type="text" placeholder="Email"><br><br>
                <input type="text" placeholder="Asunto"><br><br>
                <textarea placeholder="Mensaje"></textarea><br><br>
                <input class="boton" type="button" value="Enviar" onclick="alert('Mensaje enviado correctamente')">
            </form>
        </body>
        </html>
    `);

    // Cerramos el documento 
    nuevaVentana.document.close();
}

// Agregamos un evento al botón de crear formulario
document.getElementById("botonCrearFormulario").addEventListener("click", crearFormularioEnNuevaVentana);
