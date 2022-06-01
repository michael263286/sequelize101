'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bills', [
      {
        company: 'Georgia Power',
        paid: false,
        amount: 159_75,
        dueBy: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        CustomerId: 1,
        CategoryId: 1
      }
    ])

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
