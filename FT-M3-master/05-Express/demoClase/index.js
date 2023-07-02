const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const server = express();

//Ejemplo de middleware que cuando hacemos una petición a la ruta "/" se ejecutará el Middleware y luego continuará con next(), que es decir, va a la ruta "/"

server.use("/", (request, response, next) => {
    console.log("Estamos pasando por este Middleware");
    next();
});

//Morgan es un MiddleWare que ya tiene un next() implícito.
server.use(morgan("dev"));

//MiddleWare que se va a encargar de pasar la información recibida en formato JSON del Body a JavaScript
server.use(express.json());

//Use para routering
server.use("/users", usersRouter) //Le esta diciendo al servidor que ante cualquier petición que tenga ruta /users, usa usersRouter.

server.use("/posts", postsRouter)

server.listen("3001", () => {
    console.log("El servidor ya está funcionan en el puerto 3001")
}); //Por defecto lo hace en localhost.


/**
 * CLIENTE localhost:3000/users  => ruta del FRONT que dice que componente voy a mostar
 * RENDERIZAR UN COMPONENTE QUE QUIERO QUE ME MUESTR LOS USUARIOS
 * useEffect => que vaya a buscar la info de los usuarios
 * dispatch(action)
 * esa action retorna una función que hace un fetch.
 * fecht(localhost:3001/users) => ruta del BACK/SERVIDOR que me manda la información de los usuarios
 * .then(response=>response.json)
 */


// server.use("/users", (request, response, next) => {
//     console.log("Estamos pasando por este Middleware");
//     next();
// });

// server.get("/", (request, response) => {
//     response.send("Todo ok en la ruta /")
// });

// server.get("/users", (request, response) => {
//     response.send("Estamos en la ruta de users")
// });

// server.get("/posts", (request, response) => {
//     response.send("Estamos en la ruta de posts")
// });