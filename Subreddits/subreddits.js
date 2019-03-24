const express = require('express');
const srs = require('../models/subredditsSchema');
const sr=srs.Subreddit;
const mongoose = require('mongoose');

class SR {
    constructor(){

    }
/**
 * @description Create a subreddit.
 * @param {object} Request - Request body: username, srName, srRules.
 * @param {object} Response - 200 (Success).
 * @returns {null}
 */
    createSr (req, res) {
        var admin = req.body.username;
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
                res.json({ error: 'internalServerError' });
                res.end()

                }
                else {
                res.send(200);   // if everything worked as mentioned 
                res.end()
                }
            });
        }
        else
        {
            res.json({error: 'err',
            status:400});
            res.end()
        }
    };

/**
 * @description Edit a subreddit's details.
 * @param {object} Request - Request paramaters: srName - Request body: newRules, newName .
 * @param {object} Response - 200 (Success).
 */
    edit (req, res){

        var subredditName = req.params.srName;
        var updatedRules = req.body.newRules;
        var updatedName = req.body.newName;

        if(subredditName && updatedRules && updatedName){
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
        }
        else {
            res.json({error: 'err',
            status:400});
            res.end();
        };         
    };

/**
 * @description Get a subreddit's info. 
 * @param {object} Req -  Request paramaters: srName.
 * @param {object} Res - Return subreddit's username, date, posts and rules - 200 (Success).
 * @returns {object} Username - 
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
                    res.json({username: record.admin_username, date: record.date, posts: record.posts, rules: record.rules})
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
 * @description Create a post inside subreddit.
 * @param {object} Request - Request paramaters: srName - Request body: username, title, threadBody.
 * @param {object} Response - 200 (Success).
 * @returns {null}
 */
    createPost(req, res){

        var subrName = req.params.srName;
        var creator = req.body.username;
        var postTitle = req.body.title;
        var postBody = req.body.threadBody;
        var post = {
            title: postTitle,
            body: postBody,
            creatorUsername: creator,
            subredditName: subrName
        };

        if(creator && postTitle && postBody){
            sr.findOne({name: subrName}, function(err){
                if(err){
                    res.json({error: 'err',
                    status:500});
                    res.end();
                }
            }).then(function(record){
                record.posts.push(post);
                record.save().then(function(){
                    res.status(200);
                    res.end();
                });
            });
        }
        else {
            res.json({error: 'err',
            status:400});
            res.end();
        };
    };
};
module.exports = new SR();