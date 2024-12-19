class Padre {
    constructor(prop1, prop2, prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }

    metodo1() {
        console.log(`Propiedades: ${this.prop1}, ${this.prop2}, ${this.prop3}`);
    }
}

// Añadir una nueva propiedad y un nuevo método a la clase padre
Padre.prototype.nuevaPropiedad = '';
Padre.prototype.nuevoMetodo = function() {
    console.log(`Nueva propiedad: ${this.nuevaPropiedad}`);
};

class Hijo extends Padre {
    constructor(prop1, prop2, prop3, prop4) {
        super(prop1, prop2, prop3);
        this.prop4 = prop4;
    }

    metodo2() {
        console.log(`Propiedad adicional: ${this.prop4}`);
    }
}

// Clase Padre
class ClasePadre {
    constructor(propiedad1, propiedad2, propiedad3) {
        this.propiedad1 = propiedad1;
        this.propiedad2 = propiedad2;
        this.propiedad3 = propiedad3;
    }

    metodoPadre() {
        return `Método de la clase padre: ${this.propiedad1}, ${this.propiedad2}, ${this.propiedad3}`;
    }

    nuevoMetodoPadre() {
        return "Este es un nuevo método de la clase padre.";
    }
}

// Subclase
class SubClase extends ClasePadre {
    constructor(propiedad1, propiedad2, propiedad3, nuevaPropiedad) {
        super(propiedad1, propiedad2, propiedad3);
        this.nuevaPropiedad = nuevaPropiedad;
    }

    nuevoMetodoSubClase() {
        return `Nuevo método de la subclase: ${this.nuevaPropiedad}`;
    }
}

let objetoPadre = new Padre('valor1', 'valor2', 'valor3');
let objetoHijo = new Hijo('valor1', 'valor2', 'valor3', 'valor4');

// Asignar valores a la nueva propiedad
objetoPadre.nuevaPropiedad = 'nuevoValorPadre';
objetoHijo.nuevaPropiedad = 'nuevoValorHijo';


function mostrarPropiedades() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Mostrar propiedades y métodos del objeto padre
    resultado.innerHTML += '<h2>Objeto Padre</h2>';
    for (let prop in objetoPadre) {
        resultado.innerHTML += `<p>${prop}: ${objetoPadre[prop]}</p>`;
    }
    objetoPadre.metodo1();
    objetoPadre.nuevoMetodo();

    // Mostrar propiedades y métodos del objeto hijo
    resultado.innerHTML += '<h2>Objeto Hijo</h2>';
    for (let prop in objetoHijo) {
        resultado.innerHTML += `<p>${prop}: ${objetoHijo[prop]}</p>`;
    }
    objetoHijo.metodo1();
    objetoHijo.metodo2();
    objetoHijo.nuevoMetodo();
}
/*class Persona {
    constructor(nombre, apellido, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
    sumarApellido() {
        return `${this.nombre}${this.apellido}`
    };  
}
class Hombre extends Persona{
    constructor(nombre, apellido, direccion, sexo){
        super(nombre, apellido, direccion);
        this.sexo=sexo;
    }
    sumarSexo() {
        return `${this.nombre}${this.sexo}`
    };    
}
    objeto1 = new Persona("Víctor","García","Calle 13");
    objeto2 = new Hombre("Alex","Anarcado","Calle 14","M");

    const mostrarObjeto = (objeto) => {
        document.getElementById('resultado').innerHTML = Object.entries(objeto)
        .map(([key, value]) => `${key}: ${typeof value === 'function' ? value() : value}`);
    };
    
    document.getElementById('b1').onclick = () => mostrarObjeto(objeto1);
    document.getElementById('b2').onclick = () => mostrarObjeto(objeto2);
*/