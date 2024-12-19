// Función para generar un número de tarjeta de crédito aleatorio
function generarNumeroTarjeta() {
    let numero = '';
    // Generar 15 dígitos aleatorios
    for (let i = 0; i < 15; i++) {
        numero += Math.floor(Math.random() * 10).toString();
    }
    // Calcular el dígito de control (16º dígito) usando el algoritmo de Luhn
    const digitoControl = calcularDigitoControl(numero);
    return numero + digitoControl;
}

// Función para calcular el dígito de control usando el algoritmo de Luhn
function calcularDigitoControl(numero) {
    const suma = numero.split('').reverse().map((digit, index) => {
        let n = parseInt(digit);
        if (index % 2 === 1) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        return n;
    }).reduce((a, b) => a + b, 0);
    
    return (10 - (suma % 10)) % 10;
}

// Función para validar un número de tarjeta
function validarNumeroTarjeta(numero) {
    const limpio = numero.replace(/\s+/g, ''); // Eliminar espacios
    return /^\d{16}$/.test(limpio) && (calcularSumaLuhn(limpio) % 10 === 0);
}

// Sumar los dígitos usando el algoritmo de Luhn
function calcularSumaLuhn(numero) {
    return numero.split('').reverse().map((digit, index) => {
        let n = parseInt(digit);
        if (index % 2 === 1) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        return n;
    }).reduce((a, b) => a + b, 0);
}

document.getElementById('generar').addEventListener('click', () => {
    const numeroGenerado = generarNumeroTarjeta();
    document.getElementById('numeroGenerado').textContent = numeroGenerado.match(/.{1,4}/g).join(' ');
});

document.getElementById('validar').addEventListener('click', () => {
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const esValido = validarNumeroTarjeta(numeroTarjeta);
    document.getElementById('resultadoValidacion').textContent = esValido ? 'Número de tarjeta válido.' : 'Número de tarjeta inválido.';
});
