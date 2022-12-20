"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Flights", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            airplaneid: { type: Sequelize.INTEGER, allowNull: false },
            srcAirportId: { type: Sequelize.INTEGER, allowNull: false },
            destAirportId: { type: Sequelize.INTEGER, allowNull: false },
            arrival: { type: Sequelize.DATE, allowNull: false },
            departure: { type: Sequelize.DATE, allowNull: false },
            flightNo: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            price: { type: Sequelize.FLOAT, allowNull: false },
            boardingGate: {
                type: Sequelize.STRING,
            },
            availableSeats: { type: Sequelize.INTEGER, allowNull: false },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Flights");
    },
};
