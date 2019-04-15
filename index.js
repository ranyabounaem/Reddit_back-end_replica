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
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const passportConf = require('./JWT/passport');

//contect to mongo
mongoose.connect('mongodb://localhost:27017/reddit');
mongoose.Promise = global.Promise;
mongoose.connection.once('open', function () { console.log("Connection successful"); }).on('error', function (error) { console.log("error:", error) });


//middlewares 
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", " POST,PUT,GET,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth");
    next();
});

const userHandler = require("./src/user");

// console.log(userHandler.handleRegistration);
app.post("/user/register", userHandler.handleRegistration);

/**
 * @api {post} /user/register Register new user
 * @apiName CreateUser
 * @apiGroup me
 *
 *
 * @apiParam  {String} Email email  of the User.
 * @apiParam  {String} Username unique Username  of the User.
 * @apiParam  {String} Password Password  of the User.
 * @apiSuccess {string} Token Token That is sent with authentication.
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

app.post("/user/login", userHandler.handleLogin);
/**
* @api {post} /user/Login login attempt
* @apiName LoginUser
* @apiGroup me
* @apiParam  {String} Username unique Username  of the User.
* @apiParam  {String} Password Password  of the User.
* 
* @apiSuccess {string} Token Token That is sent with authentication.
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

 
 app.put("/me/edit/email/:Username",passport.authenticate('jwt',{session:false}), userHandler.EditUserEmail);
 app.put("/me/edit/Password/:Username",passport.authenticate('jwt',{session:false}),userHandler.EditUserPassword);
 app.get("/me/About/:Username",passport.authenticate('jwt',{session:false}), userHandler.Getmyinfo);


app.get("/user/info/:userToView", userHandler.getUserInfo);
/**
* @api {get} /user/info:userToView get user info if NOT logged in
* @apiName GetUserInfo
* @apiGroup me
*  @apiParam  {String} userToView  unique Username  of the User to be viewed.
*  @apiSuccessExample {json} Success
*    HTTP/1.1 200 
* {
*      "Username":"user1",
     Subscriptions:["sub1","sub2","sub3"]
* }
*    
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 404 user doesnt exist
*      {
*      "message": "User doesnt exist"
*     }
*/

app.get("/me/user/info/:userToView", passport.authenticate('jwt', { session: false }), userHandler.getUserInfoLogged)
/**
 * @api {get} /me/user/info/:userToView get user info if logged in
 * @apiName GetUserInfoLogged
 * @apiGroup me
* @apiHeader {String} auth Users unique token .
 *  @apiParam  {String} userToView  unique Username  of the User to be viewed.
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 
 * {
 *      "Username":"user1",
      Subscriptions:["sub1","sub2","sub3"]
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 user blocked you or doesnt exist
 *      {
 *      "message": "User doesnt exist"
 *     }
 */

app.get("/me/blockedusers", passport.authenticate('jwt', { session: false }), userHandler.getBlockedUsers)

/**
 * @api {get} /me/blockedusers  Get Blocked users
 * @apiName BlockedUsers
 * @apiHeader {String} auth Users unique token .
 * @apiGroup me
 *   @apiSuccess  [String] BlockedUsername unique Username  of the User to be blocked.
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * 
 *    [
 *      "User1",
 *      "User2",
 *      "User3",
 *      "User4"     
 *    ]    
 */

app.put("/me/user/unblock", passport.authenticate('jwt', { session: false }), userHandler.unblockUser);
/**
* @api {put} /me/user/unblock  unblock user
* @apiName UnblockUser
* @apiGroup me
* @apiHeader {String} auth Users unique token .
*  @apiParam  {String} unblockedUser  unique Username  of the User to be unblocked.
* @apiParamExample {json} Input
*    {
*      "unblockedUser": "User1"    
*    }
*  @apiSuccessExample {json} Success
*    HTTP/1.1 200 
* {
*     "User unblocked"
* }
*    
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 404 user isnt blocked
*      {
*      error:"the user you want to unblock isnt blocked""
*     }
*/

app.put("/me/user/block", passport.authenticate('jwt', { session: false }), userHandler.blockUser);
/**
* @api {put} /me/user/block  Block user
* @apiName BlockUser
* @apiGroup me
* @apiHeader {String} auth Users unique token .
*  @apiParam  {String} blockedUser  unique Username  of the User to be blocked.
* @apiParamExample {json} Input
*    {
*      "blockedUser": "User1"      
*    }
*  @apiSuccessExample {json} Success
*    HTTP/1.1 200 
* {
*     "User Blocked"
* }
*    
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 404 user already blocked
*      {
*      error:"the user you want to block is already blocked"
*     },
* HTTP/1.1 404 User not found
*      {
*     error:"the user you want to block doesnt exist"
*     },
* HTTP/1.1 404 User blocking himself
*      {
*       error:"you cant block yourself"
*     }
* 
* 
* 
* 
* 
*/

app.put("/me/user/Add",passport.authenticate('jwt',{session:false}),userHandler.addFriend);
 /**
 * @api {put} /me/user/Add  Add new friend
 * @apiName FriendAdd
 * @apiGroup me
 *
 * @apiHeader {String} auth Users unique token. 
 * @apiParam  {String} FriendUsername unique Username  of user to add. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
 *  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {    
 *      "message": "Friend request Sent" 
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 fUsername not found
 *      {
 *       "error": "fUsername not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User to be added not found
 *      {
 *       "error": "User to be added not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 402 User cannot add himself
 *      {
 *       "error": "User cannot add himself"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 The sending User is blocked
 *      {
 *       "error": "The sending User is blocked"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 The user to be added is blocked
 *      {
 *       "error": "The user to be added is blocked"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 User not found
 *      {
 *       "error": "The User to be added is already a friend"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 User has already received a request from the other user
 *      {
 *       "error": "User has already received a request from the other user"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 User has already sent a request to the other user
 *      {
 *       "error": "User has already sent a request to the other user"
 *     }
 */


app.put("/me/user/Unfriend",passport.authenticate('jwt',{session:false}),userHandler.unFriend);

 /**
 * @api {put} /me/user/Unfriend   unfriend
 * @apiName Unfriend
 * @apiGroup me
 *
 * @apiHeader {String} auth Users unique token.
 * @apiParam  {String} fUsername unique Username  of user to delete. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
*  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {    
 *      "message": "Friend is removed from friends list" 
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 fUsername not found
 *      {
 *       "error": "fUsername not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User to unFriend not found
 *      {
 *       "error": "User to unFriend not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 This user is not a friend
 *      {
 *       "error": "This user is not a friend"
 *     }
 */

app.put("/me/user/accept",passport.authenticate('jwt',{session:false}),userHandler.acceptRequest);

 /**
 * @api {put} /me/user/accept   Accept Request
 * @apiName AcceptRequest
 * @apiGroup me
 *
 * @apiHeader {String} auth Users unique token.
 * @apiParam  {String} fUsername unique Username  of user to Accept request from. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
*  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {    
 *      "message": "Friend request accepted" 
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 fUsername not found
 *      {
 *       "error": "fUsername not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User to accept not found
 *      {
 *       "error": "User to accept not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 This user is already a friend
 *      {
 *       "error": "This user is already a friend"
 *     }
 *  @apiErrorExample {json} List error
 *     HTTP/1.1 401 There isn't a request to be accepted
 *      {
 *       "error": "There isn't a request to be accepted"
 *     }
 */

app.put("/me/user/reject",passport.authenticate('jwt',{session:false}),userHandler.rejectRequest);

 /**
 * @api {put} /me/user/reject   Reject Request
 * @apiName RejectRequest
 * @apiGroup me
 *
 * @apiHeader {String} auth Users unique token.
 * @apiParam  {String} fUsername unique Username  of user to reject. 
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
      
 *    }
*  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {    
 *      "message": "Friend request rejected" 
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 fUsername not found
 *      {
 *       "error": "fUsername not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User to reject not found
 *      {
 *       "error": "User to reject not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 401 This user is already a friend
 *      {
 *       "error": "This user is already a friend"
 *     }
 *  @apiErrorExample {json} List error
 *     HTTP/1.1 401 There isn't a request to be rejected
 *      {
 *       "error": "There isn't a request to be rejected"
 *     }
 */

app.get("/me/friends",passport.authenticate('jwt',{session:false}),userHandler.getFriends);

 /**
 * @api {Get} /me/friends   get friends
 * @apiName FriendList
 * @apiGroup me
 *
 * @apiHeader {String} auth Users unique token.
 * @apiSuccess  {[String]} FUsername unique Username  of the User.
 * @apiSuccessExample {json} Success
 *  
 *   HTTP/1.1 200 OK
 * 
 *    {"Friends" :["User1" , "User2"]}
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 server error
 */

app.get("/me/sentRequests",passport.authenticate('jwt',{session:false}),userHandler.getSentRequests);

/**
* @api {Get} /me/sentRequests  get sent requests
* @apiName SentRequestsList
* @apiGroup me
*
* @apiHeader {String} auth Users unique token.
* @apiSuccess  {String} FUsername unique Username  of the User.
*  @apiSuccessExample {json} Success
*  
*   HTTP/1.1 200 OK
* 
*    {
*       "sentRequests" :["User1" , "User2"]
*    }
*    
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 500 server error
*/

app.get("/me/receivedRequests",passport.authenticate('jwt',{session:false}),userHandler.getReceivedRequests);

/**
* @api {Get} /me/receivedRequests  get received requests
* @apiName receivedRequestsList
* @apiGroup me
*
* @apiHeader {String} auth Users unique token.
* @apiSuccess  {String} FUsername unique Username  of the User.
*  @apiSuccessExample {json} Success
*  
*   HTTP/1.1 200 OK
* 
*    {
*       "receivedRequests" :["User1" , "User2"]
*    }
*    
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 500 server error
*/

app.put("/me/user/removeReq",passport.authenticate('jwt',{session:false}),userHandler.RemoveReq);

 /**
 * @api {put} /me/user/removeReq   delete friend request
 * @apiName RemoveFriendRequest
 * @apiGroup me
 *
 *
 * @apiHeader {String} auth Users unique token.
 * @apiParam  {String} fUsername unique Username  of user to unadd.  
 * @apiParamExample {json} Input
 *    {
 *      "Username": "user1", 
 *    }
*  @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * {    
 *      "message": "Friend request Removed" 
 * }
 *    
 * 
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 fUsername not found
 *      {
 *       "error": "fUsername not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 User to be removed not found
 *      {
 *       "error": "User to be removed not found"
 *     }
 * @apiErrorExample {json} List error
 *     HTTP/1.1 404 Request doesn't exist
 *      {
 *       "error": "Request doesn't exist"
 *     }
 */


/**
 * @name UserService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
/**
 * @name UserService
 * @note These are the routes for anything related to a user.
 * @note This i
 * s just general routing, You can modify as you want but before the delivery of the documentation
 */


//TODO POSTS: listing posts for a subreddit or only popular posts

const listings = require('./src/listings');
app.post('/me/listing', passport.authenticate('jwt', { session: false }),(req, res) => listings.listPosts(req, res));
/** 
* @api {post} /me/listing?type=value List Posts 
* @apiName ListPosts
* @apiGroup UserService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} type [type == hot] Type of the listing that the user wants for the posts.
* @apiParam {Number} startPosition Sending 15 posts per after the startposition  
* @apiSuccess {Object[]} Posts   Array of the listed Posts depending on the type  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*  {
*  [    
*  {
* "subredditName": "funny"
* ,"_id":"sd232s2231"
* ,"title":"love"
* ,"postDate":"1998-04-23"
* ,"body": "love is known for something"
*  },
* {
* "subredditName": "nature"
* ,"_id":"2dsds23123d"
* ,"title":"vietnam nature"
* ,"postDate":"1998-04-23"
* ,"body": "vietnam nature is known for something"
*  } 
*]
*     }
*
* @apiError postsnotFound  no posts found for the user
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "postsNotFound"
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
 * @api {get} /me/About/:Username Request my account information
 * @apiName Getmyinfo
 * @apiGroup me
 *
 * @apiParam {String} Username User's unique username.
 * @apiParam {String} Token SyncToken That is sent with authentication..
 *
 * @apiSuccess {String} Username username  of the User.
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
 *      "Username": "User1"
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
* @api {Put} /me/edit/Password/:Username Edit User password
* @apiName EditUserPassword
* @apiGroup me
*
*
* @apiParam  {String} Username unique Username  of the User.
* @apiParam  {String} NewPassword the new Password for the User.
* @apiParam  {String} OldPassword the Old Password of the User.
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
* @apiErrorExample {json} List error
*     HTTP/1.1 401 Wrong Password
*      {
*       "error": "Wrong Password"
*     }
* 
* @apiErrorExample {json} List error
*     HTTP/1.1 406 Password too short
*      {
*        error: "Password too short"
*     }
*/

/**
* @api {Put} /me/edit/email/:Username Edit User email
* @apiName EditUserEmail
* @apiGroup me
*
*
* @apiParam  {String} Email email  of the User.
* @apiParam  {String} Username unique Username  of the User.
* @apiParam {string} Token SyncToken That is sent with authentication.
* @apiParamExample {json} Input
*    {
*      "Email": "user@reddit.com",
*      "Username": "User1"
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
* @apiErrorExample {json} List error
*     HTTP/1.1 406 Invalid Email format
*      {
*       "error": "Invalid Email format"
*     }
* @apiErrorExample {json} List error
*     HTTP/1.1 406 Email already exists
*      {
*          "error" : "Email already exists"
*      }
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






app.get("/users", (req, res) => { });
app.post("/users", (req, res) => { });
app.put("/users", (req, res) => { });
app.delete("/users", (req, res) => { });


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

app.get("/emoji", (req, res) => { });
app.post("/emoji", (req, res) => { });
app.put("/emoji", (req, res) => { });
app.delete("/emoji", (req, res) => { });

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
app.get("/flair", (req, res) => { });
app.post("/flair", (req, res) => { });
app.put("/flair", (req, res) => { });
app.delete("/flair", (req, res) => { });


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
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
 * @apiParam {String} id ID of thread or comment.
 * @apiParam {String} content Text of the Comment.
 * @apiParam {Boolean} [reply=false] True if you want to post a reply to a comment.
 * @apiParam {Boolean} [spoiler=false] True if it is a Spoiler.
 * @apiParam {Boolean} [locked=false] True if Replies are Disallowed on this Comment.
 * 
 * @apiSuccess {String} c_id The Created Comment ID.
 * 
 * @apiError ThreadNotFound The id of the thread wasn't found.
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If the user isn't logged in.
 */



/**
 * @api {get} /comment/:c_id Get Details About Comment or a Reply
 * @apiName GetComment
 * @apiGroup Comment
 * 
 * @apiParam {String} c_id Comment Unique ID.
 * 
 * @apiSuccess {String} content Text of the Comment.
 * @apiSuccess {Date} c_date Date of the Posted Comment.
 * @apiSuccess {Boolean} reply True if it is a reply.
 * @apiSuccess {Boolean} spoiler True if it is a Spoiler.
 * @apiSuccess {Boolean} locked True if the Replies are Disallowed on this Comment.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If this user can't get info of this comment.
 */


/**
 * @api {get} /comment/all/:id Get Comments or Replies for this ID
 * @apiName GetAllComments
 * @apiGroup Comment
 * 
 * @apiParam {String} c_id Comment Unique ID.
 * @apiParam {Boolean} [comment=false] True if the ID sent is a Comment ID not a Thread ID.
 * 
 * @apiSuccess {objects[]} comments Array of the comments or replies attached to this thread or comment.
 * 
 * @apiError ThreadNotFound The id of the thread wasn't found.
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If this user can't get info of this comment.
 */

/**
 * @api {delete} /comment/:c_id Delete a Comment
 * @apiName DeleteComment
 * @apiGroup Comment
 * 
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
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
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
 * @apiParam {String} c_id Comment Unique ID.
 * @apiParam {String} content Text of the Edited Comment.
 * @apiParam {Boolean} [spoiler=false] True if it is a Spoiler.
 * @apiParam {Boolean} [locked=false] True if Replies are Disallowed on this Comment.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If this user can't edit this comment.
 */

/**
 * @api {put} /comment/vote/:c_id Vote for a Comment
 * @apiName VoteComment
 * @apiGroup Comment
 * 
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
 * @apiParam {String} c_id Comment Unique ID.
 * @apiParam {Number=1,0,-1} direction Direction of the Vote as 1 indicates Upvote, -1 indicates Downvote and 0 means unvoting.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError AccessDenied If the user isn't logged in.
 */

/**
 * @api {post} /comment/save/:c_id Save a Comment
 * @apiName SaveComment
 * @apiGroup Comment
 * 
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
 * @apiParam {String} c_id Comment Unique ID.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError CommentAlreadySaved The Comment has already been saved before.
 * @apiError AccessDenied If the user isn't logged in.
 */

/**
 * @api {delete} /comment/unsave/:c_id UnSave a Comment
 * @apiName UnSaveComment
 * @apiGroup Comment
 * 
 * @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
 * @apiParam {String} c_id Comment Unique ID.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 * @apiError CommentAlreadySaved You can't unsave an unsaved comment.
 * @apiError AccessDenied If the user isn't logged in.
 */

/**
 * @api {get} /comment/expand/:c_id Retrieve additional comments omitted from a base comment tree
 * @apiName ExpandComment
 * @apiGroup Comment
 * 
 * @apiParam {String} c_id Comment Unique ID.
 * 
 * @apiSuccess {String[]} replies An array containing all the replies' IDs to this comment.
 * 
 * @apiError CommentNotFound The id of the comment wasn't found.
 */
const commentHandler = require('./src/Comments/Comment');
app.get("/comment/:c_id",commentHandler.handleGetComment) ;
app.get("/comment/all/:id",commentHandler.handleGetAllComments) ;
app.post("/comment/:id",passport.authenticate('jwt',{session:false}),commentHandler.handlePostComment );
app.put("/comment/:c_id",passport.authenticate('jwt',{session:false}), commentHandler.handleEditComment);
app.delete("/comment/:c_id",passport.authenticate('jwt',{session:false}), commentHandler.handleDeleteComent);


/**
 * @name SrService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */

app.post("/sr/create", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.createSr(req, res));

/**
* @api {post} /sr/create   Create a new subreddit
* @apiName CreateSubreddit
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} srName  unique Name of the subreddit (no longer than 100 character).
* @apiParam {string[]} srRules list of subbreddit rules.
* @apiParam {string}  SyncToken  (NOT YET) Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {string[]}  ModUsername (NOT YET)  Subreddit moderators' usernames.
* @apiSuccess {object} newSubreddit Returns the created subreddit (if any).
*/

app.get("/sr/:srName/meta", (req, res) => subreddit.info(req,res));

/**
* @api {get} /sr/:srName/meta   Views subreddit meta
* @apiName ViewSrMeta
* @apiGroup SrService
*
* @apiParam {string} srName Subreddit name.
* @apiSuccess {string} username Username of Creator.
* @apiSuccess {string} date  date of creation.
* @apiSuccess {object[]} posts All posts. 
* @apiSuccess {string[]} rules   Rules of sr.
* @apiSuccess {string} Bio   Subreddit's bio.
* @apiSuccess {string[]} BannedUsers (NOT YET)   ID of banned users.
* @apiSuccess {string[]} ModIds (NOT YET)  ID of Modertors.
* @apiSuccess {string[]} UserIds (NOT YET  Ids of subscribed users .
* @apiSuccess {Number[]} SubCount (NOT YET)  Number of subscribers.
*
*/

app.delete("/sr/:srName", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.deleteSubreddit(req, res));

/**
* @api {delete} /sr/:srName   Delete a subreddit
* @apiName DeleteSubreddit
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiSuccess {object} deletedSubreddit Returns the deleted subreddit (if any).
*/

app.put("/sr/:srName", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.edit(req,res));

/**
* @api {put} /sr/:srName/    Edit a subreddit
* @apiName EditSubreddit
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string[]} newRules Updated rules.
* @apiParam {string} newName  New name
* @apiParam {string}  About (NOT YET) Updated about
* @apiSuccess {object} editedSubreddit Returns the edited subreddit (if any).
*/


app.post("/sr/:srName/thread", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.createPost(req, res));

/**
* @api {post} /sr/:srName/thread    Create a thread inside subreddit
* @apiName CreateSrThread
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiParam {string} title Title of thread
* @apiParam {string} threadBody Body of the thread.
* @apiParam {boolean}  Spoiler (NOT YET) [Spoiler==false] Mark if post is spoiler
*/

app.put("/sr/:srName/thread/:postId", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.editPost(req, res));

/**
* @api {put} /sr/:srName/thread/:postId    Edit a thread inside subreddit
* @apiName EditSrThread
* @apiGroup SrService
*
*
* @apiParam {string} Token Send token.
* @apiParam {string} title New title of thread
* @apiParam {string} threadBody New body of the thread.
* @apiSuccess {object} editedPost Returns the edited post inside subreddit.
*/

app.delete("/sr/:srName/thread/:postId", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.deletePost(req, res));

/**
* @api {delete} /sr/:srName/thread/:postId    Delete a thread inside subreddit
* @apiName DeleteSrThread
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiSuccess {object} deletedPost Returns the deleted post inside subreddit.
*/

app.post("/sr/:srName/subs", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.subscribe(req, res));

/**
* @api {post} /sr/:srName/subs  Subscribe to a Sr
* @apiName SubredditSubscribtion
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiSuccess {string[]} subscribersList Returns the new subscribers list.
*/

app.delete("/sr/:srName/subs", passport.authenticate('jwt',{session:false}), (req, res) => subreddit.unSubscribe(req, res));

/**
* @api {delete} /sr/:srName/subs   Unsubscribe to a Sr
* @apiName SubredditUnsubscribtion
* @apiGroup SrService
*
* @apiParam {string} Token Send token.
* @apiSuccess {string[]} subscribersList Returns the new subscribers list.
*/


/**
* @api {get} /sr/:SubredditName/listing/:type   ListSubreddits   Generate a list of subreddits 
* @apiName ListSubreddits
* @apiGroup SrService
*
* @apiParam {string} Token.
* @apiParam {string} SubredditName Name of subreddit
* @apiParam {string} Type List according to certain type
* @apiSuccess {string[]} SubredditIDs Returns list of sorted subreddits
*/


const subreddit = require('./Subreddits/subreddits')








/**
 * @name PMService
 * @note These are the routes for anything related to a user.
 * @note This is just general routing, You can modify as you want but before the delivery of the documentation
 */
const privateMessage = require('./src/PM/Pm');


app.post('/me/pm/compose', passport.authenticate('jwt', { session: false }),(req, res) => privateMessage.compose(req, res));
/**
* @api {post} /me/pm/compose    Compose a new message
* @apiName Compose
* @apiGroup PMService
*
* @apiParam {String} receiverUsername unique username.
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {String} subject Subject of the sending message (no longer than 100 character).
* @apiParam {String} messageBody the text of the message sent.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError userNotFound The <code>id</code> of the User was not found.
* @apiError receiverNotFound the username of the receiver was not found.
* @apiError blockedFromSending The user already blocking messages from the receiver
* @apiError overLengthedSubject The length of the subject is above 100 character
* @apiError internalServerError error from the bank end and database manipulation
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


app.post('/me/pm/block', passport.authenticate('jwt', { session: false }), (req, res) => privateMessage.block(req, res));
/**
* @api {post} /me/pm/block   Block
* @apiName Block
* @apiGroup PMService
*
* @apiParam {String} blocked unique username to be blocked.
* @apiParam {Boolean} block true when u need to block false when u need to unblock a user
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError userNotFound The <code>id</code> of the User was not found.
* @apiError usersAlreadyOnBlockLists The user you are trying to block is already on the block list
* @apiError selfBlockAlert an alert if there is a request for selfblock
* @apiError internalServerBlockingError  error from the internal server side
* @apiError canNotBUnblockNonBlockedUser     unblocking not blocked user
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 forbidden 
*     {
*       "error": "canNotBUnblockNonBlockedUser"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "internalServerBlockingError"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "usersAlreadyOnBlockLists"
*     }
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "selfBlockAlert"
*     }
*/

app.delete('/me/pm/delete', passport.authenticate('jwt', { session: false }), (req, res) => privateMessage.delete(req, res));
/**
* @api {delete} /me/pm/delete?messageID=value   Delete
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
* @apiError internalServererror  internal error caused by unexplained behavior
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "messageNotFound"
*     }
*/

app.put('/me/pm/markread', passport.authenticate('jwt', { session: false }), (req, res) => privateMessage.markread(req, res));
/**
* @api {put} /me/pm/markread   Mark Read
* @apiName MarkAsRead
* @apiGroup PMService
*
* @apiParam {String} messageId the id of the message going to be marked as read.
* @apiParam {Boolean} isReadRequest true when user wants to mark as read a message false when user wants to mark message as unread
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
*
* @apiError messageNotFound The <code>id</code> of the Message was not found.
* @apiError internalServererror  internal error caused by unexplained behavior
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "messageNotFound"
*     }
*/


app.post('/me/pm/markreadall', passport.authenticate('jwt', { session: false }), (req, res) => privateMessage.markreadall(req, res));
/**
* @api {post} /me/pm/markreadall   Mark Read-all
* @apiName MarkReadALL
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Boolean} isReadRequest true when user wants to mark as read all message false when user wants to markall as unread
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     }
* @apiError messageNotFound No messages to mark empty array
* @apiError internalServererror  internal error caused by unexplained behavior
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "messageNotFound"
*     }
*/


app.post('/me/pm', passport.authenticate('jwt', { session: false }),(req, res) => privateMessage.retrieve(req, res));
/**
* @api {post} /me/pm/   Retrieve
* @apiName RetrieveMessages
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiParam {Boolean} mine True if u need to retrieve the inbox false if u need to retrieve the sent.
* @apiSuccess {Array} messages Array of Messages    .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*          {
*  {[{
* "_id"         :"5c901c662f87870699fa62e6",
* "sender”      :"kefah",
* "receiver"    : "omar",
* ”subject”     :”URGENT VIP”,
* "messageBody" :”Dear, marwan please”,
* "isRead"      :true
* "messageDate" :"2019-03-18 22:32:06.000Z"
*  },
* {
* "_id"         :"5c901c662f87870699fa62e9",
* "sender”      :"mariam ",
* "receiver"    : "kefah",
* ”subject”     :”URGENT VIP”,
* "messageBody" :”Dear, kefah i want to ,
* "isRead"      :false
* "messageDate" :"2019-03-13 22:32:06.000Z"
*  }
* ]}
*     
*  }
* @apiError internalServerFindingError  internal error caused by unexplained behavior
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "internalServerFindingError"
*     }
*/


app.get('/me/pm/blocklist', passport.authenticate('jwt', { session: false }), (req, res) => privateMessage.retrieveBlock(req, res));
/**
* @api {get} /me/pm/blocklist   Blocklist
* @apiName retrieveBlockList
* @apiGroup PMService
* @apiParam {String} SyncToken Sent as Header used for Synchronization and preventing CHRF Attack.
* @apiSuccess {Array} blocklist Array of people whom the user is blocking  from receieving messages from them  .
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*          {
*  {[{
* "blocked      :"kefah"
*  },
* {
* "blocked      :"marwan "
*  }
* ]}
*     
*          }
*/



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
app.get("/notif", (req, res) => { });


var server = app.listen(4000, function () { console.log('listening') });
module.exports = server;
