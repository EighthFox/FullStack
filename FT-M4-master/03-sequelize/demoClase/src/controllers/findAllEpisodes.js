const { Episode } = require('../db'); //Traigo el modelo Episode que no es otra cosa más que interectuar con la tabla Episodes.

const findAllEpisodes = async () => {
    const episodes = await Episode.findAll(); //método para traer todos los registros de episodio, es decir, los episodios. Como este metodo va a retornar una promesa necesitamos un async await. Y como puede haber un error durante la columna tengo que utilizar el try-catch.
    return episodes;
};

module.exports = findAllEpisodes;