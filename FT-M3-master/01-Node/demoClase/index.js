const { NOMBRE1, NOMBRE2 } = require("./const/nombres.js");
const axios = require("axios");

const miUsers = axios
    .get("https://jsonplaceholder.typicode.com/users").then(
        (response) => console.log(response.data),
        (error) => console.log("Todo salio mal", error)
    );

// console.log(NOMBRE1);
// console.log(NOMBRE2);    
console.log(miUsers);

//users.map((user) => (console.log(user)));
// console.log(arrayName);