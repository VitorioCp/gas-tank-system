// src/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const bcrypt = require('bcrypt');

sequelize.sync({ force: true }).then(() => {
  console.log('Tabelas sincronizadas');
}).catch(error => {
  console.error('Erro ao sincronizar tabelas:', error);
});


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes,
    default: new Date()
  }

}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      // Criptografar a senha antes de criar um novo usuário
      user.password = await bcrypt.hash(user.password, 10);
    },
    beforeUpdate: async (user) => {
      // Criptografar a senha antes de atualizar um usuário
      if (user.password && user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }
});

module.exports = User;
