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