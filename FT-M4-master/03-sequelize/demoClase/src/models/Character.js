const { DataTypes } = require('sequelize');

module.exports = (database) => {
    //Para definir un modelo, el nombre del modelo tiene que ser un string con Mayúscula y en singular, seguido de una configuración es decir, los campos o atributos que va a tener y que tipos de datos van a tener cada uno de esos campos:
    database.define("Character",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, //para que aumente automaticamente
            primaryKey: true, //para definir que sea PRIMARY KEY
        },
        name: {
            type: DataTypes.STRING,
            unique: true, //para definir que sea único e irrepetible.
            allowNull: false, //para NO permitir que sea NULL. Es decir no puede ser NULL
        },
        gender: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'), //colección de únicos valores que puede admitir este campo, otro da error.
            defaultValue: 'Alive', //si no le paso ningún valor, por defecto va a ser 'Alive'.
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false,
        }
    );
};