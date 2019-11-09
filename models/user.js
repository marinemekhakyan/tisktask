module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    })
return Users;
}

