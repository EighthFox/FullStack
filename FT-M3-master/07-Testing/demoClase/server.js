const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

server.get("/students", (req, res) => {
    res.status(200).json([
        {   id: 1, name: "Miguel" },
        {   id: 2, name: "Viviana"},
        {   id: 3, name: "Emiliano"}
    ])
});

module.exports = server;