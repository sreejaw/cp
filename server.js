var express=require('express')
var mongoose=require('mongoose')

var app=express()
app.use(express.json())

// connect to mongo
mongoose.connect("mongodb://localhost:27017/empdb")
var db=mongoose.connection
// checking connection
db.on("error",()=>{
    console.log("Error in connection")
})

db.once("open",()=>{
    console.log("Connection established")
})

var empSchema=new mongoose.Schema({
    name:String,
    salary:Number,
    age:Number
})
var empModel=mongoose.model("emp",empSchema,"emp")


app.post("/addemp",(req,res)=>{
    const data = new empModel({
        name: req.body.name,
        salary:req.body.salary,
        age: req.body.age
    })
    data.save()
    res.end()
})
// res.send("Hello world")
app.get("/emps",(req,res)=>{
    empModel.find({},function(err,result){
        res.send(result)
    })
})
app.delete("/deleteemp/:name",(req,res)=>{
    empModel.remove({
        name:req.params.name,
    },(err,result)=>{
        res.send(result)
    })
})

app.put("/updateemp/:name",(req,res)=>{
    empModel.update({
        name:req.params.name},req.body,(err,result)=>{
            res.send(result)
    })
})

app.get('/index', function(req, res) {
    res.sendFile("../index.html",__dirname);
 })
app.listen(2000,()=>{
    console.log("Server started")
})