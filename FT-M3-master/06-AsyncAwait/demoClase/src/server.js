const express = require("express");
const router = require("./router");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));  //La petición primero pasa por morgan y luego sigue al router.
server.use(express.json());

server.use(router); //Con el .use estamos indicando que la petición (request) tome este camino, llegue hasta acá. Y por ende se va a ir hasta el router. Luego en el router va a ir hasta su pongo final (endpoint) que indica la ruta final.

module.exports = server;