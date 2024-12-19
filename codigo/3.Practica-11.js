function mostrarAsteriscos(value) {
    const salidaDiv = document.getElementById('salida');  
    let asterisks = '*'.repeat(value);
    salidaDiv.innerHTML += `${asterisks}<br>`;  
}

//Función que ejecuta el recorrido según el método elegido
document.getElementById('ejecutar').addEventListener('click', function() {
    const entrada = document.getElementById('valoresArray').value;
    const arr = entrada.split(',').map(value => parseInt(value.trim(), 10)).filter(value => !isNaN(value));
    const salidaDiv = document.getElementById('salida');
    salidaDiv.innerHTML = '';  

    if (arr.length === 0) {
        salidaDiv.innerHTML = 'Por favor, introduce al menos un número válido.';
        return;
    }

    const metodo = document.getElementById('metodo').value;
    let resultado = '';  

    switch (metodo) {
        case 'for':
            for (let i = 0; i < arr.length; i++) {
                resultado += `${'*'.repeat(arr[i])}<br>`;
            }
            break;
        case 'forEach':
            arr.forEach(value => {
                resultado += `${'*'.repeat(value)}<br>`;
            });
            break;
        case 'map':
            arr.map(value => {
                resultado += `${'*'.repeat(value)}<br>`;
            });
            break;
        case 'forOf':
            for (const value of arr) {
                resultado += `${'*'.repeat(value)}<br>`;
            }
            break;
        default:
            salidaDiv.innerHTML = 'Método no válido';
            return; 
    }
    salidaDiv.innerHTML = resultado;
});
