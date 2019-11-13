module.exports = function(sequelize, DataTypes) {
  var Tenants = sequelize.define('Tenants', {
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

    primary_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 16]
      }
    },

    primary_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isEmail: true
      }
    }
  });

  Tenants.associate = function(models) {
    Tenants.hasOne(models.Units);
  };

  return Tenants;
};
