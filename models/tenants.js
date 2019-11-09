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
        type: DataTypes.INTEGER,
        allowNull: false,
        // validate: {
        //   len: [, 10]
        // }
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
          len: [1, 140],
          is: /^[a-zA-Z ]+$/i //can probably be skipped
        }
      },
      unit_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [10]
        }
      },
      property_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
    });
  
    // Tenants.associate = function(models) {
    //   Tenants.belongsToMany(models.Services, {
    //     through: ""
    //   });
    // };
  
    return Tenants;
  };
  