const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
app.use(cors());

//testing db so password is exposed
mongoose.connect(`mongodb://mo18582_calc:_2Qa6H24w6L78307L4dT_ZDs&2Fr{,@136.243.156.104:27017/mo18582_calc`)

app.use(bodyParser.json())
const historyRoutes = require('./routes/history');

app.use('/', historyRoutes)
module.exports = app;