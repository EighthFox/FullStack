const express = require('express');
const morgan = require('morgan');
const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");


const server = express();
server.use(express.json()); //Para todo lo que vengan en formato json se transforme en un objeto de JS
server.use(morgan("dev")); //Para que la terminal me muestre lo que sucede en el servidor

server.use("/users", usersRouter);
server.use("/posts", postsRouter);

server.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = server;