//importing express 

const express = require('express')
//import connection
require("./connection")
var conModel=require("./model/contact")
var cors = require('cors')
//initialize express to a variable app 
const app = express()
app.use(cors())
// midd
app.use(express.json());

//api creation
app.get('/', (req, res) => {
  res.send("hello world")
})

//trail api
app.get('/trail', (req, res) => {
  res.send("this is a trail message")
})


//add api
app.post('/add',async(req,res)=>{
   try{
        await conModel(req.body).save()
        res.send({message:"data added"})
   }catch(error){
       console.log(error)
   }
})

//view api
app.get('/view',async(req,res)=>{
    try{
        const data = await conModel.find()
        res.send(data)
    }catch(error){
         console.log(error)
    }

    


})

//delete api
app.delete("/delete/:phone",async(req,res)=>{
     await conModel.findByIdAndDelete(req.params.phone)
     res.send({message:"data deleted"})
})

//update api
app.put("/update/:phone",async(req,res)=>{
    await conModel.findByIdAndUpdate(req.params.phone,req.body)
    res.send({message:"data updated"})
})



//port setting
app.listen(3005,()=>{
    console.log("port is running at 3005")
})