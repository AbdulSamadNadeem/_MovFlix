const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')

mongoose.connect(process.env.CONN_STR)
.then((db)=>{
    console.log("connection succesful")
})
.catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT_NUMBER , ()=>{
    console.log('server is started')
})