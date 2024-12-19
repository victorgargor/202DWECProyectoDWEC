Math.mcm = function(a, b) {
    return (a * b) / Math.MCD(a, b);
};

Math.MCD = function(a, b) {
    if (b === 0) {
        return a;
    }
    return Math.MCD(b, a % b);
};

function calcularMCM() {
    const num1 = parseInt(document.getElementById('n1').value);
    const num2 = parseInt(document.getElementById('n2').value);
    const resultado = Math.mcm(num1, num2);
    document.getElementById('resultado').innerText = `El MCM de ${num1} y ${num2} es ${resultado}`;
}

function calcularMCD() {
    const num1 = parseInt(document.getElementById('n1').value);
    const num2 = parseInt(document.getElementById('n2').value);
    const resultado = Math.MCD(num1, num2);
    document.getElementById('resultado').innerText = `El MCD de ${num1} y ${num2} es ${resultado}`;
}
