let numAleatorio = parseInt(Math.random() * 10 + 1);
document.getElementById('resultado').innerText = `Número aleatorio: ${numAleatorio}`;

function adivinarNumero() {
    let userInput = parseInt(document.getElementById('num').value);
        if (userInput === numAleatorio) {
            if (confirm("Enhorabuena. ¿Quieres seguir jugando?")) {
                reiniciarJuego();
            } else {
                alert("Gracias por jugar.");
            }
        } else {
            if (confirm("No has acertado. ¿Quieres seguir jugando?")) {
                reiniciarJuego();
            } else {
                alert("Gracias por jugar.");
            }
        }
}

function reiniciarJuego() {
    numAleatorio = parseInt(Math.random() * 10 + 1);
    document.getElementById('resultado').innerText = `Número aleatorio: ${numAleatorio}`;
    document.getElementById('num').value = '';
}