'use strict';

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
    await queryInterface.bulkInsert('Customers',[
      {
      username: 'drsherman',
      password: '$2b$10$pZdGG8WU3RbBOZDF7LLJt.aedb3GsWmjEy2UmwhOBWP97mH7Hnlq6',
      phone: '0243893625',
      email: 'drsherman@shermandental.com.au',
      address: 'P. Sherman, 42 Wallaby Way, Sydney, NSW, 2000',
      createdAt: new Date(),
      updatedAt: new Date(),
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
