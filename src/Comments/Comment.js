const express = require('express');
const bodyParser = require('body-parser');
const Comment = require('../../models/commentSchema.js');
const subredditsSchema = require('../../models/subredditsSchema.js');
const Post = subredditsSchema.SubredditPostSchema;
const ObjectId = require('mongodb').ObjectID;
const jwt = require('../../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;

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
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            let ID = new ObjectId(req.params.id);
            if (req.body.reply != true) {         //If this is not a reply or if it's not specified in the request then it is a comment to a post
                Post.findOne({ _id: ID }).then(function (retPost) {
                    if (retPost == null) {
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
                            res.status(400).send({ 'error': 'The request must include content of the comment' });
                        } else if (req.body.content === '') {
                            res.status(400).send({ 'error': 'You can not post an empty Comment' });
                        } else {
                            const c = new Comment({
                                username: getUser(req),
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
                                res.status(400).send({ 'error': 'The request must include content of the comment' });
                            } else if (req.body.content === '') {
                                res.status(400).send({ 'error': 'You can not post an empty Comment' });
                            } else {
                                const c = new Comment({
                                    username: getUser(req),
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
        if (!ObjectId.isValid(req.params.c_id)) {
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            let ID = new ObjectId(req.params.c_id);
            Comment.findOne({ _id: ID }).then(function (retComment) {
                if (retComment == null) {
                    res.status(404).send({ 'error': 'The Comment ID is not found' });
                } else {
                    res.status(200).send({
                        _id: retComment._id,
                        username: retComment.username,
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
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            let ID = new ObjectId(req.params.id);
            if (req.body.comment != true) {
                Post.findOne({ _id: ID }).then(function (retPost) {
                    if (retPost == null) {
                        res.status(404).send({ 'error': 'There is no post with this ID' });
                    } else {
                        Comment.find({ $and: [{ parent_id: ID }, { reply: false }] }, function (err, comments) {
                            if (comments == null) {
                                res.status(404).send({ 'error': 'There are no Comments for this Thread' })
                            } else {
                                res.status(200).send(comments);
                            }
                        });
                    }
                });
            } else {
                Comment.findOne({ _id: ID }).then(function (retComment) {
                    if (retComment == null) {
                        res.status(404).send({ 'error': 'There is no comment with this ID' });
                    } else {
                        Comment.find({ $and: [{ parent_id: ID }, { reply: true }] }, function (err, comments) {
                            if (comments == null) {
                                res.status(404).send({ 'error': 'There are no Replies for this Comment' })
                            } else {
                                res.status(200).send(comments);
                            }
                        });
                    }
                });
            }
        }
    }

    handleEditComment(req, res) {
        if (!ObjectId.isValid(req.params.c_id)) {
            res.status(400).send({ 'error': 'This is not a valid comment ID' });
        } else {
            let ID = new ObjectId(req.params.c_id);
            let s, l;
            Comment.findOne({ _id: ID }).then(function (RetCommment) {
                if (RetCommment == null) {
                    res.status(404).send({ 'error': 'There is no Comment with this ID' });
                } else {
                    let user = RetCommment.username;
                    if (user != getUser(req)) {
                        res.status(403).send({ 'error': 'You can only edit your own comments' });
                    } else {
                        if (req.body.content == undefined) {
                            res.status(400).send({ 'error': 'The request must include content of the comment' });
                        } else if (req.body.content === '') {
                            res.status(400).send({ 'error': 'You can not post an empty Comment' });
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
                                    res.status(200).json("update successful");
                                });
                        }
                    }
                }
            });
        }
    }

    handleDeleteComent(req, res) {
        if (!ObjectId.isValid(req.params.c_id)) {    //If it isn't a valid ID
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            let ID = new ObjectId(req.params.c_id);
            Comment.findOne({ _id: ID }).then(function (RetCommment) {
                if (RetCommment == null) {
                    res.status(404).send({ 'error': 'There is no Comment with this ID' });
                } else {
                    let user = RetCommment.username;
                    if (user != getUser(req)) {
                        res.status(403).send({ 'error': 'You can only delete your own comments' });
                    } else {
                        Comment.findOneAndDelete({ _id: ID }, function (err) {
                            if (err) {
                                res.status(500);
                                res.send({ "error": "internalServerError" });
                            }
                            else {
                                Comment.deleteMany({ parent_id: ID }, function (err) {
                                    if (err) {
                                        res.status(500);
                                        res.send({ "error": "internalServerError" });
                                    } else {
                                        res.status(200);
                                        res.json("Delete Successful");
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
    }
}

module.exports = new CommentHandler();
