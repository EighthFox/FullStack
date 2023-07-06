// const express = require('express');
const { Router } = require('express');
const {
    getUsers,
    getUsersByName,
    getUsersById,
    createUsers,
    updateUser,
    deleteUser,
} = require("../models/controllers")

// const usersRouter = express.Router();
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    const { name } = req.query;
    if(name){
        const users = getUsersByName( name );
        if(users["error"]) return res.status(404).json(users);
        else return res.status(200).json(users);
    } else {
        const users = getUsers();
        return res.status(200).json(users);
    }
});

usersRouter.post("/", (req,res) => {
    const { name, surname, age, mail } = req.body;
    if(!name || !surname || !age || !mail )
     return res.status(404).json({ error: "Missing info" });
    
    const newUser = createUsers( name, surname, age, mail );
    res.status(200).json(newUser);
});

usersRouter.get("/:id", (req,res) => {
    const { id } = req.params;
    const user = getUsersById(id);

    if(user["error"]) return res.status(404).json(user);
    else res.status(200).json(user);
});

usersRouter.put("/", (req,res) => {
    const { id, name, surname, age, mail } = req.body;
    if(!id || !name || !surname || !age || !mail)
     return res.status(404).json({ error: "Missing info" });

    const updatedUser = updateUser(id, name, surname, age, mail);
    if(updatedUser["error"]) return res.status(404).json(updatedUser);
    else res.status(200).json(updatedUser);
});

usersRouter.delete("/:id", (req,res) => {
    const { id } = req.params;
    const deletedUser = deleteUser(id);

    if(deletedUser["error"]) return res.status(404).json(deletedUser);
    else res.status(200).json(deletedUser);
});

module.exports = usersRouter;