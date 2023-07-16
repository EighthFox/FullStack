const { Sequelize } = require('sequelize');
const UserModel = require('./models/User.js');
const PostModel = require('./models/Post.js')
require('dotenv').config();

const { 
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_BDD
} = process.env;

//Conexión con la base de datos
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
    { logging: false }
);

//Modelos definidos
UserModel(sequelize);
PostModel(sequelize);

//Relaciones entre los modelos
const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

//Exporto
module.exports = { sequelize, ...sequelize.models };

