const express = require('express');
const bodyParser = require('body-parser');
const PMmongo = require('./PMmongo');
const privateMessage = PMmongo.pm;
const blockList = PMmongo.messageBlockList;
class PM {
   constructor() {

   }


   markreadall(req, res) {

      let owner = req.params.username;
      // request is true when he needs to mark read and false when he needs to unread this message
      let isReadRequest = req.body.isReadRequest;
      if (owner == undefined
         || isReadRequest == undefined
         || typeof owner != 'string'
         || typeof isReadRequest != 'boolean') {
         res.send(400);
         return;

      }
      privateMessage.updateMany({ receiverUsername: owner }, { isRead: isReadRequest }, function (err, result) {
         if (err) {
            res.status(500);
            res.json({ "error": "internalServerError" });

         }
         else if (result == null) {
            res.status(500);
            res.json({ "error": "noMessageNotFound" });
         }
         else {
            res.send(200);
         }

      });

   }

   delete(req, res) {
      let messageId = req.body.messageId;
      let owner = req.params.username;
      // request is true when he needs to mark read and false when he needs to unread this message
      if (owner == undefined
         || messageId == undefined
         || typeof owner != 'string'
         || typeof messageId != 'string') {
         res.send(400);
         return;

      }
      privateMessage.findOneAndDelete({ _id: messageId, receiverUsername: owner }, function (err, result) {
         if (err) {
            res.status(500);
            res.json({ "error": "internalServerError" });

         }
         else if (result == null) {
            res.status(500);
            res.json({ "error": "messageNotFound" });
         }
         else {
            res.send(200);
         }

      });



   }
   markread(req, res) {
      let messageId = req.body.messageId;
      let owner = req.params.username;
      // request is true when he needs to mark read and false when he needs to unread this message
      let isReadRequest = req.body.isReadRequest;
      if (owner == undefined
         || messageId == undefined
         || typeof owner != 'string'
         || typeof messageId != 'string'
         || typeof isReadRequest != 'boolean') {
         res.send(400);
         return;

      }
      privateMessage.findOneAndUpdate({ _id: messageId, receiverUsername: owner }, { isRead: isReadRequest }, function (err, result) {
         if (err) {
            res.status(500);
            res.json({ "error": "internalServerError" });

         }
         else if (result == null) {
            res.status(500);
            res.json({ "error": "messageNotFound" });
         }
         else {
            res.send(200);
         }

      });
   }


   /**  
   *     a function that composes a message with sender and receiver 
   *       and save the message to the database
   */
   compose(req, res) {
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
      let owner = req.params.username;
      let subject = req.body.subject;
      let messageBody = req.body.messageBody;
      let receiverUsername = req.body.receiverUsername;
      if (owner == undefined
         || receiverUsername == undefined
         || subject == undefined
         || messageBody == undefined) {
         // bad request is sent
         res.status(400);
         res.json({ error: 'undefinedParameter' });

      }
      /** 
       * checking that all the parameters are string  
       * bad request is sent in case they are not of type strings
       */
      else if (!
         (typeof receiverUsername === 'string'
            & typeof messageBody === 'string'
            & typeof subject === 'string'
            & typeof owner === 'string')) {
         // bad request is sent 
         res.status(400);
         res.json({ error: 'parameterTypeError' });

      }
      /**
      *   if the subject or message body or the receiver username 
      *   is empty sending forbidden request
      */
      else if (
         receiverUsername == ''
         || subject == ''
         || messageBody == ''
         || owner == '') {
         // sending forbidden request 

         res.status(403);
         res.json({ error: 'parameterEmptyError' });

      }
      else if (Object(subject).length > 50) {
         res.status(403)
         res.json({ error: 'overLengthedSubject' });
      }
      else {
         //  put here the check that user not found or the receiver not found

         blockList.findOne({ blocked: { $in: [owner, receiverUsername] }, blocker: { $in: [owner, receiverUsername] } }
            , function (err, result) {
               if (err) {
                  res.status(403)
                  res.json({ error: 'blockedFromSending' });
               }
               else if (result != null) {
                  res.status(403)
                  res.json({ error: 'blockedFromSending' });

               }
               else {

                  // initialzing the message with our data 
                  var message = new privateMessage(
                     {
                        sender: owner,
                        receiverUsername: receiverUsername,
                        subject: subject,
                        messageBody: messageBody,
                        isRead: false,
                        messageDate: Date(),
                        isBlocking: false

                     });
                  // save   with fire back function  to see the error 
                  message.save(function (err) {
                     if (err) {
                        // internal Server error 
                        res.status(500)
                        res.json({ error: 'internalServerError' });

                     }
                     else {
                        res.send(200);   // if everything worked as mentioned 
                     }
                  });

               }

            });



      }
      // end of compose function

   }

   /**  
   *     a function that retrieve the inbox or sent 
   *       according to a boolean 'mine'
   */
   retrieve(req, res) {
      // implementing here the user not found sync token 


      /*    if the url query is not as usual
      if( Object.keys(req.param).length!=2)
         {
   
                // bad request is sent
                res.send(400); 
   
         }
      */

      // if the boolean or sender is undefined or empty bad request is being sent 
      let owner = req.params.username;
      let mine = req.body.mine;

      if (mine == undefined
         || owner == undefined
         || owner == ''
      ) {
         // bad request is sent
         res.status(400);
         res.json({ error: 'parameterPassingError' });

      }
      else {



         // retriving all the messages sent to me (inbox)
         if (mine === true) {
            privateMessage.find(
               { receiverUsername: owner },
               {
                  'sender': 1,
                  _id: 1,
                  'isRead': 1,
                  'subject': 1,
                  'messageBody': 1,
                  'receiverUsername': 1,
                  'messageDate': 1,
               }
               , function (err, result) {
                  if (err) {
                     // internal server error
                     res.status(500)
                     res.json({ error: 'internalServerFindingError' });
                  }
                  else {
                     // stringfing and setting the header automatically 
                     res.json(result);
                  }
               }).sort({ messageDate: -1 });

         }
         // here it is retriving message i sent (sent not inbox)
         else if (mine === false) {

            privateMessage.find(
               { sender: owner },
               {
                  'receiverUsername': 1,
                  _id: 1,
                  'isRead': 1,
                  'subject': 1,
                  'sender': 1,
                  'messageBody': 1,
                  'messageDate': 1,
               },
               function (err, result) {
                  if (err) {
                     // internal server error
                     res.status(500)
                     res.json({ error: 'internalServerFindingError' });

                  }
                  else {
                     // stringfing and setting the header automatically 
                     res.json(result);

                  }
                  // sorting message by the date it was sent        
               }).sort({ messageDate: -1 });


         }
         else {
            //bad request 
            res.status(400)
            res.json({ error: 'badRequest' });


         }
      }
      // end of the retrieve function
   }
   block(req, res) {
      // owner and to be blocked need to be known how to be sent
      let owner = req.params.username;
      // check that the one going to be blocked alreay in our db
      let toBeBlocked = req.body.blocked;
      let block = req.body.block;
      // if it is sent as param no undefined will appear
      if (toBeBlocked == undefined || owner == undefined
         || block == undefined) {
         res.status(400);
         res.json({ error: 'badRequest' });

      }
      else if (toBeBlocked == '' || owner == '') {
         res.status(400);
         res.json({ error: 'emptyParameter' });
      }
      else if (!(typeof toBeBlocked === "string" && typeof block === 'boolean'
         && typeof owner === 'string')) {
         res.status(400);
         res.json({ error: 'parameterTypeError' });
      }
      else if (owner == toBeBlocked) {
         res.status(403);
         res.json({ error: 'selfBlockAlertError' });
      }
      else {
         // finding from the blocklist the user 
         blockList.findOne({ blocked: { $in: [toBeBlocked] }, blocker: { $in: [owner] } },
            function (err, result) {
               if (err) {
                  res.status(500);
                  res.json({ error: 'internalServerBlockingError' });
               }
               // blocking user already on block list
               else if (result != null && block == true) {
                  res.status(403);
                  res.json({ error: 'usersAlreadyOnBlockLists' });
               }
               else if (result == null && block == false) {

                  res.status(403);
                  // sending a user to unblock with being  blocked
                  res.json({ error: 'canNotBUnblockNonBlockedUser' });
               }
               // unblocking a blocked user
               else if (result != null && block == false) {
                  blockList.deleteOne({ blocked: toBeBlocked, blocker: owner }, function (err, result) {
                     if (err) {
                        res.status(500);
                        res.json({ error: 'internalServerBlockingError' });

                     }
                     else {
                        res.send(200);

                     }

                  });
               }
               else if (result == null && block == true) {

                  blockList.create({ blocker: owner, blocked: toBeBlocked }, function (err) {
                     if (err) {
                        res.status(500)
                        res.json({ error: 'internalServerBlockingError' });
                     }
                     else {
                        // blocked successfully
                        res.send(200);
                     }
                  });


               }
               else {

                  res.status(500)
                  res.json({ error: 'ServerError' });

               }
            });




         // end of if condition

         // end of block implementati
      }
   }
   retrieveBlock(req, res) {
      // here there is a middleware to verify the owner
      let owner = req.params.username;

      // checking for violation of type and undefined error
      if (owner == undefined) {
         res.status(400);
         // bad request is sent 
         res.json({ error: 'badRequest' });

      }
      else if (typeof owner != 'string') {
         res.status(400);
         // bad request is sent 
         res.json({ error: 'paramterTypeError' });
      }
      else {
         blockList.find(
            { blocker: owner },
            {
               blocked: '1'
            },
            function (err, result) {
               if (err) {
                  // internal server error
                  res.status(500)
                  res.json({ error: 'internalServerFindingError' });

               }
               else {
                  // stringfing and setting the header automatically 
                  res.json(result);

               }


            });
         // end of if condition
      }

      // end of retrieveBlock function
   }




}// end of the class



module.exports = new PM();