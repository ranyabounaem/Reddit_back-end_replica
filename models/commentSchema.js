const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: String,
    subreddit: String,
    content: {type: String, required:true },
    parent_id: {type: String, required:true},
    dateAdded: Date,
    votes: {type: Number, default:0},
    spoiler: {type:Boolean, default:false},
    locked: {type:Boolean, default:false},
    reply: {type:Boolean, default:false}    //false if this is a comment not a reply
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;