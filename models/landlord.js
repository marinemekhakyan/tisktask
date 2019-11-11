module.exports = function(sequelize, DataTypes) {
  var Landlords = sequelize.define('Landlords', {
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

    property_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 16]
      }
    },

    personal_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 16]
      }
    },

    property_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isEmail: true
      }
    },

    personal_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isEmail: true
      }
    }
  });

  Landlords.associate = function(models) {
    Landlords.hasMany(models.Properties);
  };

  return Landlords;
};
