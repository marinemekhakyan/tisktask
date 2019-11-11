module.exports = function (sequelize, DataTypes) {
    var Units = sequelize.define("Units", {

        unit_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        }
    });

    Units.associate = function (models) {
        Units.belongsTo(models.Tenants);
        Units.hasMany(models.Tickets);
    };

    return Units;
};
