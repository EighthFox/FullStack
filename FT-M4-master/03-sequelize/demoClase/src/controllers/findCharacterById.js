const { Character, Episode } = require('../db');

const findCharacterById = async (id) => {
    const characters = await Character.findByPk(id,{
        include: {
            model: Episode, //Traigo el modelo Episodio
            attributes: ["name"], //Sólo traigo el atributo name de Episodio
            through: { //De los atributos agregados por sequelize de tiempo
                attributes: []
            }, //No quiero traer ninguno.
        }
    });
    if(!characters) throw new Error("Character doesn't exist");
    return characters;
};

module.exports = findCharacterById;