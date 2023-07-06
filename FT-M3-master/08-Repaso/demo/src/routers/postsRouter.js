const { Router } = require('express');
const {
    getPosts,
    getPostsById,
    getPostsByUserId,
    createPost,
    updatePost,
    deletePost,
} = require("../models/controllers")

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    try {    
        const { userId } = req.query;
        if(userId){
            const posts = getPostsByUserId(userId);
            res.status(200).json(posts);
        } else {
            const posts = getPosts();
            return res.status(200).json(posts);
        }
    } catch(error){
        res.status(400).json(error.message);
    }
});

postsRouter.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const posts = getPostsById(id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

postsRouter.post("/", (req, res) => {
    try {
        const { title, contents, userId } = req.body;
        if (!title || !contents || !userId) throw new Error("Missing info");

        const newPost = createPost(title, contents, userId);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

postsRouter.put("/", (req, res) => {
    try {
        const { userId, title, contents, id } = req.body;
        if(!userId || !title || !contents || !id) throw new Error("Missing info");
        const updatedPost = updatePost(userId, title, contents, id);
        res.status(200).json(updatedPost);
    } catch(error) {
        res.status(400).json(error.message);
    }
});

postsRouter.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = deletePost(id);
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = postsRouter;