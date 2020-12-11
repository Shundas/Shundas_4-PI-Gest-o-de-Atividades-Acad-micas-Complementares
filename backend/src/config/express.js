const express = require('express')
const cors = require('cors')
const cookie = require('cookie-parser')
const body = require('body-parser')
const compression = require('compression')
const routes = require('../routes');
const path = require('path');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(body.json())
app.use(body.urlencoded({ extended: true }))
app.use(cors())
app.use(compression())
app.use(cookie())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, "..", "..", "tmp", "uploads")));

module.exports = app
