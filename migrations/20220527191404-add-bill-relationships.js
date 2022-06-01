'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Bills','CustomerId',{
      type:Sequelize.INTEGER,
      references:{
        model:'Customers',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    })

    await queryInterface.addColumn('Bills','CategoryId',{
      type:Sequelize.INTEGER,
      references:{
        model:'Categories',
        key:'id'
      },
      onDelete:'SET NULL',
      onUpdate:'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
