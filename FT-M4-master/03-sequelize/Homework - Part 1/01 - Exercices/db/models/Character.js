const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code:{
         type: DataTypes.STRING(5),
         primaryKey: true,
         validate: {
            notContains(value) {
               if (value.toUpperCase() == 'HENRY') {
                 throw new Error('This value is not allowed!');
               }
            }
         }
      },
      name:{
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         validate: {
            notContains: ["Henry", "SoyHenry", "Soy Henry"],
         }
      },
      age:{
         type: DataTypes.INTEGER,
      },
      race:{
         type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
         defaultValue: 'Other',
      },
      hp: {
         type: DataTypes.FLOAT,
         allowNull: false,
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: false,
      }
   },
      {
         timestamps: false,
      }
   );
};
