let objeto = {
    nombre: "Juan",
    edad: 30
};

document.getElementById('convertirObjeto').addEventListener('click', () => {
    const json = JSON.stringify(objeto, null, 2); 
    document.getElementById('resultadoObjeto').innerText = json;
});

document.getElementById('convertirJson').addEventListener('click', () => {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const obj = JSON.parse(jsonInput); 
        document.getElementById('resultadoJson').innerText = JSON.stringify(obj, null, 2);
        console.log(obj.nombre);
    } catch (error) {
        document.getElementById('resultadoJson').innerText = 'Error: JSON inválido';
    }
});

