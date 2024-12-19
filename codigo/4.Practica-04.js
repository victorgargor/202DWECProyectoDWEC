// Esperamos que el contenido del DOM se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Mostramos las propiedades del objeto Location en el HTML
    document.getElementById('urlCompleta').textContent = window.location.href;
    document.getElementById('host').textContent = window.location.host;
    document.getElementById('ruta').textContent = window.location.pathname;
    document.getElementById('protocolo').textContent = window.location.protocol;
    document.getElementById('cadenaConsulta').textContent = window.location.search;

    // Botón de "assign()"
    document.getElementById('btnAssign').addEventListener('click', () => {
        const urlNueva = document.getElementById('nuevaURL').value;
        if (urlNueva) {
            window.location.assign(urlNueva);
        } else {
            alert('Por favor, ingresa una URL válida.');
        }
    });

    // Botón de "replace()"
    document.getElementById('btnReplace').addEventListener('click', () => {
        const urlNueva = document.getElementById('nuevaURL').value;
        if (urlNueva) {
            window.location.replace(urlNueva);
        } else {
            alert('Por favor, ingresa una URL válida.');
        }
    });
});
