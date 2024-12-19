function EcuacionSegGrado() {  
    const a = parseFloat(document.getElementById('n1').value);
    const b = parseFloat(document.getElementById('n2').value);
    const c = parseFloat(document.getElementById('n3').value);
    
    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {   
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').innerText = `Las soluciones son x1 = ${x1} y x2 = ${x2}`;
    } else if (discriminante == 0) {      
        const x = -b / (2 * a);
        document.getElementById('resultado').innerText = `La solución es x = ${x}`;
    } else {
        document.getElementById('resultado').innerText = 'No hay soluciones reales';
    }
}
