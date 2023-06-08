const miArray = [1, 2, 3];

const miArray2 = [...miArray];

miArray2.push(4);

console.log(miArray)

const miObj = {
    nombre: "Jorge",
    apellido: "Foglino",
    edad: 26,
}

const miObj2 = { ...miObj}
miObj.c = 'c';

console.log(miObj)

function f(x, y, z) {
    return x + y + z;
}

f(...[1, 2, 3]); //=> para el array separado y por lo tanto cada número es un parámetro