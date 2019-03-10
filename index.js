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
 * @api {post} /me/Create Register new user
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
 *    HTTP/1.1 500 Internal Server Error
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
 *    HTTP/1.1 405 Invalid
 * {
 *          "error"":"Invalid credentials""
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
