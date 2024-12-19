class Constructora {
    constructor(nombreC, apellidoC, direccionC) {
        this.nombre = nombreC;
        this.apellido = apellidoC;
        this.direccion = direccionC;
    }

    metodo1(){
        return console.log(this.nombre+this.apellido);
    }

    metodo2(){
        return console.log(this.nombre+this.direccion);
    }
}
    objeto1 = new Constructora("Víctor","García","Calle 13");
    objeto2 = new Constructora("Alex","Anarcado","Calle 14");

    const mostrarObjeto = (objeto) => {
        document.getElementById('resultado').innerHTML = Object.entries(objeto)
        .map(([key, value]) => `${key}: ${typeof value === 'function' ? value() : value}`);
    };
    
    document.getElementById('b1').onclick = () => mostrarObjeto(objeto1);
    document.getElementById('b2').onclick = () => mostrarObjeto(objeto2);
