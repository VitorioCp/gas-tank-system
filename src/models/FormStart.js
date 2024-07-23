// src/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const FormStart = sequelize.define('User', {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  troco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  troca: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  gasTotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  gasCheio: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  gasVazio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  aguaTotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  aguaCheia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  aguaVazia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = FormStart;
