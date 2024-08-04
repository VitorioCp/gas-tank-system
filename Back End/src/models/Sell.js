const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tabelas sincronizadas");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
  });

const Sell = sequelize.define("Sell", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  venda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  observation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Sell;
