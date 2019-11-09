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
        },

        first_name_tenant: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        last_name_tenant: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        first_name_manager: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        last_name_manager: {
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

        unit_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 10]
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

    // Tickets.associate = function(models) {
    //   Tickets.belongsToMany(models.Tenants, {
    //     through: ""
    //   });
    // };

    return Tickets;
};
