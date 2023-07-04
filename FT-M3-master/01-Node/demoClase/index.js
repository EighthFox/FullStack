const { NOMBRE1, NOMBRE2 } = require("./const/nombres.js");
const axios = require("axios");

const getUsers = async () => {
    const miUsers = await axios
    .get("https://jsonplaceholder.typicode.com/users").then(
        (response) => {response.data.json()},
        console.log(miUsers)
    );
    
}
// console.log(NOMBRE1);
// console.log(NOMBRE2);    


//users.map((user) => (console.log(user)));
// console.log(arrayName);