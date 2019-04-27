const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create report Schema & model 
const reportSchema = new Schema({
    description : {
        type: String
      
    },
    reportedId: {
        type: String,
        required: [true, "ID of post/comment is required"]
    },

    srName: {
        type: String,
        required: [true, "subreddit name is required"]
    },
    post: {
        type: Boolean,
        required: [true, "Boolean to describe if post(True) or comment(False) is required"],
            
    }
});

const report = mongoose.model("report", reportSchema);

module.exports = report;
