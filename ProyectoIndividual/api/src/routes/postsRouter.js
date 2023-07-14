const { Router } = require('express');

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(200).send("Estoy en posts")
});

postsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Estoy en detalle de POST ${id}`);
});

postsRouter.post("/", (req, res) => {
    res.status(200).send("Voy a crear un posts")
});

module.exports = postsRouter;