const express= require('express');
const bodyParser= require('body-parser');
const privateMessage =require('./PMmongo'); 

class PM {
    constructor()
    {
    }
  
Compose (req,res)    
{
/**  
*     To be implmented here checking the validtiy of the sender 
*     and the receiver is found in database
*/
// if the subject or the message or the receiver or the sender is undefined sending bad request
 
/**   if the url query is not as usual
*    if( Object.keys(req.param).length!=2)
* {
*
* // bad request is sent
* res.send(400); 
*
* }
*/
var owner=req.param('username');
   if( owner                 == undefined 
   || req.body.receiver      == undefined 
   || req.body.subject       == undefined
   || req.body.messageBody   == undefined )  
   
   {
       // bad request is sent
    res.send(400); 
    
   }
/** 
 * checking that all the parameters are string  
 * bad request is sent in case they are not of type strings
 */ 
else if (!
    (typeof req.body.receiver     === 'string' 
    &typeof req.body.messageBody  === 'string'
    & typeof req.body.subject     ==='string'
    & typeof owner                === 'string'))
   {
       // bad request is sent 
    res.send(400); 
    
   }
/**
*   if the subject or message body or the receiver username 
*   is empty sending forbidden request
*/
else if(
       req.body.receiver        ==''
    || req.body.subject         ==''
    || req.body.messageBody     ==''
    || owner                    =='')
    { 
        // sending forbidden request 
      res.send(403);  
       
    }
else
   {
//  put here the check that user not found or the receiver not found

         // initialzing the message with our data 
var message = new privateMessage(
        { 
             sender:   owner, 
             receiver: req.body.receiver, 
             subject: req.body.subject,
             messageBody:req.body.messageBody ,
             isRead:false ,
             messageDate: Date()

        }                        );
         // save   with fire back function  to see the error 
message.save(function(err)
        { 
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
  
  // end of compose function
}

Retrieve(req,res)
{
             // implementing here the user not found sync token 


         /*    if the url query is not as usual
         if( Object.keys(req.param).length!=2)
            {

                   // bad request is sent
                   res.send(400); 

            }
         */
             
      // if the boolean or sender is undefined or empty bad request is being sent 
      var owner=req.param('username');
      if(    req.body.mine        ==undefined
        ||   owner                ==undefined
          || owner                =='' 
             )
        {
                  // bad request is sent
           res.send(400); 

        }
        else
        {

        
        
        // retriving all the messages sent to me 
       if(req.body.mine===true)  
  {
        privateMessage.find( 
                              {receiver       :owner},
                              {'sender'       :1, 
                                _id           :1,
                               'isRead'       :1,
                               'subject'      :1,
                               'messageBody'  :1,
                               'receiver'     :1,
                               'messageDate'  :1
                              }
      ,function(err,result){
                             if(err)
                             {
                                 // internal server error
                               res.send(500); 
                             }
                            else
                             {
                                 // stringfing and setting the header automatically 
                               res.json(result); 
                             }
                 }).sort({messageDate :-1});

    }
    else if(req.body.mine===false)
    {

        privateMessage.find(
                              {sender: owner},
                              {'receiver'    :1, 
                                _id          :1,   
                               'isRead'      :1,
                               'subject'     :1,
                               'sender'      :1,
                               'messageBody' :1,
                               'messageDate' :1
                              },
         function(err,result){
                                 if(err)
                                {     
                                         // internal server error
                                    res.send(500); 
            
                                }
                                else
                                {
                                         // stringfing and setting the header automatically 
                                    res.json(result); 
            
                                }
            }).sort({messageDate :-1});


    }
  else
    {
                  //bad request 
             res.send(400); 
      

    }
  }
  // end of the retrieve function
 }



}// end of the class



module.exports= new PM();