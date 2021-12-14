
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class chatCommands extends Model {}

  chatCommands.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
    },
    username: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'chatComments'
  });

  chatCommands.associate = (models) => {
    // associations can be defined here
  };

  return chatCommands;
};