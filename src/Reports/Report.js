const User = require("../../models/UserSchema");
const notification = require('../../models/notificationSchema.js');
const reports = require('../../models/Reports');
const srs =require('../../models/subredditsSchema');
const posts=srs.SubredditPostSchema;
const JWTconfig = require("../../JWT/giveToken");
const ObjectId = require('mongodb').ObjectID;
const Comment = require('../../models/commentSchema.js');



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
    res.status(200).send(reportsToBeHandled);
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
      res.status(404).send({message:"report deleted"});}
    
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
      const deleted=await reports.findOneAndDelete({_id:reportToDeleteId});
      res.status(404).send({message:"Post deleted"});}
    
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
       const postDeleted= await Comment.findByIdAndDelete(reportToDelete.reportedId);
       const deleted=await reports.findOneAndDelete({_id:reportToDeleteId});
      res.status(404).send({message:"Comment deleted"});}
    
      }
    } 
   }
  }
}
module.exports = new reportHandler();
