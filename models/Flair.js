const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create flair Schema & model 
const flairchSema = new Schema({
    username : {
        type: String,
        required: [true, "Username is requires"]
      
    },
    flair: {
        type: String,
        required: [true, "Flair is missing"]
    },

    srName: {
        type: String,
        required: [true, "subreddit name is required"]
    }
});

const flair = mongoose.model("flair", flairchSema);

module.exports = flair;
