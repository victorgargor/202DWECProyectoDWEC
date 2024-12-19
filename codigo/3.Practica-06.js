function validarNombre() {
    const nombre = document.getElementById('nombre').value;
    const regexp = /^\w{3,}(\s\w{3,})?$/;
    if (regexp.test(nombre)) {
        alert("Nombre válido");
    } else {
        alert("Nombre inválido");
    }
}

function validarApellidos() {
    const apellidos = document.getElementById('apellidos').value;
    const regexp = /^\w{2,}(-\w{2,})?(\s\w{2,}(-\w{2,})?)*$/;
    if (regexp.test(apellidos)) {
        alert("Apellidos válidos");
    } else {
        alert("Apellidos inválidos");
    }
}

function validarDireccion() {
    const direccion = document.getElementById('direccion').value;
    const regexp = /^C\/[\w\s]{1,}(\s[\w\s]{1,})*,\s\d{1,3},\s\d{1,2},\s\w{1,2}$/;
    if (regexp.test(direccion)) {
        alert("Dirección válida");
    } else {
        alert("Dirección inválida");
    }
}

function validarTelefono() {
    const telefono = document.getElementById('telefono').value;
    const regexp = /^\d{3}-\d{3}-\d{3}$/;
    if (regexp.test(telefono)) {
        alert("Teléfono válido");
    } else {
        alert("Teléfono inválido");
    }
}
