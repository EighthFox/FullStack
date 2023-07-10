const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const db = new Sequelize(
   'postgres://postgres:SQL2091@localhost:5432/henrydatabase',
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

const { Character, Ability, Role } = db.models;

Character.belongsToMany(Role, { through:"CharacterRole" });
Role.belongsToMany(Character, { through:"CharacterRole" });

Character.belongsToMany(Ability, { through:"CharacterAbility" });
Ability.belongsToMany(Character, { through:"CharacterAbility" });

module.exports = {
   ...db.models,
   db,
   Op,
};
