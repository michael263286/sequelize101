'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Bill)
    }
  }
  Customer.init({
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    email: DataTypes.TEXT,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};