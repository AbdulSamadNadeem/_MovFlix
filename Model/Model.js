const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name : {
        type : String,
        required: [true , 'this is required'],
        unique:true,
        trim:true
    },
    description : {
        type : String,
        required: [true , 'this is required']
    },
    duration : Number,
    ratings : {
        type : Number
    },
    totalratings:{
        type:Number
    },
    releaseyear:{
        type:Number,
        required: [true , 'this is required']
    },
    releasedate:{
        type:Date
    },
    createdat:{
        type:Date,
        default:Date.now()
    },
    genres:{
        type:[String],
        required: [true , 'this is required']
    },
    directors:{
        type:[String],
        required: [true , 'this is required']
    },
    coverimage:{
        type:[String],
        required: [true , 'this is required']
    },
    actors:{
        type:[String],
        required: [true , 'this is required']
    }
})

const Model = mongoose.model('Movie' , Schema)

module.exports = Model