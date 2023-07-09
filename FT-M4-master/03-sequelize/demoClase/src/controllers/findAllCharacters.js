const { Character, Episode } = require('../db'); //Traigo el modelo Episode que no es otra cosa más que interectuar con la tabla Episodes.

const findAllCharacters = async (query) => {
    const characters = await Character.findAll(
        {
            where: query, //Argumento para filtrar la busqueda
            include: {
                model: Episode, //Traigo el modelo Episodio
                attributes: ["name"], //Sólo traigo el atributo name de Episodio
                through: { //De los atributos agregados por sequelize de tiempo
                    attributes: []}, //No quiero traer ninguno.
            },
        } //Se pasa el argumento include para poder traer los episodios y unirlos "join" a la tabla Characters.
    );
    return characters;
};

module.exports = findAllCharacters;