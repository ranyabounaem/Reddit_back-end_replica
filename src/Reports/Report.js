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

    const subredditsModerated=user.moderates;

    console.log(subredditsModerated);

    res.status(200).send("done");
  }

  


}
module.exports = new reportHandler();
