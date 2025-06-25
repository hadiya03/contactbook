const mongoose = require('mongoose');

//schema
var schema=mongoose.Schema({
    Name:String,
    phone:Number,
    Email:String
})
//model creation
//pass schema,employee is model name
var ContactModel=mongoose.model("contact",schema)
module.exports=ContactModel