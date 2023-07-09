const { Character } = require('../db');

const createCharacter = async ({ name, gender, status, origin, species, episodes }) => {
    const newCharacter = await Character.create({ name, gender, status, origin, species });
    newCharacter.addEpisodes(episodes); //El método addEpisodes permite establecer la relación enter el nuevo personaje y los episodios en los que aparece (un array de ids de episodios). Éste método se crea automáticamente cuando establecemos la relación:
    // Character.belongsToMany(Episode, { through:"CharacterEpisode" });
    // Episode.belongsToMany(Character, { through:"CharacterEpisode" });
    return newCharacter;
};

module.exports = createCharacter;