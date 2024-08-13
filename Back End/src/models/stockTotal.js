const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const StrockTotal = sequelize.define("StrockTotal", {
  totalgas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },    
  totalagua: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = StrockTotal;
