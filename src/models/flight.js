"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Flight extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Flight.init(
        {
            airplaneid: { type: DataTypes.INTEGER, allowNull: false },
            srcAirportId: { type: DataTypes.INTEGER, allowNull: false },
            destAirportId: { type: DataTypes.INTEGER, allowNull: false },
            arrival: { type: DataTypes.DATE, allowNull: false },
            departure: { type: DataTypes.DATE, allowNull: false },
            flightNo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            price: { type: DataTypes.FLOAT, allowNull: false },
            boardingGate: DataTypes.STRING,
            availableSeats: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "Flight",
        }
    );
    return Flight;
};
