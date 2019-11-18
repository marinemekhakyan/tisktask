module.exports = function(sequelize, DataTypes) {
  var Properties = sequelize.define('Properties', {
    property_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
        // is: /^[a-zA-Z ]+$/i //can probably be skipped
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
      allowNull: false
    }
  });

  Properties.associate = function(models) {
    Properties.hasMany(models.Units);
  };

  return Properties;
};
