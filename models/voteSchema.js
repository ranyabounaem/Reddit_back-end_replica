const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    username: String,
    upvote: Boolean,
    votedID: String,    //the id of the post/comment the user voted on
    post: Boolean   //true if the user voted a post. false when voted a comment or a reply
});

const vote = mongoose.model('vote',voteSchema);
module.exports = vote;