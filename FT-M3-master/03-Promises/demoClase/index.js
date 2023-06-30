// import axios from "axios";

// //Siempre se coloca primero el éxito y luego el error.
// axios.get("https://jsonplaceholder.typicode.com/users").then(
//     (response) => console.log(response.data),  //Recibe el nombre de successHandler
//     (error) => console.log("Todo salio mal", error) //Recibe el nombre de errorHandler
// );

//Crear una promesa (es una clase nativa) que recibe dos metodo según si se cumple la promesa o si se rechaza:

const miPromesa = new Promise((resolve, reject) => {
    resolve("Error") //Si la promesa se resuelve, devuelve el string.
});

miPromesa.then(
    (response) => console.log("Todo bien: " + response),
    (error) => console.log("Todo mal: " + error)
);

//El .then de una promesa, retorna también una promesa. Por eso en el fetch le hacemos otro .then seguido ya que aplicamos el metodo a otra promesa:

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => (response.json()))
//     .then((data) => console.log(data))

miPromesa.catch((error) => (console.log(error)))