const { Router } = require('express');
const { createPostHandler } = require('../handlers/postsHandlers');

const postsRouter = Router();

//postsRouter.get("/", createPostHandler);

postsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Estoy en detalle de POST ${id}`);
});

postsRouter.post("/", createPostHandler);

module.exports = postsRouter;