const express = require("express");
const  path = require("path");
const cors = require("cors");
const db = require("./config/mongoose");
const StudentData = require("./models/studentData");

const app = express();
const port  = 8000;
app.use(cors());
app.use(express.json());


app.get('/', function(req, res, next) {
    res.send("hello world!");
})

app.post("/register", function(req,res){
    const {name, password,email,phone,address,batch,branch,dob} = req.body;

    StudentData.create({
        name,
        password,
        email,
        phone,
        address,
        batch,
    }, function(err,newData){
        if(err){
            console.log(err);
        }else{
            res.send({message:"data added successfully"}, newData);
        }
    })
    console.log(req.body);
})
app.post("/login", function(req,res){
    const {uname , pass , role} = req.body;
    console.log(uname, pass, role);
})



app.listen(port , function(){
    console.log("server is running on port: " + port);
})