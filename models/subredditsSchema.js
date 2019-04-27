const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
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
    name: {
        type:String,
        unique:true
    },
    adminUsername: String,
    rules: [String],
    posts: [String],
    subscribed_users: [String],
    date: {
        type: Date,
        default: Date.now
    },
<<<<<<< HEAD
    bio: [String]
=======
    bio: [String],
    subredditFile: {type: String, required: true},
    modUsername: [String]
>>>>>>> rany
});


const Subreddit = mongoose.model('subreddit', SubredditSchema);
const posts = mongoose.model('posts', SubredditPostSchema);

module.exports.Subreddit= Subreddit;
module.exports.SubredditPostSchema= posts;