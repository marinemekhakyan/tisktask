module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    request: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    tenant_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 3
      }
    },
    open_date: {
      type: DataTypes.DATE, //verify
      allowNull: false,
      defaultValue: new Date()
    },

    close_date: {
      type: DataTypes.STRING, //verify
      allowNull: true,
      defaultValue: null
    }
  });

  //no need to associate tickets to other models as it's already associated with units in unit.js

  return Tickets;
};
