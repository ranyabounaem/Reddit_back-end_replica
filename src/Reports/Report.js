const User = require("../../models/UserSchema");
const reports = require('../../models/Reports');
const srs =require('../../models/subredditsSchema');
const posts=srs.SubredditPostSchema;
const JWTconfig = require("../../JWT/giveToken");
const ObjectId = require('mongodb').ObjectID;
const Comment = require('../../models/commentSchema.js');
const commentHandler = require('../Comments/Comment').cm;

sr = srs.Subreddit;

async function checkModReq(user, srName)
{
  const modreq =await user.ModReq.find(function(UserModReqarray) {
    return UserModReqarray === srName;
  });

  if(modreq){return true;}
  else return false;
}
function AddModReq(user, srName)
{
  user.ModReq.push(srName);
  user.save();
}
function RemoveModReq(user, srName)
{
  user.ModReq.pop(srName);
  user.save();
}
async function checkIfMod(user, srName)
{
  const mod =await user.moderates.find(function(subreddit) {
    return subreddit === srName;
  });

  if(mod){return true;}
  else return false;
}
async function checkBanned(username, sr)
{
  const banned =await sr.bannedUsers.find(function(bannedUser) {
    return bannedUser === username;
  });

  if(banned){return true;}
  else return false;
}
function acceptRequest(user, SR)
{
  user.ModReq.pop(SR.name);
  user.moderates.push(SR.name);
  SR.modUsername.push(user.Username);
  user.save();
  SR.save();
}
function removeModerator(user, SR)
{
  user.moderates.pop(SR.name);
  SR.modUsername.pop(user.Username);
  user.save();
  SR.save();
}
function removeModeration(user, srName)
{
  user.moderates.pop(srName);
  user.save();
}
function banUser(user, SR)
{
  user.ModReq.pop(SR.name);
  user.Subscriptions.pop(SR.name);
  SR.subscribed_users.pop(user.Username);
  SR.bannedUsers.push(user.Username);
  user.save();
  SR.save();
}
function unBanUser(username, SR)
{
  SR.bannedUsers.pop(username);
  SR.save();
}
function banModerator(user, SR)
{
  user.moderates.pop(SR.name);
  user.Subscriptions.pop(SR.name);
  SR.subscribed_users.pop(user.Username);
  SR.modUsername.pop(user.Username)
  SR.bannedUsers.push(user.Username);
  user.save();
  SR.save();
}


class reportHandler {

    /**
   *     a function that gets reports to bew reviewed
   *     @function getReports
   *     @returns {JSON} the response for the request
   */
 
  async getReports(req, res)
  {
    /**
    *    This finds the subreddits moderated 
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    const subredditsModerated=await user.moderates;
    if (subredditsModerated.length==0){res.status(404).send({error:"You are not a moderator to any subreddit"});}
    else{
    
    /**
    *    This finds reports in the subreddits moderated 
    */

    const reportsToBeHandled= await reports.find({srName:subredditsModerated});
    if (reportsToBeHandled.length==0){res.status(404).send({error:"No reports"});}

    else
    res.status(200).send({reports:reportsToBeHandled});
  }

}

   /**
   *     a function that gets reports to bew reviewed
   *     @function deleteReport
   *     @returns {JSON} the response for the request
   */
 
  async deleteReport(req, res)
  {
    
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
    *    This checks if id is valid format 
    */
    const reportToDeleteId=req.params.reportId;

    if (!ObjectId.isValid(reportToDeleteId))  {res.status(404).send({error:"ReportId not valid"});}
    else{
   
    /**
    *    This checks if report exists 
    */

        const reportToDelete= await reports.findOne({_id:reportToDeleteId}); 
    if(!reportToDelete){res.status(404).send({error:"report doesnt exist"});}
   
    
    /**
    *    This checks if user has right to delete 
    */
    else{  
    
      const reportSr =await user.moderates.find(function(srInReport) {
              
                return srInReport == reportToDelete.srName;
      });


      if(!reportSr) {res.status(404).send({error:"You are not a moderator in this subreddit"});}

      
    /**
    *    This deletes  
    */
      else { 
      const deleted=await reports.findOneAndDelete({_id:reportToDeleteId});
      res.status(200).send({message:"report deleted"});}
    
      }
    }
  }
 /**
   *     a function that gets reports to bew reviewed
   *     @function deletePost
   *     @returns {JSON} the response for the request
   */
  async deletePost(req, res)
  {
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
    *    This checks if id is valid format 
    */
    const reportToDeleteId=req.params.reportId;

    if (!ObjectId.isValid(reportToDeleteId))  {res.status(404).send({error:"ReportId not valid"});}
    else{
  
    /**
    *    This checks if report exists 
    */

     const reportToDelete= await reports.findOne({_id:reportToDeleteId}); 
    if(!reportToDelete){res.status(404).send({error:"report doesnt exist"});}
   
    
    /**
    *    This checks if user has right to delete 
    */
    else{  
    
      const reportSr =await user.moderates.find(function(srInReport) {
              
                return srInReport == reportToDelete.srName;
      });


      if(!reportSr) {res.status(404).send({error:"You are not a moderator in this subreddit"});}

      /**
    *    This checks if report is of type post
    */
      else{

        if(reportToDelete.post!=true){res.status(404).send({error:"This isnt a post report"});}

    /**
    *    This deletes  
    */
      else { 
      const postDeleted= await posts.findByIdAndDelete(reportToDelete.reportedId);
      const deleted=await reports.deleteMany({reportedId:reportToDelete.reportedId});
      res.status(200).send({message:"Post deleted"});}
    
      }
    } 
   }
  }


  async deleteComment(req, res)
  {
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    /**
    *    This checks if id is valid format 
    */
    const reportToDeleteId=req.params.reportId;

    if (!ObjectId.isValid(reportToDeleteId))  {res.status(404).send({error:"ReportId not valid"});}
    else{
  
    /**
    *    This checks if report exists 
    */

     const reportToDelete= await reports.findOne({_id:reportToDeleteId}); 
    if(!reportToDelete){res.status(404).send({error:"report doesnt exist"});}
   
    
    /**
    *    This checks if user has right to delete 
    */
    else{  
    
      const reportSr =await user.moderates.find(function(srInReport) {
              
                return srInReport == reportToDelete.srName;
      });


      if(!reportSr) {res.status(404).send({error:"You are not a moderator in this subreddit"});}

      
      else{
   /**
    *    This checks if report is of type comment
    */
        if(reportToDelete.post!=false){res.status(404).send({error:"This isnt a comment report"});}

    /**
    *    This deletes  
    */
      else { 
       commentHandler.deleteComment(reportToDelete.reportedId);
      res.status(404).send({message:"Comment deleted"});}
    
      }
    } 
   }
  }
  
  /**
   *     a function that Sends a request to a user to become a moderator
   *     @function addMod
   *     @returns {JSON} the response for the request
   */
  async addMod(req, res)
  {
    /**
    *    This finds the user that is going to Send a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the Username isn't in the request
    *     if not found it sends error 404 with message "Username not found"
    */
    if(req.body.Username == null) 
    {
      return res.status(404).send({error :"Username not found"});
    }
    /**
    *    This checks if the SrName isn't in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    else if(req.body.SrName == null)
    {
      return res.status(404).send({error :"SrName not found"});
    }
    else
    { 
      /**
      *    This finds the user that is going to be added
      */
      const userToAdd = await User.findOne({ Username: req.body.Username });
      const SR = await sr.findOne({ name: req.body.SrName });
      /**
      *    This checks if the subreddit exists in the database
      *    if not found it sends error 404 with message "Subbreddit doesn't exist"
      */
      if(SR == null)
      {
        return res.status(404).send({error : "Subbreddit doesn't exist"});
      }
      /**
      *    This checks if the user trying to send the request is the creator of the subreddit
      *    if not it sends error 402 with message "User is not creator of the subreddit"
      */
      else if (SR.adminUsername !== username)
      {
        return res.status(402).send({error : "User is not creator of the subreddit"});
      }
      /**
      *    This checks if the user that that is going to be added exists in the database
      *    if not found it sends error 404 with message "User to be added as moderator not found"
      *    else we need to make certain validations before sending the request
      */
      else if(userToAdd == null) return res.status(404).send({error : "User to be added as moderator doesn't exist"});
      else
        {
          /**
           *    This checks if the user is trying to add himself
           *    if so it sends an error 402 with message "User cannot add himself"
           *    else we'll make some other validations
          */
          if(username === req.body.Username) res.status(402).send({error: "User cannot add himself"});
          else{

    
            /**
             *    This checks if the user User has already received a Moderation request
             *    then if the User is already a moderator
             *    then if the User is banned from the Subreddit
            */
            
            const modReq =await checkModReq(userToAdd, req.body.SrName);
            const alreadyMod = await checkIfMod(userToAdd, SR.name);
            const banned = await checkBanned(req.body.Username, SR);

            if(modReq) return  res.status(401).send({error: "User has already received a Moderation request"});
            else if(alreadyMod) return res.status(401).send({error: "User is already a moderator"});
            else if(banned) return res.status(401).send({error : "User is banned from Subreddit"})
            /**
            *    else it sends a Moderator request
            */
            else
            {
              AddModReq(userToAdd, req.body.SrName);
              return res.status(200).send({ message: "Moderator request Sent" });
            }
          }
        }
      }
  }
  /**
   *     a function that either removes moderator request or remove the moderator from moderation
   *     @function removeMod
   *     @returns {JSON} the response for the request
   */
  async removeMod(req, res)
  {
    /**
    *    This finds the user that is going to Send a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the Username isn't in the request
    *     if not found it sends error 404 with message "Username not found"
    */
    if(req.body.Username == null) 
    {
      return res.status(404).send({error :"Username not found"});
    }
    /**
    *    This checks if the SrName isn't in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    else if(req.body.SrName == null)
    {
      return res.status(404).send({error :"SrName not found"});
    }
    else
    {
      
      /**
      *    This finds the user that is going to be added
      */
      const userToRemove = await User.findOne({ Username: req.body.Username });
      const SR = await sr.findOne({ name: req.body.SrName });
      /**
      *    This checks if the subreddit exists in the database
      *    if not found it sends error 404 with message "Subbreddit doesn't exist"
      */
      if(SR == null)
      {
        return res.status(404).send({error : "Subbreddit doesn't exist"});
      }
      /**
      *    This checks if the user trying to send the request is the creator of the subreddit
      *    if not it sends error 402 with message "User is not creator of the subreddit"
      */
      else if (SR.adminUsername !== username)
      {
        return res.status(402).send({error : "User is not creator of the subreddit"});
      }
      /**
      *    This checks if the user that that is going to be added exists in the database
      *    if not found it sends error 404 with message "User to be added as moderator not found"
      *    else we need to make certain validations before sending the request
      */
      else if(userToRemove == null) return res.status(404).send({error : "User to be removed from moderation doesn't exist"});
      else
        {
          /**
           *    This checks if the user is trying to add himself
           *    if so it sends an error 402 with message "User cannot add himself"
           *    else we'll make some other validations
          */
          if(username === req.body.Username) res.status(402).send({error: "User cannot remove himself"});
          else{

    
            /**
             *    This checks if the user User has already received a Moderation request
             *    then if the User isn't  a moderator
            */
            
            const modReq =await checkModReq(userToRemove, req.body.SrName);
            const alreadyMod = await checkIfMod(userToRemove, SR.name);

            if(modReq)
            {
              RemoveModReq(userToRemove, req.body.SrName);
              return  res.status(200).send({message: "Request for moderation removed"});
            }
            else if(!alreadyMod) return res.status(401).send({error: "User isn't a moderator"});
            /**
            *    else it removes the Moderator from the moderatores list
            */
            else
            {
              removeModerator(userToRemove, SR);
              return res.status(200).send({ message: "Moderator removed" });
            }
          }
        }
      }
  }
  /**
   *     a function that accepts a request to a user to become a moderator
   *     @function acceptModRequest
   *     @returns {JSON} the response for the request
   */
  async acceptModRequest(req, res)
  {
    /**
    *    This finds the user that is going to accept a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the SrName is in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    if(req.body.SrName == null) res.status(404).send("SrName not found");

    else
    {
      /**
      *    This checks if the user has a moderator request with the given SrName
      */
      const modReq =await checkModReq(user, req.body.SrName);
      if(modReq)
      {
        const SR = await sr.findOne({ name: req.body.SrName });
        /**
        *    This checks if the subreddit exists in the database
        *    if not found it removes the request and sends error 404 with message "Subbreddit doesn't exist"
        */
        if(SR == null)
        {
          RemoveModReq(user, req.body.SrName);
          return res.status(404).send({error : "Subbreddit doesn't exist"});
        }
        /**
        *    This accepts the moderator request using function acceptRequest
        */
        else
        {
          acceptRequest(user, SR);
          return res.status(200).send({ message: "Moderator request accepted" });
          
        }
      }
      /**
        *    This means that there's no request with the given subreddit name 
        *    So it sends an error 404 with Message "Request doesn't exist"
        */
      else
      {
        return res.status(404).send({error : "Request doesn't exist"});
      }
    }
  }
  /**
   *     a function that rejects a request to a user to become a moderator
   *     @function rejectModRequest
   *     @returns {JSON} the response for the request
   */
  async rejectModRequest(req, res)
  {
    /**
    *    This finds the user that is going to reject a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the SrName is in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    if(req.body.SrName == null) res.status(404).send("SrName not found");

    else
    {
      /**
      *    This checks if the user has a moderator request with the given SrName
      */
      const modReq =await checkModReq(user, req.body.SrName);
      if(modReq)
      {
        const SR = await sr.findOne({ name: req.body.SrName });
        /**
        *    This checks if the subreddit exists in the database
        *    if not found it removes the request and sends error 404 with message "Subbreddit doesn't exist"
        */
        if(SR == null)
        {
          RemoveModReq(user, req.body.SrName);
          return res.status(404).send({error : "Subbreddit doesn't exist"});
        }
        /**
        *    This rejects the moderator request using function acceptRequest
        */
        else
        {
          RemoveModReq(user, SR);
          return res.status(200).send({ message: "Moderator request rejected" });
          
        }
      }
      /**
        *    This means that there's no request with the given subreddit name 
        *    So it sends an error 404 with Message "Request doesn't exist"
        */
      else
      {
        return res.status(404).send({error : "Request doesn't exist"});
      }
    }
  }
  /**
   *     a function that allows the moderator to retire from moderation
   *     @function leaveMod
   *     @returns {JSON} the response for the request
   */
  async leaveMod(req, res)
  {
    /**
    *    This finds the user that is going to leave moderation using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the SrName is in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    if(req.body.SrName == null) res.status(404).send("SrName not found");

    else
    {
      /**
      *    This checks if the user is a moderator with the given SrName
      */
      const Mod =await checkIfMod(user, req.body.SrName);
      if(Mod)
      {
        const SR = await sr.findOne({ name: req.body.SrName });
        /**
        *    This checks if the subreddit exists in the database
        *    if not found it removes the moderation from the user and sends error 404 with message "Subbreddit doesn't exist"
        */
        if(SR == null)
        {
          removeModeration(user, req.body.SrName);
          return res.status(404).send({error : "Subbreddit doesn't exist"});
        }
        /**
        *    This accepts the moderator request using function acceptRequest
        */
        else
        {
          removeModerator(user, SR);
          return res.status(200).send({ message: "User has left moderation" });
          
        }
      }
      /**
        *    This means that there's no moderation with the given subreddit name 
        *    So it sends an error 404 with Message "User isn't a moderator"
        */
      else
      {
        return res.status(402).send({error : "User isn't a moderator"});
      }
    }
  }
  /**
   *     a function that allows the moderator or creator of subreddit to ban a certain user from seeing this subreddit
   *     @function Ban
   *     @returns {JSON} the response for the request
   */
  async Ban(req, res)
  {
    /**
    *    This finds the user that is going to Send a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the Username isn't in the request
    *     if not found it sends error 404 with message "Username not found"
    */
    if(req.body.Username == null) 
    {
      return res.status(404).send({error :"Username not found"});
    }
    /**
    *    This checks if the SrName isn't in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    else if(req.body.SrName == null)
    {
      return res.status(404).send({error :"SrName not found"});
    }
    else
    { 
      /**
      *    This finds the user that is going to be banned
      */
      const userToBan = await User.findOne({ Username: req.body.Username });
      const SR = await sr.findOne({ name: req.body.SrName });
      /**
      *    This checks if the subreddit exists in the database
      *    if not found it sends error 404 with message "Subbreddit doesn't exist"
      */
      if(SR == null)
      {
        return res.status(404).send({error : "Subbreddit doesn't exist"});
      }
      
      /**
      *    This checks if the user that that is going to be banned exists in the database
      *    if not found it sends error 404 with message "User to be banned doesn't exist"
      *    else we need to make certain validations
      */
      else if(userToBan == null) return res.status(404).send({error : "User to be banned doesn't exist"});
      
      else 
      {
        /**
        *    This checks if the user has the authority to ban another user
        *    if not it sends error 402 with message "User is not authorized to ban"
        */
        const Mod = await checkIfMod(user, SR.name);
        if ((SR.adminUsername !== username) && (!Mod) )
        {
          return res.status(402).send({error : "User is not authorized to ban"});
        }
        /**
           *    This checks if the user is trying to ban himself
           *    if so it sends an error 402 with message "User cannot ban himself"
           *    then it checks if a moderator is trying to ban the subreddit creator
           *    if so it sends an error 402 with message "User cannot ban the creator of the subreddit"
          */
        else if(username === req.body.Username)return res.status(402).send({error: "User cannot ban himself"});
        else if(SR.adminUsername === req.body.Username)return res.status(402).send({error: "User cannot ban the creator of the subreddit"});
        else
        {

  
          /**
           *    This checks if the User is already a moderator
           *    then if the User is already banned from the Subreddit\
          */
          
          const alreadyMod = await checkIfMod(userToBan, SR.name);
          const banned = await checkBanned(req.body.Username, SR);

          if(alreadyMod)
          {
            /**
             *    This checks if the User is the creator of the subreddit
             *    if so it removes the moderator from moderation then bans him from the subreddit
             *    else it sends an error 401 "User doesn't have the authority to ban a moderator"
            */
            if(SR.adminUsername == username) 
            {
              banModerator(userToBan, SR);
              return res.status(200).send({ message: "Moderator banned successfully" });
            }
            else
            {
              return res.status(402).send({error: "User doesn't have the authority to ban a moderator"});
            }
          }
          else if(banned) return res.status(402).send({error : "User is already banned from Subreddit"})
          
          /**
          *    else it bans the user 
          */
          else
          {
            banUser(userToBan, SR);
            return res.status(200).send({ message: "User banned successfully" });
          }
        }
        
      }
    }    
  }
  /**
   *      a function that allows the moderator or creator of subreddit to unban a certain user
   *     @function unBan
   *     @returns {JSON} the response for the request
   */
  async unBan(req, res)
  {
    /**
    *    This finds the user that is going to Send a Moderator request using the username in token
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });
    /**
    *    This checks if the Username isn't in the request
    *     if not found it sends error 404 with message "Username not found"
    */
    if(req.body.Username == null) 
    {
      return res.status(404).send({error :"Username not found"});
    }
    /**
    *    This checks if the SrName isn't in the request
    *     if not found it sends error 404 with message "SrName not found"
    */
    else if(req.body.SrName == null)
    {
      return res.status(404).send({error :"SrName not found"});
    }
    else
    { 
      /**
      *    This finds the user that is going to be unbanned
      */
      const userToUnBan = await User.findOne({ Username: req.body.Username });
      const SR = await sr.findOne({ name: req.body.SrName });
      /**
      *    This checks if the subreddit exists in the database
      *    if not found it sends error 404 with message "Subbreddit doesn't exist"
      */
      if(SR == null)
      {
        return res.status(404).send({error : "Subbreddit doesn't exist"});
      }
      
      /**
      *    This checks if the user that that is going to be unbanned exists in the database
      *    if not found it sends error 404 with message "User to be unbanned doesn't exist"
      *    else we need to make certain validations
      */
      else if(userToUnBan == null) return res.status(404).send({error : "User to be unbanned doesn't exist"});
      
      else 
      {
        /**
        *    This checks if the user has the authority to unban another user
        *    if not it sends error 402 with message "User is not authorized to ban"
        */
        const Mod = await checkIfMod(user, SR.name);
        if ((SR.adminUsername !== username) && (!Mod) )
        {
          return res.status(402).send({error : "User is not authorized to unban"});
        }
        
        else
        {

          const banned = await checkBanned(req.body.Username, SR);
          if(!banned) return res.status(402).send({error : "User isn't banned from Subreddit"})
          
          /**
          *    else it unbans the user 
          */
          else
          {
            unBanUser(userToUnBan.Username, SR);
            return res.status(200).send({ message: "User unbanned successfully" });
          }
        }
      }
    }    
  }

}
module.exports = new reportHandler();
