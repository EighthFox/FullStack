const sumar = (a, b) => {
    if(typeof a !== "number" || typeof b !== "number") 
    throw Error("Los parámetros deben ser números");
    
    return a + b;
};

const pares = (arr) => {
    if(!Array.isArray(arr)) throw Error("El argumento debe ser un array");
    return arr.filter((num) => num % 2 === 0);
};

const promisefiedFunction = () => {
    const promiseA = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("OK");
        }, 1000);
    });

    return promiseA;
}

module.exports = {sumar, pares, promisefiedFunction};

//Para testear primero me pregunto, que quiero testear?
//Que sumar sea una función
//Que reciba dos número (que pasa si no es un número alguno o ambos argumentos?
//Que sume correctamente