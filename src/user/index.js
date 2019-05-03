const User = require("../../models/UserSchema");
const flair = require("../../models/Flair");
const src = require("../../models/subredditsSchema");
const sr = src.Subreddit;
const notification = require('../../models/notificationSchema.js');
const validator = require("email-validator");
const JWTconfig = require("../../JWT/giveToken");
var bcrypt = require('bcrypt');
const saltRounds = 10;
const commentHandler = require('../Comments/Comment').cm;

const nodeMailer = require('nodemailer');

async function checkIfBlockedByMe(user, username) {

  const blockedUser = await user.blockedUsers.find(function (userInBlockedArray) {
    return userInBlockedArray === username;
  });

  if (blockedUser) { return true }
  else return false;
}
async function checkIfBlockedByHim(user, username) {

  const blockedUser = await user.blockedUsers.find(function (userInBlockedArray) {
    return userInBlockedArray === username;
  })

  if (blockedUser) { return true }
  else return false;

}
async function checkFriend(user, fUsername) {
  const Friend = await user.Friends.find(function (UserInFriendsarray) {
    return UserInFriendsarray === fUsername;
  });

  if (Friend) { return true; }
  else return false;
}
async function checkSentReq(user, fUsername) {
  const sentReq = await user.SentReq.find(function (UserInSentReqsarray) {
    return UserInSentReqsarray === fUsername;
  });

  if (sentReq) { return true; }
  else return false;
}
async function checkRecReq(user, fUsername) {
  const recReq = await user.RecReq.find(function (UserInRecReqarray) {
    return UserInRecReqarray === fUsername;
  });

  if (recReq) { return true; }
  else return false;
}
function blockAndRemove(user, fUser) {
  user.Friends.pop(fUser.Username);
  fUser.Friends.pop(user.Username);
  user.SentReq.pop(fUser.Username);
  fUser.RecReq.pop(user.Username);
  fUser.SentReq.pop(user.Username);
  user.RecReq.pop(fUser.Username);
  user.blockedUsers.push(fUser.Username);
  user.save();
  fUser.save();
}
function AddReq(user, fUser) {
  user.SentReq.push(fUser.Username);
  user.save();

  fUser.RecReq.push(user.Username);
  fUser.save();
}
function popSentRequest(user, fUser) {
  user.SentReq.pop(fUser.Username);
  user.save();

  fUser.RecReq.pop(user.Username);
  fUser.save();
}
function removeFriend(user, fUser) {
  user.Friends.pop(fUser.Username);
  user.save();

  fUser.Friends.pop(user.Username);
  fUser.save();
}
function acceptRequest(user, fUser) {

  user.RecReq.pop(fUser.Username);
  fUser.SentReq.pop(user.Username);
  user.Friends.push(fUser.Username);
  fUser.Friends.push(user.Username);
  user.save();
  fUser.save();
}
/**
 * @description An async function that makes sure that the guest user is subscribed to all subreddits.
 * @function SubscribeGuestUser
 * @example
 * await SubscribeGuestUser()
 * @returns {Promise}
 */
async function SubscribeGuestUser() {
  await User.findOne({ Username: "guest" }, function (err) {
    if (err) {
      res.status(500).send({ 'error': 'internal server error' });
    }
  }).then(async function (user) {
    const subreddits = await sr.find({});
    const srNames = subreddits.map(sr => sr.name);

    user.Subscriptions = srNames;

    user.save(function (err) {
      if (err) {
        throw new Error("Couldn't save it...");
      }
    });
  });
}

class UserHandler {
  constructor() { }
  async isUserFound(owner) {
    let y = await User.findOne({ Username: owner });
    if (y != null) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @description Subscribes guest User and sends its token
   * @param {Object<Request>} req 
   * @param {Object<Response>} res 
   * @returns {JSON}
   */
  async getGuestToken(req, res) {
    try {
      await SubscribeGuestUser();
      const guest = await User.findOne({ Username: "guest" });
      const token = await JWTconfig.getToken(guest);
      res.status(200).send({ "Token": token });
    } catch (e) {
      console.error(e);
      res.status(404).send({ "message": "No one ran the tests, or Atwa needs to die... Now? Please?..." });
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
            const hashed = await bcrypt.hash(req.body.Password, salt);
            req.body.Password = hashed;

            const user = await User.create(req.body);
            const addDate = await User.updateOne({ _id: user._id }, { $set: { cakeday: Date.now() } })
            const saveDate = await user.save();
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


      const bycryptComp = await bcrypt.compare(req.body.Password, user.Password);
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
    User.findOne({ Username: req.params.Username }).then(function (RetUser) {
      if (RetUser === null) {
        res.status(404).send({ error: "UserNotFound" });
      } else {
        /**
         *    This checks if the Email received already exists in the database
         *    if the email exists in the database
         */
        User.findOne({ Email: req.body.Email }).then(function (RetEmail) {
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
              ).then(function (RetUser) {
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
    User.findOne({ Username: req.params.Username }).then(function (RetUser) {
      if (RetUser === null) {
        res.status(404).send({ error: "UserNotFound" });

      } else {

        bcrypt.compare(req.body.OldPassword, RetUser.Password).then(function (result) {

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

            bcrypt.hash(req.body.NewPassword, saltRounds).then(function (hash) {

              User.findOneAndUpdate(
                { Username: req.params.Username },
                { Password: hash }
              ).then(function (RetUser) {
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
    User.findOne({ Username: req.params.Username }).then(function (RetUser) {
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
          .send(RetUser);
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
     * if he doesnt exist the reponse will be "the user you want to block doesnt exist" with status 404
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
        const previouslyBlockedUser = await checkIfBlockedByMe(user, req.body.blockedUser);

        if (previouslyBlockedUser) {
          res
            .status(404)
            .send({ error: "the user you want to block is already blocked" });
        } else {
          /**  
    *adds blocked user to blocked array
    *it also removed any friend requests between the 2 users and removed them fro friends list  
    */
          blockAndRemove(user, userToBlock);

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

    const blocked = await checkIfBlockedByMe(user, req.body.unblockedUser);

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
  async getBlockedUsers(req, res) {
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
       *   returns a list of blocked username with status 200
       */

  res.status(200).send({Blocked :user.blockedUsers});

  }

  /**
     *     a function that gets user info when logged in
     *     @function getUserInfoLogged
     *     @returns {JSON} the response for the request
     */
  async getUserInfoLogged(req, res) {
    /**
       *get username from token
       */
    const username = JWTconfig.getUsernameFromToken(req);
    /**
       *Check if viewed user exists
       */
    const userViewed = await User.findOne({ Username: req.params.userToView })

    if (!userViewed) { res.status(404).send({ message: "User doesnt exist" }) }
    else {
      /**
         *Check if viewed blocked the viewing user
         *if he is blocked , it says that the user doesnt exist
         */
      const blockedUser = await checkIfBlockedByHim(userViewed, username);

      if (blockedUser) { res.status(404).send({ message: "User doesnt exist" }) }
      else {

        const Friend = await checkFriend(userViewed, username);

        if (!Friend) {
          /**
             *return info 
             */
          const userinfo =
          {
            Username: req.params.userToView,
            cakeday: userViewed.cakeday,
            About: userViewed.About
          }

          res.status(200).send(userinfo);
        }

        else {

          const userinfo1 =
          {
            Username: req.params.userToView,
            Subscriptions: userViewed.Subscriptions,
            cakeday: userViewed.cakeday,
            savedPosts: userViewed.SavedPosts,
            About: userViewed.About,
            Friends: userViewed.Friends
          }

          res.status(200).send(userinfo1);


        }
      }
    }
  }


  /**
     *     a function that gets user info when not logged in
     *     @function getUserInfo
     *     @returns {JSON} the response for the request
     */
  async getUserInfo(req, res) {

    /**
       *Check if viewed user exists
       */
    const userViewed = await User.findOne({ Username: req.params.userToView })
    if (!userViewed) { res.status(404).send({ message: "User doesnt exist" }) }

    else {
      /**
         *return info 
         */
      const userinfo =
      {
        Username: req.params.userToView,
        Subscriptions: userViewed.Subscriptions,
        cakeday: userViewed.cakeday
      }

      res.status(200).send(userinfo);
    }
  }

  /**
  *     a function that Sends a friend request
  *     @function addFriend
  *     @returns {JSON} the response for the request
  */
  async addFriend(req, res, emitter) {
    /**
    *    This finds the user that is going to Send a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the fUsername isn't in the request
    *     if not found it sends error 404 with message "fUsername not found"
    */
    if (req.body.fUsername == null) {
      res.status(404).send({ error: "fUsername not found" });
    }
    else {
      /**
      *    This finds the user that is going to be added
      */
      const userToAdd = await User.findOne({ Username: req.body.fUsername });
      /**
      *    This checks if the user that that is going to be added exists in the database
      *    if not found it sends error 404 with message "User to be added not found"
      *    else we need to make certain validations before sending the request
      */
      if (userToAdd == null) res.status(404).send({ error: "User to be added not found" });
      else {
        /**
         *    This checks if the user is trying to add himself
         *    if so it sends an error 402 with message "User cannot add himself"
         *    else we'll make some other validations
        */
        if (username === req.body.fUsername) res.status(402).send({ error: "User cannot add himself" });
        else {
          /**
           *    This checks if the user is blocked by the user to be added
           *    then if the user to be added is blocked by the sending user
           *    then if the user to be added is already a friend
           *    then if the User attempting to send a request has already received a request from the other user
           *    then if the User attempting to send a request has already Sent a request to the other user
          */
          const blockedByHim = await checkIfBlockedByHim(userToAdd, username);
          const blockedByMe = await checkIfBlockedByMe(user, req.body.fUsername);
          const Friend = await checkFriend(user, req.body.fUsername);
          const recReq = await checkRecReq(user, req.body.fUsername);
          const sentReq = await checkSentReq(user, req.body.fUsername);

          if (blockedByHim) res.status(401).send({ error: "The sending User is blocked" });
          else if (blockedByMe) res.status(401).send({ error: "The user to be added is blocked" });
          else if (Friend) res.status(401).send({ error: "The User to be added is already a friend" });
          else if (recReq) res.status(401).send({ error: "User has already received a request from the other user" });
          else if (sentReq) res.status(401).send({ error: "User has already sent a request to the other user" });
          /**
          *    else it sends a friend request
          */
          else {
            const n = new notification({
              type: 'friendRequest',
              username: userToAdd.Username,
              read: false,
              sourceID: null,
              message: user.Username + ' has sent you a friend request',
              date: Date()
            });
            emitter.emit("notification", {
              type: 'friendRequest',
              username: userToAdd.Username,
              read: false,
              sourceID: null,
              message: user.Username + ' has sent you a friend request',
              date: Date()
            });
            n.save();
            AddReq(user, userToAdd);
            res.status(200).send({ message: "Friend request Sent" });
          }
        }
      }
    }
  }


  /**
 *     a function that removes a friend request
 *     @function RemoveReq
 *     @returns {JSON} the response for the request
 */
  async RemoveReq(req, res) {
    /**
    *    This finds the user that is going to Remove a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the fUsername isn't in the request
    *     if not found it sends error 404 with message "fUsername not found"
    */
    if (req.body.fUsername == null) res.status(404).send({ error: "fUsername not found" });

    else {
      /**
      *    This finds the user that the request was sent to
      */
      const userToRemove = await User.findOne({ Username: req.body.fUsername });
      /**
      *    This checks if the user that the request was sent to exists in the database
      *    if not found it sends error 404 with message "User to be removed not found"
      *    else we need to make certain validations before removing the request
      */
      if (userToRemove == null) res.status(404).send({ error: "User to be removed not found" });
      else {
        /**
        *    This checks if there's a request for that user in the database
        *    if not found it sends error 404 with message "Request doesn't exist"
        *    else the request is removed with status 200 and response "Friend request Removed"
        */
        const sentReq = await checkSentReq(user, req.body.fUsername);
        if (!sentReq) res.status(404).send({ error: "Request doesn't exist" });
        else {
          popSentRequest(user, userToRemove);
          res.status(200).send({ message: "Friend request Removed" });
        }
      }
    }
  }

  /**
*     a function that removes a friend from the friends list
*     @function unFriend
*     @returns {JSON} the response for the request
*/
  async unFriend(req, res) {
    /**
    *    This finds the user that is going to Unfriend another user using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the fUsername isn't in the request
    *     if not found it sends error 404 with message "fUsername not found"
    */
    if (req.body.fUsername == null) res.status(404).send("fUsername not found");

    else {
      const friendToRemove = await User.findOne({ Username: req.body.fUsername });
      /**
      *    This checks if the user that the request was sent to exists in the database
      *    if not found it sends error 404 with message "User to unFriend not found"
      *    else we need to make certain validations before removing the request
      */
      if (friendToRemove == null) res.status(404).send({ error: "User to unFriend not found" });
      else {
        const Friend = await checkFriend(user, req.body.fUsername);
        /**
         *    this checks if the user to unfriend exists in the friends list
         *    if not found in the list it sends an error 401 with message "This user is not a friend"
        */
        if (!Friend) res.status(401).send({ error: "This user is not a friend" });
        /**
         *    if the user exists in the friends list , the friend gets removed from the list
        */
        else {
          removeFriend(user, friendToRemove);
          res.status(200).send({ message: "Friend is removed from friends list" });
        }
      }
    }
  }

  /**
*     a function that accepts a friend request
*     @function acceptRequest
*     @returns {JSON} the response for the request
*/
  async acceptRequest(req, res) {
    /**
    *    This finds the user that is going to accept a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the fUsername isn't in the request
    *     if not found it sends error 404 with message "fUsername not found"
    */
    if (req.body.fUsername == null) res.status(404).send("fUsername not found");

    else {
      const friendToAccept = await User.findOne({ Username: req.body.fUsername });
      /**
      *    This checks if the user that sent the request exists in the database
      *    if not found it sends error 404 with message User to accept not found"
      *    else we need to make certain validations before accepting the request
      */
      if (friendToAccept == null) res.status(404).send({ error: "User to accept not found" });
      else {
        /**
         *    this checks if the user to accept a request from is already a friend
         *    if not it checks it there's a request from that user in the database
        */
        const Friend = await checkFriend(user, req.body.fUsername);
        const recReq = await checkRecReq(user, req.body.fUsername);
        if (Friend) res.status(401).send({ error: "This user is already a friend" });
        else if (!recReq) res.status(401).send({ error: "There isn't a request to be accepted" });
        /**
         *    if the request exists in the database the request is accepted
        */
        else {
          acceptRequest(user, friendToAccept);
          res.status(200).send({ message: "Friend request accepted" });
        }
      }
    }
  }

  /**
*     a function that rejects a friend request
*     @function rejectRequest
*     @returns {JSON} the response for the request
*/
  async rejectRequest(req, res) {
    /**
    *    This finds the user that is going to reject a friend request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the fUsername isn't in the request
    *     if not found it sends error 404 with message "fUsername not found"
    */
    if (req.body.fUsername == null) res.status(404).send("fUsername not found");

    else {
      const friendToReject = await User.findOne({ Username: req.body.fUsername });
      /**
      *    This checks if the user that sent the request exists in the database
      *    if not found it sends error 404 with message "User to reject not found"
      *    else we need to make certain validations before rejecting the request
      */
      if (friendToReject == null) res.status(404).send({ error: "User to reject not found" });
      else {
        /**
         *    this checks if the user to reject a request from is already a friend
         *    if not it checks it there's a request from that user in the database
        */
        const Friend = await checkFriend(user, req.body.fUsername);
        const recReq = await checkRecReq(user, req.body.fUsername);
        if (Friend) res.status(401).send({ error: "This user is already a friend" });
        else if (!recReq) res.status(401).send({ error: "There isn't a request to be rejected" });
        /**
         *    if the request exists in the database the request is rejected
        */
        else {

          popSentRequest(friendToReject, user);
          res.status(200).send({ message: "Friend request rejected" });
        }
      }
    }
  }

  /**
  *     a function that returns the list of friends for a certain user
  *     @function getFriends
  *     @returns {JSON} the response for the request
  */
  async getFriends(req, res) {
    /**
    *    This finds the user that is going to get his list of using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({ Friends: user.Friends });
  }

  /**
   *     a function that returns the list of Sent requests for a certain user
   *     @function getSentRequests
   *     @returns {JSON} the response for the request
   */
  async getSentRequests(req, res) {
    /**
    *    This finds the user that is going to get the list of sent requests using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({ sentRequests: user.SentReq });
  }
  /**
   *     a function that returns the list of Received requests for a certain user
   *     @function getReceivedRequests
   *     @returns {JSON} the response for the request
   */
  async getReceivedRequests(req, res) {
    /**
    *    This finds the user that is going to get a list of received requests using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    res.status(200).send({ receivedRequests: user.RecReq });
  }

  /**
   *     a function that craetes a new flair 
   *     @function createFlair
   *     @returns {JSON} the response for the request
   */
  async createFlair(req, res) {
    const username = JWTconfig.getUsernameFromToken(req);
    const srName = req.body.srName

    /**
   *     checks if data is sent correctly
   */
    if (!srName) { res.status(404).send({ error: "subreddit name missing" }) }
    else {

      /**
     *     checks if user already has a flair in this subreddit 
     */
      const flairExists = await flair.findOne({ $and: [{ username }, { srName }] })

      if (flairExists) { res.status(404).send({ error: "you alredy have a flair in this subreddit" }) }
      else {
        const srExists = await sr.findOne({ name: srName });

        /**
       *     checks if subreddit exists 
       */
        if (!srExists) { res.status(404).send({ error: "subreddit doesnt exist" }) }
        else {
          const flairName = req.body.flair;
          /**
     *     checks if flair name was sent 
     */
          if (!flairName) { res.status(404).send({ error: "flair missing" }) }
          else {

            /**
     *     creates the flair in the flair coleection
     */
            const createFlair = await flair.create({ username, srName, flair: flairName });
            res.status(200).send({ message: "flair created" })
          }
        }
      }
    }
  }

  /**
   *     a function gets all flairs for user
   *     @function getAllFlairs
   *     @returns {JSON} the response for the request
   */
  async getAllFlairs(req, res) {
    const username = JWTconfig.getUsernameFromToken(req);


    /**
    *    This finds the flairs and checks if there are none 
    */
    const flairsReturned = await flair.find({ username });
    if (flairsReturned.length == 0) { res.status(404).send({ error: "No flairs" }); }

    else
      res.status(200).send(flairsReturned);
  }

  /**
   *     a function gets all flairs for user
   *     @function getFlairsSubreddit
   *     @returns {JSON} the response for the request
   */

  async getFlairsSubreddit(req, res) {
    const username = JWTconfig.getUsernameFromToken(req);
    const srName = req.params.srName

    /**
    *    This finds the flair 
    * 
    */
    const flairsReturned = await flair.findOne({ $and: [{ username }, { srName }] })
    if (!flairsReturned) { res.status(404).send({ error: "No flairs" }); }

    else
      res.status(200).send({ "flair": flairsReturned.flair });
  }

  async deleteFlair(req, res) {
    const username = JWTconfig.getUsernameFromToken(req);
    const srName = req.params.srName

    /**
    *    This finds the flair 
    * 
    */
    const flairsReturned = await flair.findOne({ $and: [{ username }, { srName }] })
    if (!flairsReturned) { res.status(404).send({ error: "No flairs" }); }


    /**
    *    This deletes the flair 
    * 
    */
    else {
      const flairId = flairsReturned._id;
      const flairDelete = await flair.findOneAndDelete({ _id: flairId });
      res.status(200).send({ message: "flair removed" });
    }
  }

  /**
     *     a function send email with a new password
     *     @function forgetPassword
     *     @returns {JSON} the response for the request
     */
  async forgetPassword(req, res) {

    /**
    *    This finds the user that will be sent the recovery email and checks if he even exists
    * 
    */
    const username = req.params.username;
    const user = await User.findOne({ Username: username });

    if (!user) { res.status(404).send({ error: "User doesnt exist" }) }

    else {

      /**
    *    genetartes a random password
    * 
    */
      const userEmail = user.Email;
      const newPass = Math.floor((Math.random() * 10000) * Math.random() * 10000 * (Math.random() * 10000));
      const newPassString = newPass.toString();

      /**
      *   setting up nodemailer with the memestock email
      * 
      */
      const trans = nodeMailer.createTransport
        ({
          service: 'gmail',
          secure: false,
          port: 25,
          auth:
          {
            user: "memestockhelp@gmail.com",
            pass: "Meme123456789"
          },
          tls: { rejectUnauthorized: false }

        });

      const helperOptions =
      {
        from: '"Memestock" = memestockhelp@gmail.com',
        to: userEmail,
        subject: "Recover Password",
        text: "Your new password is:  " + newPass + "\n You are advised to change it when you can.\n \n  \n  Memestock help"
      };


      trans.sendMail(helperOptions, (err, info) => {
        if (err) { res.send({ error: "mailing service is currently down" }) }


        /**
       *    This sets password to the new random passwrod that was sent in the email
       * 
       */
        else {
          bcrypt.hash(newPassString, saltRounds).then(function (hash) {

            User.findOneAndUpdate(
              { Username: username },
              { Password: hash }
            ).then(function (RetUser) {
              res.status(200).send({ message: "Please check your registered email" });
            });
          })
        }
      });



    }
  }

  /**
   *     a function that edits the information About the user
   *     @function editAbout
   *     @returns {JSON} the response for the request
   */
  async editAbout(req, res) {
    /**
    *    This finds the user that is going to edit the "About" information section using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the About parameter isn't in the request
    *     if not found it sends error 404 with message "About parameter not found"
    *     Then it checks if the type of the About parameter is a string
    *     else it changes the About 
    */
    if (req.body.About == null) return res.status(404).send("About parameter not found");
    else if (typeof req.body.About != 'string') return res.status(402).send({ error: "Enter a valid String containing information" });
    else {
      user.About = req.body.About;
      user.save();
      return res.status(200).send({ message: "About Information updated successfully" })
    }
  }
}
module.exports = new UserHandler();
