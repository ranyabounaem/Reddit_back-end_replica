/**
 * @description This file should only call handler functions and specifying routes.
 * @description It's also the entry/main file of our application which listens for everything.
 * 
 * @example
 * const userService = require("./users");
 * const Handler = new userService();
 * app.get("/users", Handler.getUsers);
 * 
 * @note To use apiDoc, also don't commit the output file of apiDoc.
 * @note It's ignored in the .gitignore file.
 * @run npm install apidoc -g
 * @start apidoc -i myapp/ -o apidoc/
 * 
 * @example above the handler fn.
 * //////////////////////////////////////
 * @api {get} /user/:id Request User information
 * @apiName GetUser {method + endpoint/path}
 * @apiGroup ServiceName
 *
 * @apiParam {Number} id Users unique ID. {if any}
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 * //////////////////////////////////////
 * @see http://apidocjs.com/
 */

 const app = require("express")();


/**
 * @name UserService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
app.get("/users", (req, res) => {});
app.post("/users", (req, res) => {});
app.put("/users", (req, res) => {});
app.delete("/users", (req, res) => {});


/**
 * @name EmojiService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
app.get("/emoji", (req, res) => {});
app.post("/emoji", (req, res) => {});
app.put("/emoji", (req, res) => {});
app.delete("/emoji", (req, res) => {});


/**
 * @name FlairService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
/** 
* @api {put} /flair/:Srid   Creates  a  Flair 
* @apiName Create
* @apiGroup FlairService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Number} SubredditID id of the subbreddit that  user wants to create flair for.
* @apiParam {string} FlairName the flair string  added (maximum 100 characters) .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError UserNotFound The <code>id</code> of the User was not found.
* @apiError SubbRedditNotFound the subreddit the user want to add flair to is not found
* @apiError OverlengthedFlair The string length of the flair is over 100 character.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "SubbRedditNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "OverlengthedSubject"
*     }
*/

/** 
* @api {delete} /flair/:SrId   Delete 
* @apiName Delete
* @apiGroup FlairService
* @apiParam {Number} SubredditID id of the subbreddit that  user wants to delete flair for.
* @apiParam {string} FlairName the flair string  user want to delete (maximum 100 characters) .
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
* @apiError UserNotFound The <code>id</code> of the User was not found.
* @apiError SubbRedditNotFound the subreddit the user want to add flair to is not found
* @apiError OverlengthedFlair The string length of the flair user want to delete is over 100 character.
* @apiError FlairNotFound The flair string user want to delete is not found.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "FlairNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "SubbRedditNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "OverlengthedSubject"
*     }
*/


/** 
* @api {get} /flair/:SrID  Flair Retrieval 
* @apiName RetrieveFlairs
* @apiGroup FlairService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Number} SubredditID id of the subbreddit that  user wants to get flair for.
* @apiSuccess {Array} Flairs   Array of Flairs of the users for the subbredditID requested .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*  "Flairs":[
    {
* "SubbredditID":3
* ,”FlairID”:1
* ,”FlairString”:”Doctor”
*  },
* {"SubbredditID":3 
* ,”FlairID”:2,
* ,"FlairString":”Math Teacher"
* } 
]
*     }

* @apiError SubbRedditNotFound the subreddit the user want to add flair to is not found
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "SubbRedditNotFound"
*     }


*/
app.get("/flair", (req, res) => {});
app.post("/flair", (req, res) => {});
app.put("/flair", (req, res) => {});
app.delete("/flair", (req, res) => {});


/**
 * @name CommentService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
app.get("/comment", (req, res) => {});
app.post("/comment", (req, res) => {});
app.put("/comment", (req, res) => {});
app.delete("/comment", (req, res) => {});



/**
 * @name SrService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
app.get("/sr", (req, res) => {});
app.post("/sr", (req, res) => {});
app.put("/sr", (req, res) => {});
app.delete("/sr", (req, res) => {});


/**
 * @name PMService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
/** 
* @api {post} /pm/    Compose a new message 
* @apiName Compose
* @apiGroup PMService
*
* @apiParam {Number} ReceiverID unique ID.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} Subject Subject of the sending message (no longer than 100 character).
* @apiParam {string} MessageBody the text of the message sent.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError UserNotFound The <code>id</code> of the User was not found.
* @apiError BlockedFromSending The user already blocking messages from the receiver
* @apiError OverlengthedSubject The length of the subject is above 100 character

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "BlockedFromSending"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "OverlengthedSubject"
*     }
*/

/** 
* @api {post} /pm/   Block 
* @apiName Block
* @apiGroup PMService
*
* @apiParam {Number} ReceiverID unique ID.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    
*     }
*
* @apiError UserNotFound The <code>id</code> of the User was not found.
* @apiError OnBlockList The user you are trying to block is already on the block list
* @apiError SelfBlockAlert an alert if there is a request for selfblock
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "OnBlockList"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "SelfBlockAlert"
*     }
*/


/** 
* @api {delete} /pm/:Id   Delete 
* @apiName Delete
* @apiGroup PMService
*
* @apiParam {Number} MessageID the id of the message going to be deleted.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError MessageNotFound The <code>id</code> of the Message was not found.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MessageNotFound"
*     }
*/

/** 
* @api {put} /pm/:Id   Mark Read 
* @apiName MarkAsRead
* @apiGroup PMService
*
* @apiParam {Number} MessageID the id of the message going to be marked as read.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError MessageNotFound The <code>id</code> of the Message was not found.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MessageNotFound"
*     }
*/

/** 
* @api {post} /pm/   Mark Read-all 
* @apiName MarkReadALL
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
* @apiError NoMessages No messages to mark empty array
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "NoMessages"
*     }
*/

/** 
* @api {get} /pm/   Retrieve 
* @apiName RetrieveMessages
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Boolean} Mine True if u need to retrieve the inbox false if u need to retrieve the sent.
* @apiSuccess {Array} Messages   Array of Messages    .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*  "messages":[{
* "user”:{“Is_read”:false,”email”:”mar.kefo@gmail.com”,”user_id”:”1232”,”profile_url":""} 
* ,”subject”:”URGENT VIP”
* ,”message”:”Dear, marwan please”,”
*  },
* {"user”:{“Is_read”:false,”email”:”marwankefah@gmail.com”,”user_id”:”1232”,”profile_url":""} 
* ,”subject”:”TEST VERIFIED”
* ,”message”:”Dear, marwan TEST M2”,”
* } ]
*     }

*/

app.get("/pm", (req, res) => {});
app.post("/pm", (req, res) => {});
app.put("/pm", (req, res) => {});
app.delete("/pm", (req, res) => {});


/**
 * @name NotificationsService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 * @description Should get notifications, mark them as read & deletes them.
 * @description You can use EventEmitter in order to take an action whenever something happens in the bakcend.
 * @example
 * let emitter = new EventEmitter();
 * emitter.on("ev", (data) => {return data});
 * emitter.emit("ev", data);
 * @note don't think about SQL triggers, they're irrelevant in such case.
 * @see https://nodejs.org/api/events.html
 */
app.get("/notif", (req, res) => {});
app.post("/notif", (req, res) => {});
app.put("/notif", (req, res) => {});
app.delete("/notif", (req, res) => {});

 app.listen(1337);
