module.exports = function (sequelize, DataTypes) {
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

    role: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Users.associate = function (models) {
    Users.hasOne(models.Landlords);
    Users.hasOne(models.Tenants);

  }

  return Users;
}

