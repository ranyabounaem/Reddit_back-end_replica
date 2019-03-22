const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
const SubredditSchema = new Schema({
    name: String,
    rules: [String],
    posts: [{title: String,
            body: String }],
    date: Date
});

const Subreddit = mongoose.model('subreddit', SubredditSchema);
module.exports = Subreddit;