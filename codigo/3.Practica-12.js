document.getElementById('generar').addEventListener('click', function() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (isNaN(cantidad) || cantidad < 1) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    // Generar array aleatorio
    const arrayOriginal = generarArrayAleatorio(cantidad);

    // Separar en pares e impares
    const pares = arrayOriginal.filter(num => num % 2 === 0);
    const impares = arrayOriginal.filter(num => num % 2 !== 0);

    // Ordenar los pares e impares
    const arrayOrdenado = ordenarArray(pares, impares);

    // Mostrar los resultados
    document.getElementById('arrayOriginal').textContent = arrayOriginal.join(', ');
    document.getElementById('pares').textContent = pares.join(', ');
    document.getElementById('impares').textContent = impares.join(', ');
    document.getElementById('arrayOrdenado').textContent = arrayOrdenado.join(', ');
});

// Función para generar un array de números aleatorios entre 1 y 100
function generarArrayAleatorio(cantidad) {
    const array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

// Función para ordenar el array según las condiciones especificadas
function ordenarArray(pares, impares) {
    // Calculamos cuántos números pares e impares hay
    const mitadPares = Math.floor(pares.length / 2);
    const mitadImpares = Math.floor(impares.length / 2);

    // Partimos los pares e impares para distribuirlos
    const paresAlInicio = pares.slice(0, mitadPares); 
    const paresAlFinal = pares.slice(mitadPares); 

    const imparesAlCentro = impares; // Los impares se mantienen en el centro

    // Ordenar el array final 
    const resultado = [...paresAlInicio, ...imparesAlCentro, ...paresAlFinal];
    return resultado;
}
