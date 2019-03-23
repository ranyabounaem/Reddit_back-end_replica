const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
const SubredditPostSchema = new Schema({
    title: String,
    body: String,
    postDate: Date,
    subredditName:String
});

const SubredditSchema = new Schema({
    name: String,
    rules: [String],
    posts: [SubredditPostSchema],
    date: Date
});


const Subreddit = mongoose.model('subreddit', SubredditSchema);
const posts = mongoose.model('posts', SubredditPostSchema);

module.exports.Subreddit= Subreddit;
module.exports.SubredditPostSchema= posts;