// how to make schema 

const mongoose = require('mongoose')

const { Schema }=mongoose; // restructuring , taking out schema from mongoose

const UserSchema = new Schema({
    name:{
        type: String ,
        required: true 
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('user',UserSchema) 
//first para -> name of collection to be created 
//second para -> name of our schema
// using model to create , delete etc oprn on this schema

