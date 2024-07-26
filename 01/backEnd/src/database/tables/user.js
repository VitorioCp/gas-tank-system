const Sequelize = require('sequelize')
const database = require('../../database')

const User = database.define('user', {
    id: { 
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING(15),
        allowNull:false,
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
    }

})

module.exports = User;