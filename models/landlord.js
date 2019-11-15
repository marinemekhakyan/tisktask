module.exports = function(sequelize, DataTypes) {
  var Landlords = sequelize.define("Landlords", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 16]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [12, 200]
      }
    }
  });

  Landlords.associate = function(models) {
    Landlords.hasMany(models.Properties);
  };

  return Landlords;
};
