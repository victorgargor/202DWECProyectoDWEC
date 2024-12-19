
function buscarPalabra() {
    const texto = document.getElementById("input").value;
    const palabraBuscar = document.getElementById("palabra").value;
    const regex = new RegExp(palabraBuscar, 'gi'); 

    const resultados = [];
    let match;
    while ((match = regex.exec(texto)) !== null) {
        resultados.push(match.index); 
    }

    const resultadosDiv = document.getElementById("resultados");
    if (resultados.length > 0) {
        resultadosDiv.innerHTML = `Se han encontrado ${resultados.length} coincidencias para "${palabraBuscar}"`;
    } else {
        resultadosDiv.innerHTML = `No se ha encontrado la palabra "${palabraBuscar}".`;
    }
}

function generarArrayPalabras() {
    const texto = document.getElementById("input").value;
    const textoLimpio = texto.replace(/[^\w\sáéíóúÁÉÍÓÚ]/g, '');
    const palabras = textoLimpio.split(/\s+/);
    const resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = `Array de palabras: <br><pre>${JSON.stringify(palabras, null, 2)}</pre>`;
}

function ordenarPalabras() {
    const texto = document.getElementById("input").value;
    const textoLimpio = texto.replace(/[^\w\sáéíóúÁÉÍÓÚ]/g, '');
    const palabras = textoLimpio.split(/\s+/);
    const palabrasOrdenadas = palabras.sort((a, b) => a.localeCompare(b));
    const resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = `Palabras ordenadas alfabéticamente: <br><pre>${JSON.stringify(palabrasOrdenadas, null, 2)}</pre>`;
}
