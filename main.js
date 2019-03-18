const mongoose= require('mongoose');
const pmdb=require('./PMmongo');    // differ when u are running on another pc
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
const privatemessage =require('./Pm');
const urlencoderparser=bodyparser.urlencoded({extended:false});
mongoose.connect('mongodb://localhost/KefahDbPm');
mongoose.connection.once('open',function(){
 
    console.log('connection carried succesfully'); 
}).on('error',function(){

    console.log('connection error:');
});
app.use(bodyparser.json()); // for parsing application/json
app.listen(3000);

app.get('/pm',(req, res) =>  privatemessage.Retrieve(req,res));
app.post('/pm',urlencoderparser,(req,res) =>  privatemessage.Compose(req,res));