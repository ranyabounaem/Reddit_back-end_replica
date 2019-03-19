const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    c_id: String,
    content: String,
    parent_id: String,
    dateAdded: Date,
    votes: Number,
    spoiler: Boolean,
    locked: Boolean
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;