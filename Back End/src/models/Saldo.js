// src/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Saldo = sequelize.define('Saldo', {
 
  valores: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  observacao: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Saldo;
