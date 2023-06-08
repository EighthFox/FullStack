const array = [1, 2, 3, 4, "Palabra", true];

// const num1 = array[0];
// const num2 = array[1];
// const num3 = array[2];
// const num4 = array[3];
// const palabra = array[4];
// const booleano = array[5];

const [num1, num2, num3] = array

console.log(num1, num2, num3)

const miObj = {
    nombre: "Jorge",
    apellido: "Foglino",
    edad: 26,
}

const {nombre, apellido, edad} = miObj;

console.log(nombre);