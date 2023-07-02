const express = require("express");

const usersRouter = express.Router();

// usersRouter.get("/", (request, response) => {
//     response.send("Estoy en el GET de Users")
// });

usersRouter.get("/", (request, response) => {
    const { name } = request.query
    if(!name) return response.send("Te devuelvo todos los usuarios");
    return response.send(`Te estoy mandando la información del usuario ${name}`)
});

//El post sirve para enviar y guardar algo en la base de datos.

usersRouter.post("/", (request, response) => {
    const { name, mail, birth } = request.body;
    console.log(name);
    console.log(mail);
    console.log(birth);
    if( name && mail && birth ){
        response.status(200).send("Recibí bien todos los datos")
    } else {
        response.status(400).send("Me faltan datos. No recibí todos los datos necesitados")
    }
});

usersRouter.get("/:id", (request, response) => {
    const { id } = request.params;
    response.send(`Estas pidiendo la información del usuario ${id}`);
});

module.exports = usersRouter;