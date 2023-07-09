const { Character } = require('../db');

const deleteCharacter = async (id) => {
    const deletedCharacter = await Character.findByPk(id);
    const aux = {...deletedCharacter};
    await deletedCharacter.destroy();
    return aux;
};

module.exports = deleteCharacter;