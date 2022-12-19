'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kazi Nazrul Islam Airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'PALAM AIRPORT',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'INDIRA GANDHI INTERNATIONAL AIRPORT ',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Kempegowda International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Mangaluru International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Mysuru Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Rajiv Gandhi International Airport',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'NAVI MUMBAI AIRPORT',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
