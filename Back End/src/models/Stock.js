const { DataTypes } = require("sequelize");
const sequelize = require("./connection");


const Stock = sequelize.define(
    "Stock",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          produto: {
            type: DataTypes.STRING,
            allowNull: false
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }
)

module.exports = Stock