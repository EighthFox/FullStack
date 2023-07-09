const express = require('express');

const findAllEpisodes = require('./controllers/findAllEpisodes');
const createEpisode = require('./controllers/createEpisode');
const findAllCharacters = require('./controllers/findAllCharacters');
const createCharacter = require('./controllers/createCharacter');
const findCharacterById = require('./controllers/findCharacterById');
const deleteCharacter = require('./controllers/deleteCharacter');
const createBulkEpisodes = require('./controllers/createBulkEpisodes');

const server = express();

server.use(express.json());

server.get("/character", async (req, res) => {
    const { status } = req.query; //Status pasado por URL;
    try{
        const characters = status
        ? await findAllCharacters({ status })
        : await findAllCharacters();

        res.status(200).json(characters);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

server.get("/character/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const characters = await findCharacterById(id);
        res.status(200).json(characters);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

server.post("/character", async (req, res) => {
    try{ //Falta hacer una validación previa asegurando que name y status existe y que status sea una de las tes posibilidades.
        const { name, gender, status, origin, species, episodes } = req.body;
        const newCharacter = await createCharacter({
            name,
            gender,
            status,
            origin,
            species,
            episodes,
        });
        res.status(200).json(newCharacter);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

server.get("/episode", async (req, res) => {
    try{
        const episodes = await findAllEpisodes();
        res.status(200).json(episodes);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

server.post("/episode", async (req, res) => {
    try{
        const { name } = req.body;
        const newEpisode = await createEpisode(name);
        res.status(200).json(newEpisode);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

server.post("/episode/bulk", async (req, res) => {
    try{
        const { episodes } = req.body;
        const created = await createBulkEpisodes(episodes);
        res.status(200).json({ reponse: "created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})

server.delete("/character/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedCharacter = await deleteCharacter(id);
        res.status(200).json(deletedCharacter);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = server;