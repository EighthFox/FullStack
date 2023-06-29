const { NOMBRE1, NOMBRE2 } = require("./const/nombres.js");
const axios = require("axios");

const users = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)

// console.log(NOMBRE1);
// console.log(NOMBRE2);    
console.log(users);

//users.map((user) => (console.log(user)));
// console.log(arrayName);