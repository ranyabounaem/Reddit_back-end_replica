const express= require('express');
const bodyparser= require('body-parser');
const privatemessage =require('./PMmongo'); 
class PM {
    constructor()
    {
    }
  
Compose (req,res)    // to be implmented user not found and receiver not found
{
    // check the sender user is found or not here// check also the sender empty or not and all checks

// if the subject or the message or the receiver is undefined sending bad request
 if(req.param('subject')==undefined ||  req.param('messagebody')==undefined || req.param('receiver'==undefined))  
 {
 res.send(400); // bad request is sent 
}
// checking that all the parameters are string  bad request is sent in case they are not of type strings
 else if (!(typeof req.param('subject') === 'string' & typeof req.param('messagebody') === 'string'& typeof req.param('receiver') === 'string'))
  {
    res.send(400); // bad request is sent 
 }
// if the subject or message body or the receiver username is empty sending forbidden request
else if(req.param('subject')==''||req.param('messagebody')==''|| req.param('receiver')=='')
{
res.send(403);   // sending forbidden request 
}
else
{
//  put here the check that user not found or the receiver not found
// initialzing the message with our data 
var message = new privatemessage({ sender: req.param('sender'), receiver: req.param('receiver'), subject: req.param('subject'),messagebody:req.param('messagebody') ,IsRead:false });
 
// save   with fire back function  to see the error 
message.save(function(err,body){ 
if(err)
{
res.send(500); // internal Server error 
}
else
{
res.send(200);   // if everything worked as mentioned 
}
});

}
}

Retrieve(req,res)
{
//res.sendFile(__dirname+'/post.html');
// implementing here the user not found sync token 
// if the boolean is undefined bad request is being sent 
/*
if(req.param('mine'==undefined))
{

res.send(400); // bad request is sent

}

if(req.param('mine')===true)  // retriving all the messages sent to me 
{
    // here kefah shall be replaced by the username from the synctoken
    privatemessage.find({receiver:'kefah'},function(err,result){
if(err)
{
res.send(500); // internal server error

}
else
{
res.json(result); // stringfing and setting the header automatically 

}
});
*/

privatemessage.find({receiver:'kefah'},function(err,result){
    if(err)
    {
    res.send(500); // internal server error
    
    }
    else
    {
    res.json(result); // stringfing and setting the header automatically 
    
    }
    });
}  // end of the retrieve function




} // end of the class






module.exports= new PM();