function calcularMedia(...numeros) {
    let suma=0;
    for (input of numeros) {
        suma+=input;
    }
    let media = suma/numeros.length;
    alert('La media es: ' + media);
}

function recogerNumeros(){
    const n = document.getElementById("media").value;
    calculoMedia=eval("calcularMedia("+n+")");
}

