// Definición del alfabeto permitido (minúsculas sin acentuar) y símbolo de reemplazo
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const simboloReemplazo = "#";

// Función para cifrar el texto
function cifrar() {
  const texto = document.getElementById("text").value;
  const desplazamiento = parseInt(document.getElementById("des").value);
  const resultado = transformarTexto(texto, desplazamiento);
  document.getElementById("output").textContent = resultado;
}

// Función para descifrar el texto
function descifrar() {
  const texto = document.getElementById("text").value;
  const desplazamiento = parseInt(document.getElementById("des").value);
  const resultado = transformarTexto(texto, -desplazamiento);
  document.getElementById("output").textContent = resultado;
}

// Función para cifrar o descifrar un texto con desplazamiento dado
function transformarTexto(texto, desplazamiento) {
  return Array.from(texto).map(caracter => {
    const indice = alfabeto.indexOf(caracter);
    if (indice === -1) {
      return simboloReemplazo; // Caracter no reconocido
    }
    // Calcula el nuevo índice con desplazamiento circular
    const nuevoIndice = (indice + desplazamiento + alfabeto.length) % alfabeto.length;
    return alfabeto[nuevoIndice];
  }).join('');
}
