const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
    try{
        const { code, name, age, race, hp, mana } = req.query;
        const queries = { code, name, age, race, hp, mana };
        const characters = (queries.length > 0)
        ? await Character.findAll({
            where:{
                queries
            }
        })
        : await Character.findAll();
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).send("Characters not found")
    };
});

router.get("/:code", async (req, res) => {
    try{
        const { code } = req.params;
        const character = await Character.findByPk(code);
        if(!character) throw new Error(`El código ${code} no corresponde a un personaje existente`)
        res.status(200).json(character);
    } catch (error) {
        res.status(404).send(error.message)
    };
});

router.post("/", async (req, res) => {
    try{
        const { code, name, age, race, hp, mana } = req.body;
        if(!code || !name || !hp || !mana) return res.status(404).send("Falta enviar datos obligatorios");      
        const newCharacter = await Character.create({ code, name, age, race, hp, mana });
        res.status(201).json(newCharacter);
    } catch (error) {
        res.status(404).send("Error en alguno de los datos provistos");
    }
});

module.exports = router;
