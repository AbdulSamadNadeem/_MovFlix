const express = require('express')
const app = express()
const Routes = require('./Routes/Routes')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/api/movies' , Routes)

module.exports = app