function analizarTexto() {
    const texto = document.getElementById("texto").value;
    const caracteresUnicos = new Set([...texto]);
    const conteoCaracteres = new Map();

    // Contar apariciones de cada caracter
    for (let char of texto) {
        conteoCaracteres.set(char, (conteoCaracteres.get(char) || 0) + 1);
    }

    // Mostrar resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Caracteres únicos (${caracteresUnicos.size}): ${[...caracteresUnicos].join(", ")}</p>
        <p>Conteo de caracteres:</p>
        <ul>
            ${[...conteoCaracteres].map(([char, count]) => `<li>${char}: ${count}</li>`).join("")}
        </ul>
    `;
}
