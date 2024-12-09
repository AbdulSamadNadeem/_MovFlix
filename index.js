const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')

mongoose.connect(process.env.CONN_STR , {
    serverSelectionTimeoutMS: 60000, 
    socketTimeoutMS: 60000,  
})
.then((db)=>{
    console.log(db)
    console.log("connection succesful")
})
.catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT_NUMBER , ()=>{
    console.log('server is started')
})