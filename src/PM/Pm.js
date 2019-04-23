const express = require('express');
const bodyParser = require('body-parser');
const PMmongo = require('../../models/PMmongo');
const privateMessage = PMmongo.pm;
const blockList = PMmongo.messageBlockList;
const User = require('../../models/UserSchema');
const ath = require('../../JWT/giveToken');
const notification = require('../../models/notificationSchema.js');

/** @class privateMessaging */
class PM {

   constructor() {

   }
   /**
 * Handles marking read of all messages of the user
 * @param {Object} req  The request.
 * @param {Object} res  The response.
 * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
 * @example
 * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
 * PM.markreadall(req,res);
 * @example
 * // returns OK status 200 that all message were marked read successfully
 * PM.markreadall(req,res);
 * @returns {JSON} {error: 'messageNotFound'} 
 * @returns {JSON} {error: 'internalServerError'} 
 */
   markreadall(req, res) {
      let owner = ath.getUsernameFromToken(req);
      // shall be demolished by a middleware

      // request is true when he needs to mark read and false when he needs to unread this message
      let isReadRequest = req.body.isReadRequest;
      if (owner == undefined
         || isReadRequest == undefined
         || typeof owner != 'string'
         || typeof isReadRequest != 'boolean') {
         res.send(400);
         return;

      }

      // updating all messages to be read or unread depedning on the request
      privateMessage.updateMany({ receiverUsername: owner }, { isRead: isReadRequest }, function (err, result) {
         if (err) {
            res.status(500);
            res.json({ "error": "internalServerError" });
            return;

         }
         else if (result == null) {
            res.status(404);
            res.json({ "error": "messageNotFound" });
            return;
         }
         else {
            res.send(200);
            return;
         }

      });
   }

   /**
 * Handles deleting  a message
 * @param {Object} req  The request.
 * @param {Object} res  The response.
 * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
 * @param {String} req.body.messageId  the objectid of the message to be marked as read
 * @example
 * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
 * PM.delete(req,res);
 * @example
 * // returns OK status 200 that message was deleted successfully
 * PM.delete(req,res);
 * @returns {JSON} {error: 'messageNotFound'} 
 * @returns {JSON} {error: 'internalServerError'} 
 */
   delete(req, res) {

      let messageId = req.query.messageId;
      let owner = ath.getUsernameFromToken(req);      // shall be demolished by a middleware

      // request is true when he needs to mark read and false when he needs to unread this message
      if (owner == undefined
         || messageId == undefined
         || typeof owner != 'string'
         || typeof messageId != 'string') {
         res.send(400);
         return;

      }

      // finding the message by its id to be exceuted quickly
      privateMessage.findById(messageId, function (err,result) {
        if (result == null) {
            res.status(404);
            res.json({ "error": "messageNotFound" });
         }
         else {
            // if there is no error and the message is found 
            // checking whether the deletion is comming from the sender or the receiver
            if (result.receiverUsername == owner) {

               // if the sender already deleted it from its side we need to delete it from our db
               if (result.senderDelete == true) {
                  privateMessage.deleteOne({ _id: messageId }, function (err) {
                     if (err) {
                        res.status(500);
                        res.json({ "error": "internalServerError" });
                     }
                     else {
                        res.send(200);
                     }


                  });

               }
               else {
                  // if it is from the receiver we need to mark that it has been deleted from the recevier side
                  privateMessage.findByIdAndUpdate(messageId, { receiverDelete: true }, function (err) {
                     if (err) {
                        res.status(500);
                        res.json({ "error": "internalServerError" });

                     }
                     else {
                        res.send(200);
                     }
                  });
               }
            }
            // if it is from the owner side we neeed to check same logic here
            else if (result.sender == owner) {
               // if the receiver already deleted it we delete the message from our db
               if (result.receiverDelete == true) {
                  privateMessage.deleteOne({ _id: messageId }, function (err) {
                     if (err) {
                        res.status(500);
                        res.json({ "error": "internalServerError" });
                     }
                     else {
                        res.send(200);
                     }


                  });
               }
               else {
                  // if it is not deleted by both ends we just update the booleans
                  privateMessage.findByIdAndUpdate(messageId, { senderDelete: true }, function (err) {
                     if (err) {
                        res.status(500);
                        res.json({ "error": "internalServerError" });

                     }
                     else {

                        res.send(200);
                     }
                  }

                  );
               }

            }
            else {

               res.status(500);
               res.json({ "error": "internalServerError" });

            }

         }

      });

   }
   /**
 * Handles marking read of a message
 * @param {Object} req  The request.
 * @param {Object} res  The response.
 * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
 * @param {String} req.body.messageId  the objectid of the message to be marked as read
 * @example
 * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
 * PM.marked(req,res);
 * @example
 * // returns OK status 200 that message was marked read successfully
 * PM.markread(req,res);
 * @returns {JSON} {error: 'messageNotFound'} 
 * @returns {JSON} {error: 'internalServerError'} 
 */
   markread(req, res) {

      let messageId = req.body.messageId;
      let owner = ath.getUsernameFromToken(req);

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
      // finding the messaage and checking if it has been from the receiver side to mark as read elsewise send error
      privateMessage.findById(messageId, function (err, result) {
         if (err) {
            res.status(500);
            res.json({ "error": "internalServerError" });

         }
         else if (result == null) {
            res.status(404);
            res.json({ "error": "messageNotFound" });
         }
         else {
            //if it is the same who send the messag it is okay
            if (result.receiverUsername == owner) {
               privateMessage.findByIdAndUpdate(messageId, { isRead: isReadRequest }, function (err) {
                  if (err) {
                     res.status(500);
                     res.json({ "error": "internalServerError" });


                  }
                  else {
                     res.send(200);


                  }


               });

            }
            else { // forbidden for anyone else except the recevier
               res.send(403);

            }
         }

      });
   }

   /**
    * Handles composing of new messagees
    * @param {Object} req  The request.
    * @param {Object} res  The response.
    * @param {String} syncToken  the token extracted from the request header to get the username of the sender
    * @param {String} req.body.subject  the subject of the message not to exceed 50 character
    * @param {String} req.body.receiverUsername  the username of the user  he wants to send the message to
    * @param {String} req.body.messageBody  the message body user want to send 
    * @example
    * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
    * PM.compose(req,res);
    * @example
    * // returns OK status 200 that message was composed successfully
    * PM.compose(req,res);
    * @returns {JSON} 
    * @returns {JSON} {error: 'undefinedParameter'} 
    * @returns {JSON} {error: 'parameterTypeError'} 
    * @returns {JSON} {error: 'overLengthedSubject'} 
    * @returns {JSON} {error: 'internalServerError'} 
    * @returns {JSON} {error: 'blockedFromSending'} 
    * @returns {JSON} {error: 'userNotFound'} 
    * @returns {JSON} {error: 'receiverNotFound'} 
    * @returns {JSON} {error: 'internalServerError'} 
    */

   compose(req, res) {

      // middle ware shall be used for checking for the validation for the user 
      let owner = ath.getUsernameFromToken(req);
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
      /* 
        checking that all the parameters are string  
        bad request is sent in case they are not of type strings
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
      /*
        if the subject or message body or the receiver username 
         is empty sending forbidden request
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
            // to check self message alerts
      else if (receiverUsername==owner) {
         res.status(403);
         res.json({ error: 'selfMessage' });


      }
      else if (Object(subject).length > 50) {
         res.status(403);
         res.json({ error: 'overLengthedSubject' });
      }
      else {

         User.findOne({ Username: receiverUsername }, function (err, result) {
            if (result == null) {
               res.status(404);
               res.json({ error: 'receiverNotFound' });

            }
            else {

               // checking if the sender is already been blocked or he has already blocked the recevier 
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
                              receiverDelete: false,
                              senderDelete: false

                           });
                        //add notification to the receiver user
                        const n = new notification({
                           username: receiverUsername,
                           read: false,
                           sourceID: null,
                           message: owner + ' has sent you a message',
                           date: Date()
                        })
                        n.save();
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

         });
         //  put here the check that user not found or the receiver not found




      }
      // end of compose function

   }

   /*
      a function that retrieve the inbox or sent 
      according to a boolean 'mine'
   */
   /**
  * Handles retrieving of inbox or sent messages
  * @param {Object} req  The request.
  * @param {Object} res  The response.
  * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
  * @param {Boolean} req.body.mine  mine is true when retriving the messages sent to the request sender, false when retriving the messages sent by the request sender
  * @example
  * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
  * PM.retrieve(req,res);
  * @example
  * // returns  an array of messages object of the inbox or sent of the user with status 200
  * PM.retrieve(req,res);
  * @returns {JSON}  {{[{"_id":"5c901c662f87870699fa62e6" ,"sender”      :"kefah",  "receiver"    : "omar", ”subject”     :”URGENT VIP”,"messageBody" :”Dear, marwan please”,"isRead"      :true "messageDate" :"2019-03-18 22:32:06.000Z"  }, { "_id"         :"5c901c662f87870699fa62e9" "sender”      :"mariam ","receiver"    : "kefah",”subject”     :”URGENT VIP”,"messageBody" :”Dear, kefah i want to ,"isRead"      :false "messageDate" :"2019-03-13 22:32:06.000Z"  } ]}} retrieved messages the array may be empty
  * @returns {JSON} {error: 'parameterPassingError'} 
  * @returns {JSON} {error: 'internalServerFindingError'} 
  */
   retrieve(req, res) {
      let owner = ath.getUsernameFromToken(req);
      /*    if the url query is not as usual
      if( Object.keys(req.param).length!=2)
         {
   
                // bad request is sent
                res.send(400); 
   
         }
      */

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
               { receiverUsername: owner, receiverDelete: false },
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
               { sender: owner, senderDelete: false },
               {
                  'receiverUsername': 1,
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
   /**
  * Handles blocking another user from sending messages
  * @param {Object} req  The request.
  * @param {Object} res  The response.
  * @param {String}  toBeBlocked the user whom i am going to block him or the one whom i already blocked
  * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
  * @param {Boolean} req.body.block  block is true when i am blocking the username sent in the request body, block is flase when i am unblocking him
  * @example
  * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
  * PM.block(req,res);
  * @example
  * // returns OK status 200 that tobeBlocked is blocked or unblocked successfuly
  * PM.block(req,res);
  * @returns {JSON} 
  * @returns {JSON} {error: 'selfBlockAlertError'} 
  * @returns {JSON} {error: 'internalServerBlockingError'} 
  * @returns {JSON} {error: 'toBeBlockedNotFound'} 
  * @returns {JSON} {error: 'usersAlreadyOnBlockLists'} 
  * @returns {JSON} {error: 'canNotBUnblockNonBlockedUser'} 
  */
   block(req, res) {
      // owner and to be blocked need to be known how to be sent
      let owner = ath.getUsernameFromToken(req);
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
         User.findOne({ Username: toBeBlocked }, function (err, result) {

            if (err || result == null) {

               res.status(404);
               res.json({ error: 'toBeBlockedNotFound' });

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



            }





         });


         // end of if condition

         // end of block implementati
      }
   }

   /**
  * Handles retrieving of receving messages BlockList
  * @param {Object} req  The request.
  * @param {Object} res  The response.
  * @param {String} syncToken  the token extracted from the request header to get the username of the request sender
  * @example
  * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
  * PM.retrieveBlock(req,res);
  * @example
  * // returns   an array of objects containing the usernames of the blocked users (from sending only messeages) status 200
  * PM.retrieveBlock(req,res);
  * @returns {JSON} {{[{"_id" :"5c901c662f87870699fa62e6", "blocked      :"kefah" }, { "_id"         :"5c901c662f87870699fa62e9", "blocked      :"marwan "  }]}          }
  * @returns {JSON} {error: 'paramterTypeError'} 
  * @returns {JSON} {error: 'internalServerFindingError'} 
  */
   retrieveBlock(req, res) {
      // here there is a middleware to verify the owner
      let owner = ath.getUsernameFromToken(req);
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
         // shall be demolished by a middleware
         blockList.find(
            { blocker: owner },
            {
               blocked: '1', _id: 0
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
