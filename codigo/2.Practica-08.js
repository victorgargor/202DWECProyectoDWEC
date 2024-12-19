function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function pedirNumero() {
    let num;
    do {
        num = parseInt(prompt("Introduce un número entero del 1 al 300:"));
    } while (isNaN(num) || num < 1 || num > 300);
    return num;
}

function jugar() {
    let seguirJugando;
    do {
        let num = pedirNumero();
        if (esPrimo(num)) {
            alert("El número " + num + " es primo.");
        } else {
            alert("El número " + num + " no es primo.");
        }
        seguirJugando = confirm("¿Quieres seguir jugando?");
    } while (seguirJugando);
}

jugar();