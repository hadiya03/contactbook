// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hadiyamk03:hadiyamk@cluster0.3ixbiue.mongodb.net/had?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
//to catch error when password is wrong
.catch((err)=>{
    console.log(err)
})