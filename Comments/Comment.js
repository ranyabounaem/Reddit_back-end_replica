const express= require('express');
const bodyParser= require('body-parser');
const Comment = require('./commentSchema.js');

class CommentHandler {
    constructor(){

    }

    handlePostComment(req,res) {
        /**
         * TODO 
         * Check whether the thread id is in the database or not
         * Assign it to parent-id if found
         */

        if(req.body.content === ''){
            res.send({'error': 'You can not post an empty Comment' });
        }else{
            const c = new Comment({
                //How to create an ID
                content: req.body.content,
                parent_id: req.params.th_id,
                dateAdded: Date(),
                votes: 0,
                spoiler: false,              //FOR CURRENT PHASE ONLY
                locked: false,
                reply: false,
            });
        }
    }

    handleGetComment(req,res){
        Comment.findOne({_id: req.params._id}).then(function(RetComment){
            if(RetComment == null){
                res.send({'error':'The Comment ID is not found'});
            }else{
                res.send({
                    _id: RetComment._id,
                    content: RetComment.content,
                    parent_id: RetComment.parent_id,
                    dateAdded: RetComment.dateAdded,
                    votes: RetComment.votes,
                    spoiler: RetComment.spoiler,
                    locked: RetComment.locked
                });
            }
        });
    }

    handleGetAllComments(req,res){
        /**
         * TODOO
         * SEARCH FOR THE THREAD ID IN THE DATABASE
         * CHECK IF IT IS AVAILABLE
         */
    }
}

module.exports = new CommentHandler();