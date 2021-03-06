module.exports = function(sequelize, DataTypes) {
  var Tenants = sequelize.define("Tenants", {
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
    },

    property_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    property_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 140]
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

  Tenants.associate = function(models) {
    Tenants.hasOne(models.Units);
  };

  return Tenants;
};
