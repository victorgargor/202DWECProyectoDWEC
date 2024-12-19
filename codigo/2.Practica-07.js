function adivinarCumpleaños() {
    try {
        let fechaCumpleanos = prompt("Introduce tu fecha de cumpleaños (DD/MM/YYYY):");
        if (!fechaCumpleanos) throw "No se ha introducido ninguna fecha.";

        let fechaAdivinada = prompt("Adivina la fecha de cumpleaños (DD/MM/YYYY):");
        if (!fechaAdivinada) throw "No se ha introducido ninguna fecha.";

        if (fechaCumpleanos == fechaAdivinada) {
            alert("Has adivinado el cumpleaños.");
        } else {
            throw "No lo has adivinado.";
        }
    } catch (error) {
        alert(error);
    }
}