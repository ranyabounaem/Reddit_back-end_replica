const User = require("../../models/UserSchema");
const notification = require('../../models/notificationSchema.js');
const reports = require('../../models/Reports');
const JWTconfig = require("../../JWT/giveToken");



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
    /**
    *    This finds the subreddits moderated 
    */
    const username = JWTconfig.getUsernameFromToken(req);
    const user = await User.findOne({ Username: username });

    const subredditsModerated=await user.moderates;
    reportIdToDelet=req.body.reportId;

    if (subredditsModerated.length==0){res.status(404).send({error:"You are not a moderator to any subreddit"});}
    else{
    
    /**
    *    This finds reports in the subreddits moderated 
    */

    const reportsToBeHandled= await reports.find({srName:subredditsModerated});
    if (reportsToBeHandled.length==0){res.status(404).send({error:"No reports"});}

    else{
    
      const reportSr =await User.moderates.find(function(srInReport) {
        return reportIdToDelet === fUsername;
      });

      if(!reportSr) {res.status(404).send({error:"You are not a moderator in this subreddit"});}
    
    
      }
    }
}



}
module.exports = new reportHandler();
