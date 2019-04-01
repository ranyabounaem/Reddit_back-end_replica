const express = require('express');
const bodyParser = require('body-parser');
const Comment = require('../../models/commentSchema.js');
const subredditsSchema = require('../../models/subredditsSchema.js');
const Post = subredditsSchema.SubredditPostSchema;
const ObjectId = require('mongodb').ObjectID

class CommentHandler {
    constructor() {

    }
    /**
     * A function that posts a new comment or a reply
     * @function handlePostComment
     * @summary Takes the details of the comment from the request and checks if this post is valid or not before adding it to the database.
     * @param {Object} req The request.
     * @param {Object} res The response.
     * @returns {JSON}
     */
    handlePostComment(req, res) {
        let ID = new ObjectId(req.params.id);
        if (req.body.reply != true) {         //If this is not a reply or if it's not specified in the request then it is a comment to a post
            Post.findOne({ _id: ID }).then(function (RetPost) {
                if (RetPost == null) {
                    res.status(404).send({ 'error': 'There is no post with this ID' });
                } else {
                    let s, l;
                    if (req.body.spoiler != true) {
                        s = false;
                    } else {
                        s = true;
                    }
                    if (req.body.locked != true) {
                        l = false;
                    } else {
                        l = true;
                    }
                    if (req.body.content == undefined) {
                        res.status(403).send({ 'error': 'The request must include content of the comment' });
                    } else if (req.body.content === '') {
                        res.status(401).send({ 'error': 'You can not post an empty Comment' });
                    } else {
                        const c = new Comment({
                            content: req.body.content,
                            parent_id: req.params.id,
                            dateAdded: Date(),
                            votes: 0,
                            spoiler: s,              //FOR CURRENT PHASE ONLY
                            locked: l,
                            reply: false,
                        })
                        c.save();
                        res.status(200).send({ c_id: c._id });
                    }
                }
            });
        } else {
            Comment.findOne({ _id: ID }).then(function (retComment) {
                if (retComment == null) {
                    res.status(404).send({ 'error': 'There is no Comment with this ID' });
                } else {
                    if (retComment.locked == true) {
                        res.status(403).send({ 'error': 'You can not reply to a locked comment' });
                    } else {
                        let s, l;
                        if (req.body.spoiler != true) {
                            s = false;
                        } else {
                            s = true;
                        }
                        if (req.body.locked != true) {
                            l = false;
                        } else {
                            l = true;
                        }
                        if (req.body.content == undefined) {
                            res.status(403).send({ 'error': 'The request must include content of the comment' });
                        } else if (req.body.content === '') {
                            res.status(401).send({ 'error': 'You can not post an empty Comment' });
                        } else {
                            const c = new Comment({
                                content: req.body.content,
                                parent_id: req.params.id,
                                dateAdded: Date(),
                                votes: 0,
                                spoiler: s,              //FOR CURRENT PHASE ONLY
                                locked: l,
                                reply: true,
                            })
                            c.save();
                            res.status(200).send({ c_id: c._id });
                        }
                    }
                }
            });
        }
    }
    /**
     * A function that gets the details of a comment or a reply
     * @function handleGetComment
     * @summary Takes the id of a comment and returns its details if found.
     * @param {Object} req The request.
     * @param {Object} res The response.
     * @returns {JSON}
     */

    handleGetComment(req, res) {
        let ID = new ObjectId(req.params.c_id);
        Comment.findOne({ _id: ID }).then(function (retComment) {
            if (retComment == null) {
                res.status(404).send({ 'error': 'The Comment ID is not found' });
            } else {
                res.status(200).send({
                    _id: retComment._id,
                    content: retComment.content,
                    parent_id: retComment.parent_id,
                    dateAdded: retComment.dateAdded,
                    votes: retComment.votes,
                    spoiler: retComment.spoiler,
                    locked: retComment.locked
                });
            }
        });
    }
    /**
     * A function that posts a new comment or a reply
     * @function handleGetAllComments
     * @summary Takes the ID of a post(comment) and returns all its comments(replies) if there are any.
     * @param {Object} req The request.
     * @param {Object} res The response.
     * @returns {JSON}
     */
    handleGetAllComments(req, res) {
        let ID = new ObjectId(req.params.id);
        //Assuming that he sent a thread ID for this PHASE ONLY
        Post.findOne({ _id: ID }).then(function (RetPost) {
            if (RetPost == null) {
                res.status(404).send({ 'error': 'There is no post with this ID' });
            } else {
                Comment.find({ $and: [{ parent_id: req.params.id }, { reply: false }] }, function (err, comments) {
                    if (comments == null) {
                        res.status(404).send({ error: 'There are no Comments for this Thread' })
                    } else {
                        res.status(200).send(comments);
                    }
                });
            }
        });
    }

    handleEditComment(req, res) {
        let ID = new ObjectId(req.params.c_id);
        let s, l;
        Comment.findOne({ _id: ID }).then(function (RetCommment) {
            if (RetCommment == null) {
                res.status(404).send({ 'error': 'There is no Comment with this ID' });
            } else {
                if (req.body.content == undefined) {
                    res.status(403).send({ 'error': 'The request must include content of the comment' });
                } else if (req.body.content === '') {
                    res.status(401).send({ 'error': 'You can not post an empty Comment' });
                } else {
                    if (req.body.spoiler == true || req.body.spoiler == false) {
                        s = req.body.spoiler;
                    } else {
                        s = RetCommment.spoiler;         //the spoiler unchanged
                    }
                    if (req.body.locked == true || req.body.locked == false) {
                        l = req.body.locked;
                    } else {
                        l = RetCommment.locked;         //the locked unchanged
                    }
                    Comment.findOneAndUpdate({ _id: ID },
                        { content: req.body.content, locked: l, spoiler: s }).then(function (retComment) {
                            res.status(200).send("update successful");
                        });
                }


            }
        });
    }
}

module.exports = new CommentHandler();
