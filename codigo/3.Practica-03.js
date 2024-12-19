function Constructor(nombreC, apellidoC, direccionC) {
    this.nombre = nombreC;
    this.apellido = apellidoC;
    this.direccion = direccionC;
    this.sumarApellido = () => {return `${this.nombre} ${this.apellido}`};
    this.sumarDirección = () => {return `${this.nombre} ${this.direccion}`};
}

Constructor.prototype.telefono;
Constructor.prototype.verTelefono = () =>
{return `Su teléfono es: ${this.telefono}`};

objeto1 = new Constructor("Víctor","García","Calle 13");
objeto2 = new Constructor("Alex","Anarcado","Calle 14");

objeto1.telefono = prompt("¿Cuál el primer teléfono?");
objeto2.telefono = prompt("¿Cuál el segundo teléfono?");

console.log(objeto1.verTelefono);
console.log(objeto2.verTelefono);

const mostrarObjeto = (objeto) => {
    document.getElementById('resultado').innerHTML = Object.entries(objeto)
    .map(([key, value]) => `${key}: ${typeof value === 'function' ? value() : value}`);
};

/*const mostrarObjeto = (objeto) => {
    for (clave in objeto){
        document.getElementById('resultado').innerHTML = `${clave}: ${typeof objeto === 'function' ? clave : objeto[clave]}`
    }
} */

document.getElementById('b1').onclick = () => mostrarObjeto(objeto1);
document.getElementById('b2').onclick = () => mostrarObjeto(objeto2);