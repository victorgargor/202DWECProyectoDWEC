document.getElementById('btnInformacionNodo').addEventListener('click', function() {
    // Seleccionamos el nodo con id "parrafo1"
    var nodoParrafo1 = document.getElementById('parrafo1');
    
    // Obtenemos el tipo de nodo, el nombre del nodo y el valor del nodo
    var tipoNodo = nodoParrafo1.nodeType;
    var nombreNodo = nodoParrafo1.nodeName;
    var valorNodo = nodoParrafo1.childNodes[0].nodeValue; // Asumimos que es un nodo de texto

    // Mostramos la información en el div "salida"
    var salida = `
        <strong>Información del nodo "parrafo1":</strong><br>
        <strong>Tipo de Nodo:</strong> ${tipoNodo} <br>
        <strong>Nombre de Nodo:</strong> ${nombreNodo} <br>
        <strong>Valor de Nodo:</strong> ${valorNodo} <br>
    `;
    document.getElementById('salida').innerHTML = salida;
});

document.getElementById('btnRecorrerNodos').addEventListener('click', function() {
    // Obtenemos todos los nodos "p" en el documento
    var nodosParrafos = document.getElementsByTagName('p');
    var resultado = "<p><strong>Recorriendo todos los nodos:</strong><br>";

    // Recorremos todos los nodos "p" y mostramos sus propiedades
    for (var i = 0; i < nodosParrafos.length; i++) {
        var nodo = nodosParrafos[i];
        var tipoNodo = nodo.nodeType;
        var nombreNodo = nodo.nodeName;
        var valorNodo = nodo.childNodes[0].nodeValue; 

        resultado += `
            <strong>Nodo ${i + 1}:</strong><br>
            <strong>Tipo de Nodo:</strong> ${tipoNodo} <br>
            <strong>Nombre de Nodo:</strong> ${nombreNodo} <br>
            <strong>Valor de Nodo:</strong> ${valorNodo} <br><br>
        `;
    }

    // Mostramos el resultado del recorrido
    document.getElementById('salida').innerHTML = resultado+"</p>";
});
