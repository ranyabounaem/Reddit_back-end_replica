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
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
//contect to mongo
mongoose.connect('mongodb://localhost/reddit');
mongoose.Promise=global.Promise;
mongoose.connection.once('open',function(){console.log("Connection successful");}).on('error',function(error)
{console.log("error:",error)});


app.use(bodyparser.json());

const userHandler = require("./src/user");

console.log(userHandler.handleRegistration);
app.post("/user/register", userHandler.handleRegistration);
app.post("/user/login", userHandler.handleLogin);
app.put("/me/edit/email/:Username", userHandler.EditUserEmail);
app.put("/me/edit/Password/:Username", userHandler.EditUserPassword);
app.get("/me/About/:Username", userHandler.Getmyinfo)


/**
 * @name UserService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
/**
 * @name UserService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */


//TODO POSTS: listing posts for a subreddit or only popular posts



/** 
* @api {get} /user/listing?type=value List Posts 
* @apiName ListPosts
* @apiGroup UserService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} ListingType [ListingType == HOT] Type of the listing that the user wants for the posts.
* @apiParam {Number} LPostID id of the last post displayed
* @apiSuccess {Object[]} Posts   Array of the listed Posts  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*  "Posts":[
*  {
* "SubbredditName": "r/funny"
* ,"PostID":1
* ,"Meme": data:image/jpeg;base64,...............
*  },
* {
* "SubbredditName": "r/Damn"
* ,"PostID":2
* ,"Meme": data:image/jpeg;base64,...............
*  } 
]
*     }
*
* @apiError PostsnotFound 
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "Posts not Found"
*     }
*/

// API for information about user

/** 
* @api {get} /user/:Username/about/ About
* @apiName AboutUser
* @apiGroup UserService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} Username username of the user that the information is about.
* @apiSuccess {String} Name name of the user
* @apiSuccess {String} Cakeday date of the user joining reddit.
* @apiSuccess {Number} Karma karma of the user
* @apiSuccess {JPG} Pic profile picture of the user
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "Username" : "TheRealBatman",
*       "Name": "Mark",
*       "Cakeday": "21-12-2019",
*       "Karma": 1449,
*       "Pic" : data:image/jpeg;base64,...............
*      }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "User not found"
*     }
*/


//API for listings of comments 

/** 
* @api {get} /user/:Username/comments/listing?type=value  List Comments 
* @apiName ListComments
* @apiGroup UserService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} ListingType Type of the listing that the user wants for the Comments.
* @apiSuccess {Object[]} Comments   Array of the listed Comments  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "Comments": [ {
*       "SubbredditName": "r/Damn",
*       "PostID" :3,
*       "Content" : "Hussein is on fire "
*       },
*       {
*       "SubbredditName": "r/funny",
*       "PostID" :1,
*       "Content" : "Let's see who wins this contest "
*       }]
*     }
*
* @apiError CommentsNotFound no comments found to be listed
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CommentsNotFound"
*     }
*/

//TODO SUBMITTED (if it means posts or subreddits)

// API for listing of Posts by a user

/** 
* @api {get} /user/:Username/listing?type=value List Posts 
* @apiName ListPosts
* @apiGroup UserService
* @apiparam {String} Username Username of visited User.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} ListingType [ListingType == HOT] Type of the listing that the user wants for the posts.
* @apiParam {Number} LPostID id of the last post displayed
* @apiSuccess {Object[]} Posts   Array of the listed Posts  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*  "Posts":[
*  {
* "SubbredditName": "r/funny"
* ,"PostID":1
* ,"Meme": data:image/jpeg;base64,...............
*  },
* {
* "SubbredditName": "r/Damn"
* ,"PostID":2
* ,"Meme": data:image/jpeg;base64,...............
*  } 
]
*     }
*
* @apiError Server error no subreddits found to be listed
* @apiErrorExample Error-Response:
*     HTTP/1.1 500 Server error
*     {
*       "error": "Server error"
*     }
*/

//TODO VOTED

/** 
* @api {get} /user/:Username/Votes  Votes of User
* @apiName Votes
* @apiGroup UserService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccess {Object[]} Votes   Array of the listed Votes  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "Votes": [ {
        "Type" : "Upvote",
*       "SubbredditName": "r/Damn",
*       "PostID" :3
*       },
*       {
        "Type" : "Upvote",
*       "SubbredditName": "r/funny",
*       "PostID" :1
*       }]
*     }
*
* @apiError CommentsNotFound no comments found to be listed
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CommentsNotFound"
*     }
*/


/**
 * @api {get} /me/:username Request my account information
 * @apiName Getmyinfo
 * @apiGroup me
 *
 * @apiParam {String} username Users unique username.
 *  @apiParam {String} Token SyncToken That is sent with authentication..
 *
 * @apiSuccess {String} Email email  of the User.
 * @apiSuccess {String} About text to describe the User.
 * @apiSuccess {String} Imageid Image id  of the User.
 * @apiSuccess {Number} Karma Karma of the User.
 * @apiSuccess {String} Cakeday Date of joining Reddit.
 * @apiSuccess {String[]} Subscriptions  subreddit subscriptons  of the User.
 * 
 *  @apiParamExample {json} Input
 *    {
 *      "Username": "User1",     
 *    }
 * 
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "Email": "user@reddit.com",
 *      "About": "Im a reddit user",
 *      "Imageid": "100001"
 *      "Subscriptions": ["subbreddit:askreddit","subbreddit:reddit"],
 *      "Karma" :2,
 *      "Cakeday" : "21-3-1440"
 *    }
 * 
 * @apiErrorExample {json} List error
 *    HTTP/1.1 404 User not found
 *      {
 *       "error": "User Not Found"
 *     }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 405 User not found
 *      {
 *       "error": "Not Authorized"
 *     }
 */



/**
 * @api {post} /user/register Register new user
 * @apiName CreateUser
 * @apiGroup me
 *
 *
 * @apiParam  {String} Email email  of the User.
 * @apiParam  {String} Username unique Username  of the User.
 * @apiParam  {String} Password Password  of the User.
 * @apiSuccess {string} Token SyncToken That is sent with authentication.
 * @apiParamExample {json} Input
 *    {
 *      "Email": "user@reddit.com",
 *      "Username": "User1",
 *      "Password": "Password"
      
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 *  "token":"we8749832b7498c2b78942"
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *    
 * HTTP/1.1 406 password short
 * {
 * "error":"Password too short"
 * }
 * 
 *  HTTP/1.1 406 username repeated 
 * {
 * "error":"Username already exists"
 * }
 * HTTP/1.1 406 email repeated 
 * {
 * "error":"Email already exists"
 * }
 * 
 * HTTP/1.1 406 email format 
 * {
 * "error":"Invalid Email format"
 * }
 */

/**
 * @api {put} /me/Login login attempt
 * @apiName LoginUser
 * @apiGroup me
 *
 *
 * @apiParam  {String} Email email  of the User.
 * @apiParam  {String} Username unique Username  of the User.
 * @apiParam  {String} Password Password  of the User.
 * 
 * @apiSuccess {string} Token SyncToken That is sent with authentication.
 * @apiParamExample {json} Input
 *    {
 *      "Username": "User1",
 *      "Password": "Password"
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {
 *  "token":"we8749832b7498c2b78942"
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *    HTTP/1.1 401 Invalid
 * {
 *          "error"":"Invalid Password"
 * }
 * 
 *  HTTP/1.1 404 Invalid
 * {
 *        "error"":"User doesnt exist"
 * }
 */




 /**
 * @api {Put} /me/:username/edit Edit  user
 * @apiName EditUser-
 * @apiGroup me
 *
 *
 * @apiParam  {String} Email email  of the User.
 * @apiParam  {String} Username unique Username  of the User.
 * @apiParam  {String} Password Password  of the User.
 * @apiParam  {String} ImageId ID of the User's image.
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParamExample {json} Input
 *    {
 *      "Email": "user@reddit.com",
 *      "Username": "User1",
 *      "Password": "Password",
 *      "ImageID" : 3
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User not found
 *      {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {Post} /me/:username/Block/:BlockedUsername  Block user
 * @apiName BlockUser
 * @apiGroup me
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} Username unique Username  of the User.
 *  @apiParam  {String} BlockedUsername  unique Username  of the User to be blocked.
 * @apiParamExample {json} Input
 *    {
 *      "Username": "User1",      
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User not found
 *      {
 *       "error": "UserNotFound"
 *     }
 */



 /**
 * @api {get} /me/:username/Block/  Get Blocked users
 * @apiName BlockedUsers
 * @apiGroup me
 * @apiParam {string} Token SyncToken That is sent with authentication.
 *  @apiParam  {String} Username unique Username  of the User.
 *   @apiSuccess  {String} BlockedUsername unique Username  of the User to be blocked.
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * 
 *    [{
 *      "BlockedUsername": "User1",    
 *    }]
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 Server Error
 *      
 */

 /**
 * @api {Post} /me/:username/Report/:id  report user comment or post
 * @apiName Report
 * @apiGroup me
 *
 * @apiParam {string} Token SyncToken That is sent with authentication.
  *  @apiParam  {String} Username unique Username  of the User.
 * @apiParam  {String} Id unique Id  of the post or comment.
 *  @apiParam  {String} Type type is post or comment.
 * 
 * @apiParamExample {json} Input
 *    {
 *      "Id": "1", 
 *      "Type":"Post"     
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User not found
 *      {
 *       "error": "Post Not found"
 *     }
 */

 /**
 * @api {Post} /me/:Username/Friend/:FriendUsername  Add new friend
 * @apiName FriendAdd
 * @apiGroup me
 *
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} Username unique Username  of user . 
 * @apiParam  {String} FriendUsername unique Username  of user to add. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User not found
 *      {
 *       "error": "User Not found"
 *     }
 */

 /**
 * @api {delete} /me/:Username/Friend/:FUsername   unfriend
 * @apiName Frienddelete
 * @apiGroup me
 *
 * @apiParam {string} Token SyncToken That is sent with authentication.
  * @apiParam  {String} Username unique Username  of user . 
 * @apiParam  {String} FUsername unique Username  of user to delete. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User not found
 *      {
 *       "error": "User Not found"
 *     }
 */

 /**
 * @api {Get} /me/:Username/Friend/   get friends
 * @apiName FriendList
 * @apiGroup me
 *
 * @apiParam  {String} Username unique Username  of the User.
* @apiSuccess  {String} FUsername unique Username  of the User.
 *  @apiSuccessExample {json} Success
 *  
 *   HTTP/1.1 200 OK
 * 
 *    [{
 *      "FUsername": "User1",    
 *    }]
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 server error
 */

 /**
 * @api {delete} /me/:Username /Friend/:FUsername   delete friend request
 * @apiName FriendReqdelete
 * @apiGroup me
 *
 *
 * @apiParam  {String} Username unique Username  of user .
 *  @apiParam  {String} FUsername unique Username  of user to unadd.  
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 server error
 */

 /**
 * @api {get} /Moderator/Reports/   Get all reports
 * @apiName Getreports
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apisuccess  {String} ReporId unique ReporId  of the Repor.

 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * [{
 *         "ReporId":"1010"
 * }]
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 server error
 */

 /**
 * @api {Put} /Moderator/Reports/:id   ignore report
 * @apiName Ignoreports
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} ReporId unique ReporId  of the Repor.
* @apiParamExample {json} Input
 *    {
 *      "ReporId": "1101", 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK   
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"report not found"
 * }
 */

 /**
 * @api {delete} /Moderator/Reports/:id   delete report
 * @apiName deletereports
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} ReporId unique ReporId  of the Repor.
* @apiParamExample {json} Input
 *    {
 *      "ReporId": "1101", 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK   
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"report not found"
 * }
 */

  /**
 * @api {post} /Moderator/Ban/:Username&:SubbreditName   ban user
 * @apiName BanUser
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} Username unique Username  of the User to be banned.
 * @apiParam  {String} SubbreditName unique SubbreditName  of the Subbredit to be banned from.
 * @apiParamExample {json} Input
 *    {
 *      "Username": "User0",
 *      "SubbreditName":"Ask reddit" 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK   
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"user or subreddit not found"
 * }
 */

 /**
 * @api {delete} /Moderator/LeaveMod/:Username&:SubbreditName   Leave or remove Moderation
 * @apiName LeaveMod
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} Username unique Username  of the Moderaor to remove or leave .
 * @apiParam  {String} SubbreditName unique SubbreditName  of the Subbredit .
 * @apiParamExample {json} Input
 *    {
 *      "Username": "User0",
 *      "SubbreditName":"Ask reddit" 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK   
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"user or subreddit not found"
 * }
 */

 /**
 * @api {post} /Moderator/Invite/:Username&:SubbreditName   invite moderator
 * @apiName Addmod
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} Username unique Username  of the Moderaor to be added .
 * @apiParam  {String} SubbreditName unique SubbreditName  of the Subbredit .
 * @apiSuccess {String} ModREQid unique invite Id  of the request .
 * @apiParamExample {json} Input
 *    {
 *      "Username": "User0",
 *      "SubbreditName":"Ask reddit" 
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK 
 * {
 * 
 *          "ModREQid":"101"
 * }  
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"user or subreddit not found"
 * }
 */

  /**
 * @api {post} /Moderator/accept   accept invite moderator
 * @apiName Acceptmod
 * @apiGroup Moderator
 * @apiParam {string} Token SyncToken That is sent with authentication.
 * @apiParam  {String} ModREQid unique invite id  of request.
 * @apiParamExample {json} Input
 *    {
 *      "ModREQid": "1011",
 *       
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK   
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Report not found
 * {
 *          "error":"request not found"
 * }
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
/**
* @api {get} /emoji/   Get's an emoji
* @apiName GetEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} SubredditName Name of subreddit to add image to.
* @apiSuccess {string} Image.
* 
*/

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
* @apiErrorExample {json} List error
*     HTTP/1.1 404 Report not found
* {
*          "error":"request not found"
* }
*/

/**
* @api {delete} /emoji/   Delete an emoji
* @apiName DeleteEmoji
* @apiGroup EmojiService
*
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string} SubredditName Name of subreddit to add image to.
* @apiSuccess HTTP/1.1 200 Ok.
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 404 Report not found {
*          "error":"request not found"
*  }
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
* @apiErrorExample {json} List error
*     HTTP/1.1 404 Report not found {
*          "error":"request not found"
* }
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
* @api {post} /emoji/   Create an emoji
* @apiName CreateEmoji
* @apiGroup test
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
* @api {post} /flair/:Srid   Creates  a  Flair 
* @apiName Create
* @apiGroup FlairService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} SubredditName of the subbreddit that  user wants to create flair for.
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
* @apiParam {String} SubredditName of the subbreddit that  user wants to delete flair for.
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
* @apiParam {String} SubredditName of the subbreddit that  user wants to get flair for.
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

/**
 * @api {post} /comment/:id Post a New Comment
 * @apiName PostComment
 * @apiGroup Comment
 * 
 * @apiParam {String} id ID of thread or comment.
 * @apiParam {String} Type specifies whether this is a reply or a comment  .
 * @apiParam {String} content Text of the Comment.
 * @apiParam {Boolean} [spoiler=false] True if it is a Spoiler.
 * @apiParam {Boolean} [locked=false] True if Replies are Disallowed on this Comment.
 * 
 * @apiSuccess {String} c_id The Created Comment ID.
 * 
 * @apiError ThreadNotFound The id of the thread wasn't found.
 * @apiError AccessDenied If the user isn't logged in.
 */



 /**
  * @api {get} /comment/ Get Details About Comment or a Reply
  * @apiName GetComment
  * @apiGroup Comment
  * 
  * @apiParam {String} c_id Comment Unique ID.
  * 
  * @apiSuccess {String} content Text of the Comment.
  * @apiSuccess {Date} c_date Date of the Posted Comment.
  * @apiSuccess {Boolean} spoiler True if it is a Spoiler.
  * @apiSuccess {Boolean} locked True if the Replies are Disallowed on this Comment.
  * @apiSuccess {Boolean} saved True if it is Saved.
  * @apiSuccess {Boolean} hidden True if it is Hidden.
  * @apiSuccess {String[]} replies An array containing all the replies' IDs to this comment.
  */

/**
 * @api {delete} /comment/:c_id Delete a Comment
 * @apiName DeleteComment
 * @apiGroup Comment
 * 
 * @apiParam {Number} c_id Comment Unique ID.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If this user can't delete this comment.
 */

 /**
  * @api {put} /comment/:c_id Edit a Comment
  * @apiName EditComment
  * @apiGroup Comment
  * 
  * @apiParam {String} c_id Comment Unique ID.
  * @apiParam {String} content Text of the Edited Comment.
  * @apiParam {Boolean} [spoiler=false] True if it is a Spoiler.
  * @apiParam {Boolean} [locked=false] True if Replies are Disallowed on this Comment.
  * 
  * @apiError CommentNotFound The id of the comment wasn't found.
  * @apiError AccessDenied If this user can't edit this comment.
  */

  /**
   * @api {put} /comment/:c_id Vote for a Comment
   * @apiName VoteComment
   * @apiGroup Comment
   * 
   * @apiParam {String} c_id Comment Unique ID.
   * @apiParam {Number=1,0,-1} direction Direction of the Vote as 1 indicates Upvote, -1 indicates Downvote and 0 means unvoting.
   * 
   * @apiError CommentNotFound The id of the comment wasn't found.
   * @apiError AccessDenied If the user isn't logged in.
   */

   /**
    * @api {post} /comment/:c_id Save a Comment
    * @apiName SaveComment
    * @apiGroup Comment
    * 
    * @apiParam {String} c_id Comment Unique ID.
    * 
    * @apiError CommentNotFound The id of the comment wasn't found.
    * @apiError CommentAlreadySaved The Comment has already been saved before.
    * @apiError AccessDenied If the user isn't logged in.
    */

    /**
     * @api {delete} /comment/:c_id UnSave a Comment
     * @apiName UnSaveComment
     * @apiGroup Comment
     * 
     * @apiParam {String} c_id Comment Unique ID.
     * 
     * @apiError CommentNotFound The id of the comment wasn't found.
     * @apiError CommentNotSaved You can't unsave an unsaved comment.
     * @apiError AccessDenied If the user isn't logged in.
     */

     /**
      * @api {put} /comment/:c_id Hide a Comment
      * @apiName HideComment
      * @apiGroup Comment
      * 
      * @apiParam {String} c_id Comment Unique ID.
      * 
      * @apiError CommentNotFound The id of the comment wasn't found.
      * @apiError CommentAlreadyHidden The Comment has already been hidden before.
      * @apiError AccessDenied If the user isn't logged in.
      */

     /**
      * @api {put} /comment/:c_id UnHide a Comment
      * @apiName UnHideComment
      * @apiGroup Comment
      * 
      * @apiParam {String} c_id Comment Unique ID.
      * 
      * @apiError CommentNotFound The id of the comment wasn't found.
      * @apiError CommentAlreadyHidden The Comment is not hidden.
      * @apiError AccessDenied If the user isn't logged in.
      */

      /**
       * @api {put} /comment/:c_id Mark Comment as a Spoiler
       * @apiName SpoilerComment
       * @apiGroup Comment
       * 
       * @apiParam {String} c_id Comment Unique ID.
       * 
       * @apiError CommentNotFound The id of the comment wasn't found.
       * @apiError CommentAlreadySpoiler The Comment is already marked.
       * @apiError AccessDenied If the user isn't logged in.
       */

       /**
       * @api {put} /comment/:c_id UnMark Comment as a Spoiler
       * @apiName UnSpoilerComment
       * @apiGroup Comment
       * 
       * @apiParam {String} c_id Comment Unique ID.
       * 
       * @apiError CommentNotFound The id of the comment wasn't found.
       * @apiError CommentAlreadySpoiler The Comment is already unmarked.
       * @apiError AccessDenied If the user isn't logged in.
       */

       /**
       * @api {put} /comment/:c_id Lock a Comment to Disallow Replies on it
       * @apiName LockComment
       * @apiGroup Comment
       * 
       * @apiParam {String} c_id Comment Unique ID.
       * 
       * @apiError CommentNotFound The id of the comment wasn't found.
       * @apiError CommentAlreadySpoiler The Comment is already locked.
       * @apiError AccessDenied If the user isn't logged in.
       */

       /**
       * @api {put} /comment/:c_id UnLock a Comment to Allow Replies on it
       * @apiName UnLockComment
       * @apiGroup Comment
       * 
       * @apiParam {String} c_id Comment Unique ID.
       * 
       * @apiError CommentNotFound The id of the comment wasn't found.
       * @apiError CommentAlreadySpoiler The Comment is already unlocked.
       * @apiError AccessDenied If the user isn't logged in.
       */

       /**
        * @api {post} /comment/:c_id Report a Comment
        * @apiName ReportComment
        * @apiGroup Comment
        * 
        * @apiParam {String} c_id Comment Unique ID.
        * @apiParam {String} text The reason of reporting this comment.
        * 
        * @apiError CommentNotFound The id of the comment wasn't found.
        * @apiError AccessDenied If the user isn't logged in.
        */

        /**
         * @api {get} /comment/:c_id Retrieve additional comments omitted from a base comment tree
         * @apiName ExpandComment
         * @apiGroup Comment
         * 
         * @apiParam {String} c_id Comment Unique ID.
         * 
         * @apiSuccess {String[]} replies An array containing all the replies' IDs to this comment.
         * 
         * @apiError CommentNotFound The id of the comment wasn't found.
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
* @api {get} /sr/:SubredditName/Listing/:type   ListSubreddits   Generate a list of subreddits 
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
* @apiSuccess {string} Username of Creator.
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
* @apiParam {string} Username of creator.
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
* @api {post} /pm/compose    Compose a new message
* @apiName Compose
* @apiGroup PMService
*
* @apiParam {String} receiverUsername unique username.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} subject Subject of the sending message (no longer than 100 character).
* @apiParam {String} messageBody the text of the message sent.
* @apiParam  {Date}  messageDate  the date of the message UTC default
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError userNotFound The <code>id</code> of the User was not found.
* @apiError blockedFromSending The user already blocking messages from the receiver
* @apiError overLengthedSubject The length of the subject is above 100 character
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "blockedFromSending"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "overLengthedSubject"
*     }
*/

/**
* @api {post} /pm/   Block
* @apiName Block
* @apiGroup PMService
*
* @apiParam {String} receiverUsername unique username.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Boolean} unblock  false when user want to block ,true when he wants to unblock.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {

*     }
*
* @apiError userNotFound The <code>id</code> of the User was not found.
* @apiError onBlockList The user you are trying to block is already on the block list
* @apiError selfBlockAlert an alert if there is a request for selfblock
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "userNotFound"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "onBlockList"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "selfBlockAlert"
*     }
*/


/**
* @api {delete} /pm/:Id   Delete
* @apiName Delete
* @apiGroup PMService
*
* @apiParam {String} messageId the id of the message going to be deleted.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError messageNotFound The <code>id</code> of the Message was not found.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "messageNotFound"
*     }
*/

/**
* @api {put} /pm/:Id   Mark Read
* @apiName MarkAsRead
* @apiGroup PMService
*
* @apiParam {String} messageID the id of the message going to be marked as read.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError messageNotFound The <code>id</code> of the Message was not found.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "messageNotFound"
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
* @apiError noMessages No messages to mark empty array
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "noMessages"
*     }
*/

/**
* @api {get} /pm/   Retrieve
* @apiName RetrieveMessages
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Boolean} mine True if u need to retrieve the inbox false if u need to retrieve the sent.
* @apiSuccess {Array} messages Array of Messages ,isBlocked is true whenever the sender is blocking the receiver.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*          {
*  {[{
* "_id"         :"5c901c662f87870699fa62e6"
* "sender”      :"kefah",
* "receiver"    : "omar",
* ”subject”     :”URGENT VIP”,
* "messageBody" :”Dear, marwan please”,
* "isRead"      :true,
* "messageDate" :"2019-03-18 22:32:06.000Z",
*  "isBlocked"   :false
*  },
* {
* "_id"         :"5c901c662f87870699fa62e9"
* "sender”      :"mariam ",
* "receiver"    : "kefah",
* ”subject”     :”URGENT VIP”,
* "messageBody" :”Dear, kefah i want to ,
* "isRead"      :false,
* "messageDate" :"2019-03-13 22:32:06.000Z",
* "isBlocked"   : true
*  }
* ]}
*     
*          }
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


/**
* @api {get} /notif/   Retrieve
* @apiName RetrieveNotifications
* @apiGroup NotificationsService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Number} Starting ID of Notifications (If Omitted, latest notifications will be sent.).
* @apiSuccess {Array} Array of Notifications.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*  "notifications":[
*    {"type": "message", "content": "Mustafa Ahmed Sent you a message", "ID": 5}
*    {"type": "ban", "content": "You have been banned from subreddit /r/MemeGeeks", "ID": 3}
*    ]
*     }

*/
app.get("/notif", (req, res) => {});

var server=app.listen(4000,function(){console.log('listening')});
module.exports=server;