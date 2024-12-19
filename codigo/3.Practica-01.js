const objeto1 = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: 'Valor 3',
    metodo1: () => 'Método 1 ejecutado',
    metodo2: () => 'Método 2 ejecutado'
};

const objeto2 = {
    propiedadA: 'Valor A',
    propiedadB: 'Valor B',
    propiedadC: 'Valor C',
    metodoA: () => 'Método A ejecutado',
    metodoB: () => 'Método B ejecutado'
};

const mostrarObjeto = (objeto) => {
    document.getElementById('resultado').innerHTML = Object.entries(objeto)
    .map(([key, value]) => `${key}: ${typeof value === 'function' ? value() : value}`);
};

document.getElementById('b1').onclick = () => mostrarObjeto(objeto1);
document.getElementById('b2').onclick = () => mostrarObjeto(objeto2);

