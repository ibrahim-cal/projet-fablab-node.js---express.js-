const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const LigneFacturation = sequelize.define("ligneFacturation",
        {
            nomMachine: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    len: [3, 100],
                },
            },
            prix: {
                type: DataTypes.FLOAT(20),
                allowNull: false,      
            },
            duree: {
                type: DataTypes.INTEGER(50),
                allowNull: false,
            },
            sousTotal: {
                type: DataTypes.DECIMAL(65),
                allowNull: false,

            },
            url: {
                type: DataTypes.VIRTUAL,
                get() {
                    return `/catalog/ligneFacturation/${this.id}`;
                },
            },
        });
    return LigneFacturation;
};