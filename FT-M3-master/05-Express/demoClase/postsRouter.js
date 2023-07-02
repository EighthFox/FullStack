const express = require("express");

const postsRouter = express.Router();

postsRouter.get("/", (request, response) => {
    response.send("Estoy en el GET de posts")
});

module.exports = postsRouter;