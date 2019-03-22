const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
const SubredditPostSchema = new Schema({
    title: String,
    body: String
});

const SubredditSchema = new Schema({
    name: String,
    admin_username: String,
    rules: [String],
    posts: [SubredditPostSchema],
    date: Date
});



const Subreddit = mongoose.model('subreddit', SubredditSchema);
module.exports = Subreddit;