'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING, 
    created_at:DataTypes.DATE,
    updated_at:DataTypes.DATE 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at', // Ubah nama kolom untuk createdAt
    updatedAt: 'updated_at',  // Ubah nama kolom untuk updatedAt
    timestamps: true
  });
  return Users;
};