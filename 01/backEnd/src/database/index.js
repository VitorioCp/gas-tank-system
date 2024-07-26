const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres", "docker", "docker", {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize;