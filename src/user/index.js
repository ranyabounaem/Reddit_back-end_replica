const User = require("../../models/UserSchema");
const validator = require("email-validator");
const JWTconfig = require("../../JWT/giveToken");
var bcrypt = require('bcrypt');
const saltRounds = 10;

async function checkIfBlockedByMe (user,username)
{
  
  const blockedUser =await user.blockedUsers.find(function(userInBlockedArray) {
    return userInBlockedArray === username;
  });

  if(blockedUser){return true}
  else return false;
}

async function checkIfBlockedByHim (user,username){
  
  const blockedUser =await user.blockedUsers.find(function(userInBlockedArray)
  {
   return userInBlockedArray === username;
 })

 if(blockedUser){return true}
 else return false;
 
}

async function checkFriend(user, fUsername)
{
  const Friend =await user.Friends.find(function(UserInFriendsarray) {
    return UserInFriendsarray === fUsername;
  });

  if(Friend){return true;}
  else return false;
}

async function checkSentReq(user, fUsername)
{
  const sentReq =await user.SentReq.find(function(UserInSentReqsarray) {
    return UserInSentReqsarray === fUsername;
  });

  if(sentReq){return true;}
  else return false;
}
async function checkRecReq(user, fUsername)
{
  const recReq =await user.RecReq.find(function(UserInRecReqarray) {
    return UserInRecReqarray === fUsername;
  });

  if(recReq){return true;}
  else return false;
}

function AddReq(user, fUser)
{
  user.SentReq.push(fUser.Username);
  user.save();

  fUser.RecReq.push(user.Username);
  fUser.save();
}

function popSentRequest(user, fUser)
{
  user.SentReq.pop(fUser.Username);
  user.save();

  fUser.RecReq.pop(user.Username);
  fUser.save();
}

function removeFriend(user, fUser)
{
  user.Friends.pop(fUser.Username);
  user.save();

  fUser.Friends.pop(user.Username);
  fUser.save();
}

acceptRequest
function acceptRequest(user, fUser)
{
  user.Friends.push(fUser.Username);
  user.save();

  fUser.Friends.push(user.Username);
  fUser.save();
}


class UserHandler {
  constructor() {}
  async isUserFound(owner) {
    let y = await User.findOne({ Username: owner });
    if (y != null) {
      return true;
    } else {
      return false;
    }
  }
  /**
   *     a function that Creates a new user
   *     @function handleRegistration
   *     @returns {JSON} the response for the request
   */
  async handleRegistration(req, res) {
    const user = await User.findOne({
      $or: [{ Username: req.body.Username }, { Email: req.body.Email }]
    });
    /**
     *    This checks if the username or email already exists
     *    if the username exists in the database
     *    the response will be { "error": "Username already exists"} with status 406
     *    if the email exist in the database
     *    the response will be { "error": "Email already exists"} with status 406
     *
     */
    if (user !== null) {
      if (req.body.Username == user.Username) {
        res.status(406).send({ error: "Username already exists" });
      } else {
        res.status(406).send({ error: "Email already exists" });
      }
    } else {
      if (validator.validate(req.body.Email) == true) {
        /**
         *    This checks if the password ti at least 8 characters
         *    if the password is too short
         *    the response will be { "error": "Password too short"} with status 406
         */

        if (req.body.Password.length < 8) {
          res.status(406).send({ error: "Password too short" });
        } else {
          /**
           *    This inserts the user after validation
           *    if successful
           *    and sends a response {"Username","Email"} with status 200
           *    otherwise it returns the databe error
           */

          try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hashed=await bcrypt.hash(req.body.Password,salt);
            req.body.Password=hashed;

            const user = await User.create(req.body);
            /**
             *   This creates a new token
             */
            const token = await JWTconfig.getToken(user);

            res
              .status(200)
              .send({ Username: user.Username, Email: user.Email, token });
          } catch (ex) {
            res.status(406).send({ error: ex.message });
          }
        }
      } else {
        /**
         *    This checks if the email is teh correct format text@text.***
         *    if the format is wrong
         *    the response will be { "error": "Invalid Email format"} with status 406
         */

        res.status(406).send({ error: "Invalid Email format" });
      }
    }
  }

  /**
   *     a function that logs users in
   *     @function handleLogin
   *     @returns {JSON} the response for the request
   */
  async handleLogin(req, res) {
    /**
     *    This checks if the user actually exists
     *    if the hes doesnt
     *    the response will be { "error": "User doesnt exist"} with status 404
     *    if it is correct the password will be checked
     */

    const user = await User.findOne({ Username: req.body.Username });

    if (user !== null) {
      /**
       *    This checks if the users password is correct
       *    if it isnt
       *    the response will be { "error": "Invalid Password"} with status 401
       *    if it is
       *    the response will be { "error": successful login"} with status 200
       */


      const bycryptComp=await bcrypt.compare(req.body.Password,user.Password);
      if (bycryptComp) {
        const token = await JWTconfig.getToken(user);

        res.status(200).send({ message: "successful login", token });
      } else {
        res.status(401).send({ error: "Invalid Password" });
      }
    } else {
      res.status(404).send({ error: "User doesnt exist" });
    }
  }

  /**
   *     a function that edits the email of the user
   *     @function EditUserEmail
   *     @returns {JSON} the response for the request
   */
  EditUserEmail(req, res) {
    // if (JWTconfig.authenticate(req, req.params.Username) == false) {
    //   res.status(403).send({ error: "Not Authorized" });
    // }
    /**
     *    This checks if the Username received is a valid username in the database
     *    if the username doesn't exist in the database
     *    the response will be { "error": "UserNotFound"} with status 404
     */
    User.findOne({ Username: req.params.Username }).then(function(RetUser) {
      if (RetUser === null) {
        res.status(404).send({ error: "UserNotFound" });
      } else {
      /**
       *    This checks if the Email received already exists in the database
       *    if the email exists in the database
       */
        User.findOne({ Email: req.body.Email }).then(function(RetEmail) {
          if (RetEmail === null) {
            /**
             *    This checks if the Email is valid and can be used
             *    if the Email is valid it updates it in the database
             *    and sends a response "update successful" with status 200
             */
            if (validator.validate(req.body.Email) == true) {
              User.findOneAndUpdate(
                { Username: req.params.Username },
                { Email: req.body.Email }
              ).then(function(RetUser) {
                //TODO RETURN 200
                res.status(200).send("update successful");
              });
            } else {
            /**
             *    If the Email is invalid it sends an error response
             *    { error: "Invalid Email format" } with status 406
             */
              res.status(406).send({ error: "Invalid Email format" });
            }
          } else {
          /**
           *    If the Email exists in the database
           *    it sends an error response
           *    {error : "Email already exists"} with status 406
           */
            res.status(406).send({ error: "Email already exists" });
          }
        });
      }
    });
  }

  /**
   *     a function that edits the Password of the user
   *     @function EditUserPassword
   *     @returns {JSON} the response for the request
   */
  EditUserPassword(req, res) {
    /**
     *    This checks if the Username received is a valid username in the database
     *    if the username doesn't exist in the database
     *    the response will be { "error": "UserNotFound"} with status 404
     */
    User.findOne({ Username: req.params.Username }).then(function(RetUser) {
      if (RetUser === null) {
        res.status(404).send({ error: "UserNotFound" });
        
      } else {
        
        bcrypt.compare(req.body.OldPassword,RetUser.Password ).then(function(result){

        if (!result) {

        
      /**
       *    This checks if the OldPassword entered by the user
       *    is the same Password saved in the database
       *    if these password don't match
       *    the response will be { error: "Wrong Password"} with status 401
       */
        res.status(401).send({ error: "Wrong Password" });
      } else if (req.body.NewPassword.length < 8) {
      /**
       *    This checks if the NewPassword entered by the user
       *    has a length greater than 8 characters
       *    if it's length is less than 8 characters
       *    the response will be { error: "Password too short" } with status 406
       */
        res.status(406).send({ error: "Password too short" });
      } else {
      /**
       *    This updates the password of the user to the new password
       *    the response will be "Password successfully updated" with status 200
       */

      bcrypt.hash(req.body.NewPassword,saltRounds).then(function(hash){

        User.findOneAndUpdate(
          { Username: req.params.Username },
          { Password: hash}
        ).then(function(RetUser) {
          res.status(200).send("Password successfully updated");
        });
      })
      }
      })
    }
    });
  }
  /**
   *     a function that gets the info of the user
   *     @function Getmyinfo
   *     @returns {JSON} the data of the user or the an error response
   */
  Getmyinfo(req, res) {
    /**
     *    This checks if the Username received is a valid username in the database
     */
    User.findOne({ Username: req.params.Username }).then(function(RetUser) {
      /**
       *    if the username doesn't exist in the database
       *    the response will be { "error": "UserNotFound"} with status 404
       */
      if (RetUser === null) {
        res.status(404).send({ error: "UserNotFound" });
      } else {
      /**
       *    This returns the info of the user
       *    the response will be {Username : "", Email : ""} with status 200
       */
        res
          .status(200)
          .send({ Username: req.params.Username, Email: RetUser.Email });
      }
    });
  }

  /**
   *     a function that Blocks a user
   *     @function blockUser
   *     @returns {JSON} the response for the request
   */

  async blockUser(req, res) {
    /**
     *    This finds the user that is going to block using the username in token
     */

    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
     *    This finds the user that is going to BE blocked using the username request
     * if he doesnt exist the reponse will be "the user you want to block doesnt exist" with status 200
     */

    const userToBlock = await User.findOne({ Username: req.body.blockedUser });

    /**
     *    This checks if you are trying to block yourself and prevents it
     */

    if (username == req.body.blockedUser) {
      res.status(404).send({ error: "you cant block yourself" });
    } 
    
    else {
      if (!userToBlock) {
        res
          .status(404)
          .send({ error: "the user you want to block doesnt exist" });
      } else {

      /**
       *    This finds if the user you want to block already is blocked
       * if he is the the response will be "this user is already blocked"
       */
        const previouslyBlockedUser =await checkIfBlockedByMe(user,req.body.blockedUser);
       
        if (previouslyBlockedUser) {
          res
            .status(404)
            .send({ error: "the user you want to block is already blocked" });
        } else {
        /**  
  adds blocked user to blocked array 
  */
          user.blockedUsers.push(req.body.blockedUser);
          user.save();     
          res.status(200).send({ message: "User Blocked" });
        }
      }
    }
  }

  /**
   *     a function that Unblocks a user
   *     @function unblockUser
   *     @returns {JSON} the response for the request
   */
  async unblockUser(req, res) {
    /**
     *    This finds the user that is going to unblock using the username in token
     */

    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
     *    This checks if user to be unblocked is infact blocked
     * returns "the user you want to unblock isnt blocked" if he isnt blocked with status 200
     */

    const blocked=await checkIfBlockedByMe(user,req.body.unblockedUser);

    if (!blocked) {
      res
        .status(404)
        .send({ error: "the user you want to unblock isnt blocked" });
    } else {
    /**  
       removes blocked user from blocked array 
       retruns "User Unblocked" with status 200
  */
      user.blockedUsers.pop(req.body.blockedUser);
      user.save();
      res.status(200).send({ message: "User Unblocked" });
    }
  }


/**
   *     a function that gets a list of blocked user names
   *     @function getBlockedUsers
   *     @returns {JSON} the response for the request
   */
  async getBlockedUsers(req,res)
{
  const username = JWTconfig.getUsernameFromToken(req);
  const user = await User.findOne({ Username: username });

/**
   *   returns a list of blocked username with status 200
   */

  res.status(200).send(user.blockedUsers);

}

/**
   *     a function that gets user info when logged in
   *     @function getUserInfoLogged
   *     @returns {JSON} the response for the request
   */
  async getUserInfoLogged(req,res)
  {
    /**
       *get username from token
       */
    const username = JWTconfig.getUsernameFromToken(req);
    /**
       *Check if viewed user exists
       */
    const userViewed = await User.findOne({ Username: req.body.userToView})
    if(!userViewed){res.status(404).send({message:"User doesnt exist"})}
    /**
       *Check if viewed blocked the viewing user
       */
    const blockedUser = await checkIfBlockedByHim(userViewed,username);

    if(blockedUser){res.status(404).send({message:"User doesnt exist"})}

    else{
    /**
       *return info 
       */
    const userinfo=
    {
      Username:req.body.userToView,
      Subscriptions: userViewed.Subscriptions
    }

    res.status(200).send(userinfo);
  }}

  
/**
   *     a function that gets user info when not logged in
   *     @function getUserInfo
   *     @returns {JSON} the response for the request
   */
  async getUserInfo(req,res)
  {

    /**
       *Check if viewed user exists
       */
    const userViewed = await User.findOne({ Username: req.body.userToView})
    if(!userViewed){res.status(404).send({message:"User doesnt exist"})}
    
    /**
       *return info 
       */
    const userinfo=
    {
      Username:req.body.userToView,
      Subscriptions: userViewed.Subscriptions
    }

    res.status(200).send(userinfo);



    
    


  }

   /**
   *     a function that Sends a friend request
   *     @function addFriend
   *     @returns {JSON} the response for the request
   */
  async addFriend(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    if(req.body.fUsername == null) res.status(404).send({error :"fUsername not found"});

    else
    {
      const userToAdd = await User.findOne({ Username: req.body.fUsername });
      if(userToAdd == null) res.status(404).send({error : "User to be added not found"});
      else
      {
        if(username === req.body.fUsername) res.status(402).send({error: "User cannot add himself"});

        const blockedByHim=await checkIfBlockedByHim(userToAdd, username);
        const blockedByMe=await checkIfBlockedByMe(user, req.body.fUsername);
        const Friend = await checkFriend(user, req.body.fUsername);
        const recReq = await checkRecReq(user, req.body.fUsername);
        const sentReq =await checkSentReq(user, req.body.fUsername);

        if(blockedByHim) res.status(401).send({error: "The sending User is blocked"});
        else if(blockedByMe) res.status(401).send({error: "The user to be added is blocked"});
        else if(Friend) res.status(401).send({error: "The User to be added is already a friend"});
        else if(recReq) res.status(401).send({error: "User has already received a request from the other user"});
        else if(sentReq) res.status(401).send({error: "User has already sent a request to the other user"});
        else
        {
        AddReq(user,userToAdd);
        res.status(200).send({ message: "Friend request Sent" });
        }
      }
    }
  }

  // TODO REMOVE REQ
    /**
   *     a function that removes a friend request
   *     @function RemoveReq
   *     @returns {JSON} the response for the request
   */
  async RemoveReq(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    if(req.body.fUsername == null) res.status(404).send("fUsername not found");

    else
    {
      const userToRemove = await User.findOne({ Username: req.body.fUsername });
      if(userToRemove == null) res.status(404).send({error : "User to be removed not found"});
      else
      {
        const sentReq =await checkSentReq(user, req.body.fUsername);
        if(!sentReq) res.status(404).send({error: "Request doesn't exist"});
        else
        {
          popRequest(user, userToRemove);
          res.status(200).send({ message: "Friend request Removed" });
        }
      }
    }
  }

  async unFriend(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    if(req.body.fUsername == null) res.status(404).send("fUsername not found");

    else
    {
      const friendToRemove = await User.findOne({ Username: req.body.fUsername });
      if(friendToRemove == null) res.status(404).send({error : "User to unFriend not found"});
      else
      {
        const Friend = await checkFriend(user, req.body.fUsername);
        if(!Friend) res.status(401).send({error: "This user is not a friend"});
        else
        {
          removeFriend(user,friendToRemove);
          res.status(200).send({ message: "Friend is removed from friends list" });
        }
      }
    }
  }
  async acceptRequest(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    if(req.body.fUsername == null) res.status(404).send("fUsername not found");

    else
    {
      const friendToAccept = await User.findOne({ Username: req.body.fUsername });
      if(friendToAccept == null) res.status(404).send({error : "User to accept not found"});
      else
      {
        const Friend = await checkFriend(user, req.body.fUsername);
        const recReq = await checkRecReq(user, req.body.fUsername);
        if(Friend) res.status(401).send({error: "This user is already a friend"});
        else if(!recReq) res.status(401).send({error: "There isn't a request to be accepted"});
        else
        {
          acceptRequest(user,friendToAccept);
          popSentRequest(friendToAccept, user);
          res.status(200).send({ message: "Friend request accepted" });
        }
      }
    }
  }
  async rejectRequest(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    if(req.body.fUsername == null) res.status(404).send("fUsername not found");

    else
    {
      const friendToReject = await User.findOne({ Username: req.body.fUsername });
      if(friendToReject == null) res.status(404).send({error : "User to reject not found"});
      else
      {
        const Friend = await checkFriend(user, req.body.fUsername);
        const recReq = await checkRecReq(user, req.body.fUsername);
        if(Friend) res.status(401).send({error: "This user is already a friend"});
        else if(!recReq) res.status(401).send({error: "There isn't a request to be rejected"});
        else
        {
          
          popSentRequest(friendToReject, user);
          res.status(200).send({ message: "Friend request rejected" });
        }
      }
    }
  }

  async getFriends(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({Friends :user.Friends});
  }

  async getSentRequests(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({sentRequests: user.SentReq});
  }

  async getReceivedRequests(req, res)
  {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({receivedRequests: user.RecReq});
  }


}
module.exports = new UserHandler();
