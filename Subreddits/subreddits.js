const express = require('express');
const sr = require('subredditSchema');
const mongoose = require('mongoose');

class SR {
    constructor(){

    }

    create (req, res) {
        var admin = req.body.username;
        var subredditName = req.body.srName;
        var subredditRules = req.body.srRules;
        if(admin && subredditName && subredditRules){
            var subreddit = new sr({
                name: subredditName,
                admin_username: admin,
                rules: subredditRules,
                date = date().now
            })
            subreddit.save(function(err){
                if (err){
                    res.status(500);
                    res.json({error: 'err',
                    status:500});
                    res.end;
                }
                else{
                    res.status(200);
                    res.end;
                }
            });
        }
        else{
            res.json({error: 'err',
                status:400});
                res.end;
        }
    };


    edit (req, res){

        var subredditName = req.params.srName;
        var updatedRules = req.body.newRules;
        var updatedName = req.body.newName;

        if(subredditName && updatedRules && updatedName){
            sr.findOneAndUpdate({name: subredditName}, {name:newName, rules:newRules}, function(err){
                if (err){
                    res.json({error: 'internal server err',
                    status:500});
                    res.end;
                }
                else {
                    res.status(200);
                    res.end;
                };
            });
        }
        else {
            res.json({error: 'err',
            status:400});
            res.end;
        };         
    };


    info (req, res){

        subredditName = req.params.srName;

        if(subredditName){
            sr.findOne({name: subredditName}, function(err){
                if(err)
                {
                    res.json({error: 'err',
                    status:500});
                    res.end;
                }
                else
                {
                    res.status(200);
                }
            }).then(function(record){
                    res.json({username: record.admin_username, date: record.date, postIds: record.posts._id, rules: record.rules})
                    res.end;
                });
            }

        else {
            res.json({error: 'err',
            status:400});
            res.end;
        };

    };

    createPost(req, res)
    {
        
    }


};