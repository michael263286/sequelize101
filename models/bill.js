'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.Customer)
      Bill.belongsTo(models.Category)
    }
  }
  Bill.init({
    company: DataTypes.TEXT,
    paid: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    dueBy: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};