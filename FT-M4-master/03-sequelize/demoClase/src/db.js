require("dotenv").config(); //Para poder trabajar con las variables de entorno.

const { USER , PASSWORD , HOST , PORT , BDD } = process.env; //Para traer las variables de entorno que ya están disponibles.

const { Sequelize, DataTypes } = require('sequelize');
const CharacterFunction = require('./models/Character');
const EpisodeFunction = require('./models/Episode');

//Crear la conexión con la base de datos
//Se necesita !usuario de postgres, !password de postgres, !localhost de donde esta la DB, !puerto (5432) y el nombre de la DB en este ejemplo. Para no exponer esta información voy a la raiz de mi aplicación, es decir, en la carpeta principal donde esta mi package.json y node_modules. y creo el archivo .env.

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, //url de conexión donde tenemos el usuario, el password, el host, el puerto y el nombre de la base de datos.
    { logging : false } //Es para que no aparezca más en la terminal todo datos de que se eliminó la tabla anterior, se creo la nueva, etc. Toda esa descripción a la hora de ejecutar el database.define
);

CharacterFunction(database);
EpisodeFunction(database);

const { Character, Episode } = database.models; //Tengo los modelos independientes.

Character.belongsToMany(Episode, { through:"CharacterEpisode" }); //Le indico que la relación es con Episode y la tabla intermedia es "CharacterEpisode"
Episode.belongsToMany(Character, { through:"CharacterEpisode" });//Le indico que la relación es con Character y la tabla intermedia es "CharacterEpisode"

module.exports = {
    database,
    ...database.models, //Para exportar todos los modelos que existan
}