// src/models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Notas = sequelize.define("Notas", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  observacoes:{
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Notas;
