let intervalo;
let luz = 0; //0 verde, 1 amarillo, 2 rojo

function encenderBombilla(color) {
    switch (color) {
        case 'rojo':
            document.getElementById("rojo").style.backgroundColor = "red";
            document.getElementById("amarillo").style.backgroundColor = "black";
            document.getElementById("verde").style.backgroundColor = "black";
            console.log("Color activo: rojo");
            break;
        case 'amarillo':
            document.getElementById("amarillo").style.backgroundColor = "yellow";
            document.getElementById("rojo").style.backgroundColor = "black";
            document.getElementById("verde").style.backgroundColor = "black";
            console.log("Color activo: amarillo");
            break;
        case 'verde':
            document.getElementById("verde").style.backgroundColor = "green";
            document.getElementById("rojo").style.backgroundColor = "black";
            document.getElementById("amarillo").style.backgroundColor = "black";
            console.log("Color activo: verde");
            break;    
    }
}

function iniciarCiclo(){
    encenderBombilla("verde");
    setTimeout(() => {encenderBombilla("amarillo");
    setTimeout(() => {encenderBombilla("rojo");}, 2000); }, 1000); 
}

function continuarCiclo(){
    if (intervalo) return;
    intervalo = setInterval(() => {
        if (luz === 0) {
            encenderBombilla("verde");
            luz = 1;
        } else if (luz === 1) {
            encenderBombilla("amarillo");
            luz = 2;
        } else {
            encenderBombilla("rojo");
            luz = 0;
        }
    }, 3000); 
}

function pararCiclo(){
    clearInterval(intervalo);
    intervalo = null;

    encenderBombilla(null);
    console.log("Ciclo parado");    
}
























