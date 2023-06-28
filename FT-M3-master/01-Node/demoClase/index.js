const { NOMBRE1, NOMBRE2 } = require("./const/nombres.js");
const axios = require("axios");

const users = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => console.log(response.data));

console.log(NOMBRE1);
console.log(NOMBRE2);