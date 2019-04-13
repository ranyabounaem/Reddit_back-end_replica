const express = require('express');
const srs = require('../models/subredditsSchema');
const sr=srs.Subreddit;
const pt = srs.SubredditPostSchema;
const mongoose = require('mongoose');
const jwt = require('../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;

class SR {
    constructor(){

    }
/**
 * @function createSr
 * @summary Create a subreddit.
 * @param {object} Request - Request body: username, srName, srRules.
 * @param {object} Response - 200 (Success).
 * @returns {JSON}
 */
    createSr (req, res) {
        var admin = getUser(req);
        var subredditName = req.body.srName;
        var subredditRules = req.body.srRules;
        if(admin &&  subredditName && subredditRules){
            var subreddit = new sr({
                name: subredditName,
                adminUsername: admin,
                rules: subredditRules,
            });
            subreddit.save(function (err, record) {
                if (err) {
                // internal Server error 
                res.status(500).send({ 'error': 'internal server error' });

                }
                else {
                    res.status(200).send(record);
                }
            });
        }
        else
        {
            res.status(400).send({ 'error': 'invalid paramaters' });
        }
    };

/**
 * @function edit
 * @summary Edit a subreddit's details.
 * @param {object} Request - The request
 * @param {object} Response - The response.
 */
    edit (req, res){

        var subredditName = req.params.srName;
        var updatedRules = req.body.newRules;
        var updatedName = req.body.newName;
        if(subredditName && updatedRules && updatedName){

            sr.findOne({name : subredditName}).then(function(record){
           
               
                if(!record){
                    res.status(400).send({ 'error': 'invalid subreddit name' });
                }
                else if(record.adminUsername!=getUser(req)){
                    res.status(403).send({ 'error': 'access forbidden' }) 
                }
                else {

                    sr.findOneAndUpdate({name: subredditName}, {name:updatedName, rules:updatedRules}, function(err, record){
                        if (err){
                            res.status(500).send({ 'error': 'internal server error' }) 
                        }
                        else {
                            res.status(200).send(record);
                        };
                    });
                };
            });
        }
        else {
            res.status(400).send({ 'error': 'invalid paramaters' })  
        };
    };

/**
 * @function info
 * @summary Get a subreddit's info. 
 * @param {object} Req -  Request paramaters: srName.
 * @param {object} Res - Return subreddit's username, date, posts and rules - 200 (Success).
 * @returns {JSON}
 */
    info (req, res){

        var subredditName = req.params.srName;

        if(subredditName){
            sr.findOne({name: subredditName}, function(err){
                if(err)
                {
                    res.status(500).send({ 'error': 'internal server error' });
                }
                else
                {
                    res.status(200);
                }
            }).then(function(record){
                if(!record)
                {
                    res.status(400).send({ 'error': 'invalid subreddit name' });
                }
                else {
                res.status(200).send(record);
                };
            });
        }

        else {
            res.status(400).send({'error': 'invalid parameter'});
        };

    };
/**
 * @function createPost
 * @summary Create a post inside subreddit.
 * @param {object} Request - Request paramaters: srName - Request body: username, title, threadBody.
 * @param {object} Response - 200 (Success).
 * @returns {null}
 */
    createPost(req, res){

        var subrName = req.params.srName;
        var creator = getUser(req);
        var postTitle = req.body.title;
        var postBody = req.body.threadBody;

        
        if(creator && postTitle && postBody){

            sr.findOne({name: subrName}, function(err){

                if(err){
                    res.status(500).send({ 'error': 'internal server error' });
                }
            }).then(function(record){
                if(!record){
                    res.status(400).send({ 'error': 'invalid subreddit name' });
                }
                else {
                    let newPost = new pt({
                        title: postTitle,
                        body: postBody,
                        creatorUsername: creator,
                        subredditName: subrName
                    });
                    newPost.save(function (err) {

                        if (err) {

                            // internal Server error 
                            res.status(500)
                            res.json({ error: 'internalServerError ' });
                            res.end();

                        }
                        else{
                            record.posts.push(newPost._id);
                            record.save(function(err){
                                if(err)
                                {
                                    res.json({ error: 'internalServerError' });
                                }
                                else{
                                res.status(200).send(newPost);
                                };
                            });
                        }
                    });
                };
            });
        }
        else {
            res.status(400).send({ 'error': 'invalid paramaters' });
        };
    };

/**
 * @function subscribe
 * @summary Subscribe to a subreddit. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON}- 
 */
    subscribe(req, res){

        var subscribed_user = getUser(req);
        var subrName = req.params.srName;

        sr.findOne({name: subrName}, function(err){
            if(err){
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function(record){
            if(!record)
            {
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else{
                if(record.subscribed_users.indexOf(subscribed_user)==-1){
                    record.subscribed_users.push(subscribed_user);
                    record.save(function(err){
                        if(err){
                            res.status(500).send({ 'error': 'internal server error' });
                        }
                        else{
                            res.status(200).send(record.subscribed_users);
                        };
                    });
                }
                else{
                    res.status(400).send({"error": "user already subscribed"});
                }
                
            };
        });
    };

/**
 * @function unSubscribe
 * @summary Unsubscribe from a subreddit. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON}
 */

    unSubscribe(req, res){

        var unsubscribed_user = getUser(req);
        var subrName = req.params.srName;

        sr.findOne({name: subrName}, function(err){
            if(err){
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function(record){
            if(!record){
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else{
                if(record.subscribed_users.indexOf(unsubscribed_user) > -1)
                {
                    record.subscribed_users.splice(record.subscribed_users.indexOf(unsubscribed_user), 1);
                    record.save(function(err){
                        if(err){
                            res.status(500).send({ 'error': 'internal server error' });
                        }
                        else{
                        res.status(200).send(record.subscribed_users);
                        }
                    });
                }
                else{
                    res.status(400).send({ 'error': 'user not subscribed' });
                };
            }
        });
    };

/**
 * @function deletePost
 * @summary Delete a post from a subreddit. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON}
 */

    deletePost(req, res){
        var eraser = getUser(req);
        var subrName = req.params.srName;
        var postId = req.params.postId;
        pt.findOne({_id: postId},function(err){
            if(err){
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function(checked){
            if (!checked) {
                res.status(404).send({ 'error': 'invalid postId' });
            }
            else if(checked.creatorUsername != eraser)
            {
                res.status(403).send({ 'error': 'access forbidden' });
            }
            else{
                pt.findOneAndDelete({_id: postId}, function(err, deleted){
                    if(err)
                    {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                    if(!deleted)
                    {
                        res.status(400).send({ 'error': 'invalid postId' });
                    }
                    else{
                        sr.findOne({name: subrName}).then(function(record){
                            record.posts.splice(record.posts.indexOf(postId), 1);
                            record.save(function(err){
                                if(err)
                                {
                                    res.status(500).send({ 'error': 'invalid postId' });
                                }
                                else{
                                    res.status(200).send(record.posts);
                                }
                            });
                        });
                    };    
                });
            };
        });
    };

/**
 * @function editPost
 * @summary Edit a post in a subreddit. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON}
 */

    editPost(req, res){
        var postId = req.params.postId;
        var subrName = req.params.srName; //No use
        var title = req.body.title;
        var threadBody = req.body.threadBody;
        var editor = getUser(req);
        pt.findOne({_id: postId}, function(err){
            if(err){
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function(record){
            if(!record){
                res.status(400).send({ 'error': 'invalid postId' });
            }
            if(record.creatorUsername != editor){
                res.status(403).send({ 'error': 'access forbidden' })
            }
            else{
                pt.findOneAndUpdate({_id: postId}, {title: title, body: threadBody}, function(err, updated)
                {
                    if(err){
                        res.status(500).send({ 'error': 'internal server error' }) 
                    };
                    if (!updated)
                    {
                        res.status(400).send({ 'error': 'invalid postId' });
                    }
                    else{
                        res.status(200).send(updated);
                    };  
                });
            };
        });
    };

/**
 * @function deleteSubreddit
 * @summary Delete subreddit. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON}
 */

    deleteSubreddit(req, res){
        var subrName = req.params.srName;
        var eraser = getUser(req);
        sr.findOne({name: subrName}, function(err){
            if(err){
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function(record){
            if(!record){
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else if (record.adminUsername!=eraser){
                res.status(403).send({ 'error': 'access forbidden' });
            }
            else {
                pt.deleteMany({subredditName: subrName}, function(err){
                    if(err){
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                }).then(sr.findOneAndDelete({name: subrName}, function(err){
                    if(err){
                        res.json({error: 'internal server error',
                        status:500});
                        res.end();  
                    }; 
                }).then(function(deleted){
                    res.status(200).send(deleted);
                }));
            };
        });
    }
};
module.exports = new SR();