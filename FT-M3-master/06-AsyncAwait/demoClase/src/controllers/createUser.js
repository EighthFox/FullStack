let data = require("../utils/data");

// Este controller recibe la información de un user y lo crea en la BDD
const createUser = async ({ name, email, username}) => {
    if(!name || !email || !username) throw new Error("Faltan datos");

    const newUser = { name, email, username }
    data.push(newUser);
    return newUser;
};

module.exports = createUser;