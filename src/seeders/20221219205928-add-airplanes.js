"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
		await queryInterface.bulkInsert('Airplanes', [
			{
				modelNumber: 'Airbus A333-300',
				capacity: 440,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				modelNumber: 'Airbus A340-300',
				capacity: 295,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				modelNumber: 'Boeing 777-200',
				capacity: 440,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				modelNumber: 'Boeing 777-300',
				capacity: 550,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				modelNumber: 'Boeing 747-400',
				capacity: 660,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				modelNumber: 'Airbus A380-800',
				capacity: 853,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
