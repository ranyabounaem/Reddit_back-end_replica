const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
const SubredditPostSchema = new Schema({
    title: String,
    body: String,
    creatorUsername: String,
    postDate: {
        type: Date,
        default: Date.now
    },
    subredditName: String
});

const SubredditSchema = new Schema({
    name: String,
    adminUsername: String,
    rules: [String],
    posts: [SubredditPostSchema],
    subscribed_users: [String],
    date: {
        type: Date,
        default: Date.now
    }
});



const Subreddit = mongoose.model('subreddit', SubredditSchema);
module.exports = Subreddit;