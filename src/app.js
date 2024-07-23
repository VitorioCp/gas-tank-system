const express = require('express')
const routes = require('./router')
const loginRouter = require('./router')


const app = express()
app.use(express.json());
app.use('/', routes);

module.exports = app;