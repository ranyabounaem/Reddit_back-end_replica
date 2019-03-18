const mongoose= require('mongoose');
const pmDb=require('./PMmongo');    // differ when u are running on another pc
const express=require('express');
var app=express();
const bodyParser=require('body-parser');
const privateMessage =require('./Pm');
const urlEncoded=bodyParser.urlencoded({extended:true});
mongoose.connect('mongodb://localhost/KefahDbPm');
mongoose.connection.once('open',function(){
 
    console.log('connection carried succesfully'); 
}).on('error',function(){

    console.log('connection error:');
});
app.use(bodyParser.json()); // for parsing application/json
app.listen(3000);

app.get('/pm',(req, res) =>  privateMessage.Retrieve(req,res));

app.post('/pm',urlEncoded,(req,res) =>  privateMessage.Compose(req,res));