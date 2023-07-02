const fulfill1 = new Promise((resolve, reject) => {
    resolve("Resuelvo 1");
});
const fulfill2 = new Promise((resolve, reject) => {
    resolve("Resuelvo 2");
});
const reject1 = new Promise((resolve, reject) => {
    reject("Rechazado 1");
});
const reject2 = new Promise((resolve, reject) => {
    reject("Rechazado 2");
});

// CASO 1 sin manejo de errores

fulfill1.then(
    (value) => {console.log(value)},
);

// CASO 2

reject1.then(
    (value) => {console.log(value)},
    (reason) => {console.log(reason)}
);

// CASO 3 la promesa se resuelve pero sin successHandler

fulfill1 // promesa => Resuelve a "Resuelto 1"
.then() // promesa => No tiene sucessHandler pero se resuelve a lo que se resolvió la promesa anterior, es decir resuelve a "Resuelto 1"
.then((value) => console.log(value));

// CASO 4 la promesa es rechazada pero no tiene errorHandler

reject1 // promesa => se rechazó
.then((value) => console.log(value)) // promesa => como no tiene errorHandler, se rechaza y le pasa el error al siguiente
.then((value) => console.log(value)) // promesa => como no tiene errorHandler tampoco, se rechaza y le pasa el error al siguiente
.then(null, (error) => console.log(error)); // tiene el errorHandler, maneja el error.

// OTRA FORMA de CASO 4:

reject1 // promesa => se rechazó
.then((value) => console.log(value))
.then((value) => console.log(value))
.then((value) => console.log(value))
.then((value) => console.log(value))
.catch((error) => console.log(error));
// En resumen, no importa en que lugar tenga el error en las promesas que no manejan el error, cuando suceda el error, se rechazan todas las promesas hasta llegar al catch.

// CASO 5 la promesa se resuelve y tengo successHandler y errorHandler

fulfill1
.then(
    (value) => {
        return "Te paso este valor"; //Este handler retorna un valor cuando se resuelve y lo pasa.
    },
    (error) => console.log(error)
)
.then((value) => console.log(value)); //Esta promesa toma el valor que le pasa (retorna) la promesa anterior al resolverse.

// fetch(url)
// .then(response => response.json())
// .then(data => dispatch({ type: "USUARIOS", payload: data }))

// CASO 6 

reject1 // La promesa se rechaza 
.then(
    (value) => { return "other value"}, //successHandler
    (error) => { return error }         //errorHandler
)
.then(value => console.log("successHandler: " + value)) // La promesa recibe como valor lo que retorna el Handler que se ejecute en la promesa anterior. En este caso se ejecuta errorHanlder y por ende le retorna el valor del error y lo toma como valor de su successHandler. Si no estuviera el return, no tomaría dicho valor.
//Para evitar que el valor del error se retorne al sucessHandler de la promesa siguiente, hay que cambiar "return" por "throw" como en el siguiente ejemplo:

reject1 // La promesa se rechaza 
.then(
    (value) => { return "other value"}, //successHandler
    (error) => { throw error }         //errorHandler
)
.then(
    value => console.log("successHandler: " + value),
    error => console.log("errorHandler: " + error)
)

// CASO 7

fulfill1
.then(
    (value) => { return fulfill2}, // promesa que retorna otra promesa (en realidad retorna la resolución de la promesa)
    (error) => { throw error }     // errorHandler
)
.then(
    value => console.log("successHandler: " + value), //value toma el valor de resolución de la promesa anterior retornada
    error => console.log("errorHandler: " + error)
)

//Si ahora en vez de retornar una promesa que siempre se resuelve, retornamos una promesa que siempre se rechaza, lo que se va a ejecutar en la siguiente promesa es el errorHandler porque en realidad lo que recibe es el rechazo de la promesa y por ende se tiene que ejecutar el error.

fulfill1 // La promesa se rechaza 
.then(
    (value) => { return reject1}, // promesa que retorna otra promesa (en realidad retorna el rechazo de la promesa)
    (error) => { throw error }     // errorHandler
)
.then(
    value => console.log("successHandler: " + value), //value toma el valor de resolución de la promesa anterior retornada
    error => console.log("errorHandler: " + error)
)
.catch(error => console.log(error)) //No se ejecuta porque el error de la promesa anterior tiene un return implicito y por ende finaliza la ejecución.