module.exports = function (sequelize, DataTypes) {
    var Tickets = sequelize.define("Tickets", {
        request_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        open_date: {
            type: DataTypes.DATE, //verify
            allowNull: false,
            // validate: {
            //   len: [1, 140]
            // }
        },

        close_date: {
            type: DataTypes.DATE, //verify
            allowNull: false,
            // validate: {
            //   len: [1, 140]
            // }
        }

    });

    //no need to associate tickets to other models as it's already associated with units in unit.js

    return Tickets;
};
