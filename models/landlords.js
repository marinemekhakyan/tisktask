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

      property_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140],
          is: /^[a-zA-Z ]+$/i //can probably be skipped
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
        type: DataTypes.INTEGER,
        allowNull: false,
        // validate: {
        //   len: [, 10]
        // }
      },

      personal_phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // validate: {
        //   len: [, 10]
        // }
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
      },

      unit_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [10]
        }
      },

    });
  
    // Landlords.associate = function(models) {
    //   Landlords.belongsToMany(models.Properties, {
    //
    //   });
    // };
  
    return Landlords;
  };
  