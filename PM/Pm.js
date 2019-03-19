const express= require('express');
const bodyParser= require('body-parser');
const PMmongo=require('./PMmongo');
const privateMessage =PMmongo.pm;
const blockList=PMmongo.messageBlockList;
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
       res.status(400)
    res.json({error : 'undefined parameter'});
    
   }
/** 
 * checking that all the parameters are string  
 * bad request is sent in case they are not of type strings
 */ 
else if (!
    (typeof req.body.receiver     === 'string' 
    &typeof req.body.messageBody  === 'string'
    & typeof req.body.subject     === 'string'
    & typeof owner                === 'string'))
   {
       // bad request is sent 
       res.status(400)
       res.json({error : 'parameter Type error'});
    
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
        
       res.status(403)
       res.json({error : 'parameterEmptyError'});
       
    }
else if(Object(req.body.subject).length>50)
   {
    res.status(403)
    res.json({error : 'overLengthedSubject'});
   }
   else if(false)
   {
    res.status(403)
    res.json({error : 'overLengthedSubject'});

   }
   else
   {
//  put here the check that user not found or the receiver not found
   
blockList.findOne({blocked:{$in:[owner,req.body.receiver] } ,blocker:{$in:[owner,req.body.receiver] }}
             ,function (err,result)
             {
                if(err)
                {
                  res.status(403)
                  res.json({error : 'blockedFromSending'});
                }
                else if(result!=null)
                {
                  res.status(403)
                  res.json({error : 'blockedFromSending'});

                }
                else
                {

// initialzing the message with our data 
  var message = new privateMessage(
        { 
             sender:   owner, 
             receiver: req.body.receiver, 
             subject: req.body.subject,
             messageBody:req.body.messageBody ,
             isRead:false ,
             messageDate: Date(),
             isBlocked:false

        }                        );
         // save   with fire back function  to see the error 
message.save(function(err)
        { 
                                 if(err)
                                 {
                                    // internal Server error 
                                   res.status(500)
                                   res.json({error : 'internalServerError'});

                                 }
                                  else
                                 {
                                    res.send(200);   // if everything worked as mentioned 
                                 }
        });

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
                  res.status(400)
                  res.json({error : 'parameterPassingError'});

        }
        else
        {

        
        
        // retriving all the messages sent to me (inbox)
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
                               'messageDate'  :1,
                               'isBlocked'    :1
                              }
      ,function(err,result){
                             if(err)
                             {
                                 // internal server error
                                 res.status(500)
                                 res.json({error : 'internalServerFindingError'}); 
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
                               'messageDate' :1,
                               'isBlocked'   :1
                              },
         function(err,result){
                                 if(err)
                                {     
                                         // internal server error
                                         res.status(500)
                                         res.json({error : 'internalServerFindingError'});
            
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
                  res.status(400)
                  res.json({error : 'badRequest'});
      

    }
  }
  // end of the retrieve function
 }
block(req,res)
{
let owner= req.param('username');
// check that the one going to be blocked alreay in our db
let toBeBlocked= req.body.receiverUsername;
if(toBeBlocked==undefined)
{
      res.status(400)
      res.json({error : 'badRequest'});

}
 else if(toBeBlocked=='')
{
  res.status(400)
  res.json({error : 'emptyParameter'});
}
else if(!(typeof toBeBlocked === "string"))
{
   res.status(400)
   res.json({error : 'parameterTypeError'});
}
else if(owner==toBeBlocked)
{
   res.status(403)
   res.json({error : 'selfBlockAlertError'});
}
else
{
   blockList.findOne({blocked:{$in:[owner,req.body.receiver] } ,blocker:{$in:[owner,req.body.receiver] }},
   function(err,result){
if(err)
{
   res.status(500)
   res.json({error : 'internalServerBlockingError'});
}
else if(result!=null)
{
   res.status(403)
   res.json({error : 'usersAlreadyOnBlockLists'});

}
else
{
blockList.create({blocker:owner,blocked:toBeBlocked},function(err)
{
if(err)
{res.status(500)
res.json({error : 'internalServerBlockingError'});
}
else
{
res.send(200);
}
});


}
 }); 
 
// end of if condition
} 



// end of block implementation
}

}// end of the class



module.exports= new PM();