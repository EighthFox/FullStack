let data = require("../utils/data");

// Este controller se encarga de obtener y retornar la información de todos los usuarios.
const getUsers = () => {
    return data;
};
//Para simular una función asincrona:
// const getUsers = async () => {
//     throw Error("Hubo un error");
// };

module.exports = getUsers;