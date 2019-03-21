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
        if(req.body.content == undefined){
            res.status(403).send({'error': 'The request must include content of the comment' });
        }else if(req.body.content === ''){
            res.status(401).send({'error': 'You can not post an empty Comment' });
        }else{
            const c = new Comment({
                //How to create an ID
                content: req.body.content,
                parent_id: req.params.id,
                dateAdded: Date(),
                votes: 0,
                spoiler: false,              //FOR CURRENT PHASE ONLY
                locked: false,
                reply: false,
            })
            c.save();
            res.status(200).send({c_id:c._id});
        }
    }

    handleGetComment(req,res){
        Comment.findOne({_id: req.params._id}).then(function(RetComment){
            if(RetComment == null){
                res.status(404).send({'error':'The Comment ID is not found'});
            }else{
                res.status(200).send({
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
        //Assuming that he sent a thread ID for this PHASE ONLY
        Comment.find({parent_id: req.params.id,reply: false},function(err,comments){
            if (comments == null){
                res.status(404).send({error: 'There is no Comments for this Thread'})
            }else{
                res.status(200).send(comments);
            }
        });
    }
}

module.exports = new CommentHandler();