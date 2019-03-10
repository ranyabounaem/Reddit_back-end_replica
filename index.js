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
* @api {post} /emoji/   Create an emoji
* @apiName CreateEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} Image  Image(emoji) of the subreddit.
* @apiParam {string} SubredditName Name of subreddit to add image to.
* @apiSuccess {string} EMOJI_ID Unique id of image.
*
*/

/**
* @api {delete} /emoji/   Delete an emoji
* @apiName DeleteEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} SubredditName Name of subreddit to add image to.
*
*/

/**
* @api {put} /emoji/   Edit an emoji (instead of deleting then creating)
* @apiName EditEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} SubredditName Name of subreddit to add image to.
* @apiParam {string} Image  Image(emoji) of the subreddit.
* @apiSuccess {string} EMOJI_ID New unique id of new image.
*
*/
/**
* @api {get} /emoji/   Edit an emoji (instead of deleting then creating)
* @apiName GetEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} SubredditName Name of subreddit to add image to.
* @apiSuccess {string} EMOJI_ID New unique id of new image.
*
*/


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
* @apiError SubbRedditNotFound the subreddit the user want to add flair to is not found
* @apiError OverlengthedFlair The string length of the flair is over 100 character.
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
* @apiError SubbRedditNotFound the subreddit the user want to add flair to is not found
* @apiError OverlengthedFlair The string length of the flair user want to delete is over 100 character.
* @apiError FlairNotFound The flair string user want to delete is not found.
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
* @api {post} /sr/:Id   Create a new subreddit
* @apiName CreateSubreddit
* @apiGroup SrService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} AdminId Id of user that created SR.
* @apiParam {string} SrName  unique Name of the subreddit (no longer than 100 character).
* @apiParam {string[]} SubredditRules list of subbreddit rules.
* @apiParam {string[]} ModUsername  Subreddit moderators' usernames.
*@apiSuccess {string} SR_ID Unique id of created sr.
*
*/

/**
* @api {get} /sr/:SubredditName/Listing/:type   ListSubreddits Generate a list of subreddits      //MOSTAFA
* @apiName ListSubreddits
* @apiGroup SrService
*
* @apiParam {string} Token.
* @apiParam {string} SubredditName Name of subreddit
* @apiParam {string} Type List according to certain type
* @apiSuccess {string[]} SubredditIDs Returns list of sorted subreddits
*/

/**
* @api {get} /sr/:SrName/meta   Views subreddit meta
* @apiName ViewSrMeta
* @apiGroup SrService
*
* @apiSuccess {string} Creator  unique ID.
* @apiParam {string} SrName Subreddit name.
* @apiSuccess {string[]} BannedUsers   ID of banned users.
* @apiSuccess {string[]} ModIds   ID of Modertors.
* @apiSuccess {string[]} PostIds   ID of posts in sr. 
* @apiSuccess {string[]} Rules   Rules of sr.
* @apiSuccess {string[]} UserIds   Ids of subscribed users .
* @apiSuccess {Number[]} SubCount   Number of subscribers.
* @apiParam {String} Date  date of creation .
*/

/**
* @api {put} /sr/:SubredditName/    Edit a subreddit
* @apiName EditSubreddit
* @apiGroup SrService
*
* @apiParam {string[]} NewRules Updated rules.
* @apiParam {string} SubredditName Old name
* @apiParam {string} NewName  New name
* @apiParam {string} About Updated about
*/

/**
* @api {post} /sr/:SubredditName/thread    Create a thread inside subreddit
* @apiName CreateSrThread
* @apiGroup SrService
*
* @apiParam {string} CreatorID Id of creator.
* @apiParam {string} SubredditName Name of subreddit.
* @apiParam {string} ThreadTitle Title of thread
* @apiParam {string} ThreadData Data inside thread.
* @apiParam {boolean} Spoiler [Spoiler==false] Mark if post is spoiler
*/

/**
* @api {post} /sr/:SubredditName/subs  Subscribe to a Sr
* @apiName SubredditSubscribtion
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} SubredditName
*/

/**
* @api {delete} /sr/:SubredditName/subs   Unsubscribe to a Sr
* @apiName SubredditUnsubscribtion
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} SubredditName
*/

/**
* @api {delete} /sr/:Id/thread    Delete a thread inside subreddit
* @apiName DeleteSrThread
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} SubredditName
* @apiParam {string} PostID
*/

/**
* @api {delete} /sr/:Id   Delete a subreddit
* @apiName DeleteSubreddit
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} SubredditName
*/


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
