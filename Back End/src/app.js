const express = require('express')
const routes = require('./router')
const loginRouter = require('./router')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());
app.use('/', routes);


module.exports = app;