// function sumar(a, b){
//     const suma = a+b;
//     return suma;
// }

//arrowFunction
// const sumar = (a,b) => {
//     const suma = a + b;
//     return suma;
// };

const sumar = (a,b) => a + b;

//return implicito

console.log(sumar(5,4))

const myArray = [1, 2, 3, 4, true, "holis"];

myArray.forEach(function (elemento){
    console.log(elemento);
});

// myArray.forEach((elemento) => { 
//     console.log(elemento);
// });

const bob = {
    name: "bob",
    friends: ["Jorge", "Lara", "Lean"],
    printFriends(){
        this.friends.forEach((f) => console.log(this.name + " knows " + f))
    },
};

bob.printFriends();

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(){
        console.log(this.nombre);
    }
    
}

// Persona.prototype.getNombre = function () {
// 	console.log(this.nombre);
// }

const jorge = new Persona("Jorge", "Vega", 20);

console.log(jorge);

class Empleado extends Persona {
    constructor(nombre, apellido, edad, sector){
        super(nombre, apellido, edad);
        this.sector = sector;
    }
}

const empleado1 = new Empleado("Jorge", "Vela", 21, "Learning")

console.log(empleado1)