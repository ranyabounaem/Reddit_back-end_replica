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
            subreddit.save(function (err) {
                if (err) {
                // internal Server error 
                res.status(500)
                res.json({ error: 'internalServerError or name may already exist' });
                res.end();

                }
                else {
                res.send(200);   // if everything worked as mentioned 
                res.end();
                }
            });
        }
        else
        {
            res.json({error: 'err',
            status:400});
            res.end();
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
           
               if(record.adminUsername!=getUser(req)){
                   res.json({error: 'invalid user',
                    status:400});
                    res.end();
                }
                else{

                    sr.findOneAndUpdate({name: subredditName}, {name:updatedName, rules:updatedRules}, function(err){
                        if (err){
                            res.json({error: 'internal server err',
                            status:500});
                            res.end();
                        }
                        else {
                            res.status(200);
                            res.end();
                        };
                    });
                };
            });
        }
        else {
            res.json({error: 'incorrect or empty fields',
            status:400});
            res.end();  
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
                    res.json({error: 'err',
                    status:500});
                    res.end();
                }
                else
                {
                    res.status(200);
                }
            }).then(function(record){
                res.json({username: record.admin_username, date: record.date, posts: record.posts, rules: record.rules, bio: record.bio})
                res.end();
            });
        }

        else {
            res.json({error: 'err',
            status:400});
            res.end();
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

                    res.json({error: 'err',
                    status:500});
                    res.end();

                }
            }).then(function(record, err){
                if(err){

                    res.json({error: 'err',
                    status:500});
                    res.end();

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
                            res.json({ error: 'internalServerError or name may already exist' });
                            res.end();

                        }
                            record.posts.push(newPost._id);
                            record.save().then(function(){
                            res.status(200);
                            res.end();
                        });
                    });
                };
            });
        }
        else {
            res.json({error: 'err',
            status:400});
            res.end();
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
                res.json({error: 'internal server error or subreddit does not exist',
                status:500});
                res.end();
            };
        }).then(function(record){
            record.subscribed_users.push(subscribed_user);
            record.save().then(function(err){
                if(err){
                    res.json({error: 'internal server error',
                    status:500});
                    res.end();
                };
                res.status(200);
                res.end();
            });
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
                res.json({error: 'internal server error or subreddit does not exist',
                status:500});
                res.end();
            };
        }).then(function(record){
            record.subscribed_users.pop(unsubscribed_user);
            record.save().then(function(err){
                if(err){
                    res.json({error: 'internal server error',
                    status:500});
                    res.end();
                };
                res.status(200);
                res.end();
            });
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
                res.json({error: 'internal server error or post does not exist',
                status:500});
                res.end();
            };
        }).then(function(record){
            if(record.creatorUsername != eraser)
            {
                res.json({error: 'user mismatch',
                status:400});
                res.end();
            }
            else{
                pt.findOneAndDelete({_id: postId}).then(function(){
                    sr.findOne({name: subrName}).then(function(record){
                        record.posts.pop(postId);
                        record.save().then(function(){
                            res.status(200);
                            res.end();
                        });
                    });
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
        var subrName = req.params.srName;
        var title = req.body.title;
        var threadBody = req.body.threadBody;
        var editor = getUser(req);
        pt.findOne({_id: postId}).then(function(record){
            if(record.creatorUsername != editor){
                res.status(404).send({ 'error': 'user mismatch' })
            }
            else{
                pt.findOneAndUpdate({_id: postId}, {title: title, body: threadBody}, function(err)
                {
                    if(err){
                        res.json({error: 'internal server error',
                        status:500});
                        res.end();  
                    }
                    else{
                        res.status(200);
                        res.end();
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
                res.json({error: 'internal server error',
                status:500});
                res.end(); 
            }
        }).then(function(record){
            if (record.adminUsername!=eraser){
                res.json({error: 'user mismatch',
                status:400});
                res.end();
            };
            pt.deleteMany({subredditName: subrName}, function(err){
                if(err){
                    res.json({error: 'internal server error',
                    status:500});
                    res.end(); 
                };
                sr.findOneAndDelete({name: subrName}, function(err){
                    if(err){
                        res.json({error: 'internal server error',
                        status:500});
                        res.end();   
                    };
                    res.sendStatus(200);
                    res.end();
                });
            });
        });
    }
};
module.exports = new SR();