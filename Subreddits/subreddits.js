const express = require('express');
const srs = require('../models/subredditsSchema');
const User = require('../models/UserSchema');
const sr = srs.Subreddit;
const pt = srs.SubredditPostSchema;
const mongoose = require('mongoose');
const jwt = require('../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;
const vote = require('../models/voteSchema');
const report = require('../models/Reports');
const fs = require('fs');

class SR {
    constructor() {

    }

    /**
     * @function createSr
     * @summary Create a subreddit.
     * @param {object} Request - Request body: username, srName, srRules.
     * @param {object} Response - 200 (Success).
     * @returns {JSON} Returns the created subreddit.
     */
    createSr(req, res) {

        var admin = getUser(req);
        var subredditName = req.body.srName;
        var subredditRules = req.body.srRules;
        const imgdata = req.body.base64image;
        var bio = req.body.bio;
        //ar imageCheck = req.file;

        if (admin && subredditName && subredditRules && imgdata) {
            const path = __dirname + '/../uploads/'+Date.now()+'.png'
            const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
            var subreddit = new sr({
                name: subredditName,
                adminUsername: admin,
                rules: subredditRules,
                modUsername: admin,
                subredditFile: '/uploads/'+Date.now()+'.png',
                bio: bio
                //if(imageCheck) { subredditFile: req.file.path }
            });
            subreddit.save(function (err, record) {
                if (err) {
                    // internal Server error 
                    res.status(500).send({ 'error': 'internal server error' });

                }
                else {
                    User.findOne({ Username:admin}).then(function(user){

                    user.moderates.push(subredditName);

                      user.save(function(){res.status(200).send(record);}) 
                      
                    })
                     
                }
            });
        }
        else {
            res.status(400).send({ 'error': 'invalid paramaters' });
        }
    };

    /**
     * @function edit
     * @summary Edit a subreddit's details.
     * @param {object} Request - The request
     * @param {object} Response - The response.
     * @returns {JSON} Returns the edited subreddit (old version).
     */
    edit(req, res) {

        var subredditName = req.params.srName;
        var updatedRules = req.body.newRules;
        var updatedName = req.body.newName;
        var newMods = req.body.newMods;
        const imgdata = req.body.base64image;
        
        if (subredditName && updatedRules && updatedName && newMods && imgdata) {
            const path = __dirname + '/../uploads/'+Date.now()+'.png'
            const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
            sr.findOneAndUpdate({ name: subredditName },
                {
                    name: updatedName,
                    rules: updatedRules,
                    modUsername: req.body.newMods,
                    subredditFile: '/uploads/'+Date.now()+'.png',
                    bio: req.body.newBio
                },
                function (err, record) {


                    if (!record) {
                        res.status(400).send({ 'error': 'invalid subreddit name' });
                    }
                    else if (record.adminUsername != getUser(req)) {
                        res.status(403).send({ 'error': 'access forbidden' })
                    }
                    else {

                        sr.findOneAndUpdate({ name: subredditName }, { name: updatedName, rules: updatedRules }, function (err, record) {
                            if (err) {
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
     * @returns {JSON} Returns all info of a subreddit.
     */
    info(req, res) {

        var subredditName = req.params.srName;

        if (subredditName) {
            sr.findOne({ name: subredditName }, function (err) {
                if (err) {
                    res.status(500).send({ 'error': 'internal server error' });
                };
            }).then(function (record) {
                if (!record) {
                    res.status(400).send({ 'error': 'invalid subreddit name' });
                }
                else {
                    res.status(200).send(record);
                };
            });
        }

        else {
            res.status(400).send({ 'error': 'invalid parameter' });
        };

    };
    /**
     * @function createPost
     * @summary Create a post inside subreddit.
     * @param {object} Request - Request paramaters: srName - Request body: username, title, threadBody.
     * @param {object} Response - 200 (Success).
     * @returns {JSON} Returns the created post.
     */

    createPost(req, res) {
        const imgdata = req.body.base64image;
        var subrName = req.params.srName;
        var creator = getUser(req);
        var postTitle = req.body.title;
        var postBody = req.body.threadBody;
        //var imageCheck = req.file;
        //var spoilerCheck = req.body.spoiler;


        if (creator && postTitle && postBody) {

            sr.findOne({ name: subrName }, function (err) {

                if (err) {
                    res.status(500).send({ 'error': 'internal server error' });
                }
            }).then(function (record) {
                if (!record) {
                    res.status(400).send({ 'error': 'invalid subreddit name' });
                }
                else {
                    if(imgdata){
                        const path = __dirname + '/../uploads/'+Date.now()+'.png'
                        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
                        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
                    }
                    let newPost = new pt({
                        title: postTitle,
                        body: postBody,
                        creatorUsername: creator,
                        subredditName: subrName,
                        postFile: imgdata ? '/uploads/'+Date.now()+'.png' : "none",
                        //if(imageCheck) { subredditFile: req.file.path },
                        spoiler: req.body.spoiler
                    });
                    newPost.save(function (err) {

                        if (err) {

                            // internal Server error 
                            res.status(500)
                            res.json({ error: 'internalServerError ' });
                            res.end();

                        }
                        else {
                            record.posts.push(newPost._id);
                            record.save(function (err) {
                                if (err) {
                                    res.json({ error: 'internalServerError' });
                                }
                                else {
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
     * @returns {JSON} Returns list of subscribers in subreddit.
     */
    subscribe(req, res) {

        var subscribed_user = getUser(req);
        var subrName = req.params.srName;

        sr.findOne({ name: subrName }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function (record) {
            if (!record) {
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else {
                if (record.subscribed_users.indexOf(subscribed_user) == -1) {
                    record.subscribed_users.push(subscribed_user);
                    record.save(function (err) {
                        if (err) {
                            res.status(500).send({ 'error': 'internal server error' });
                        }
                        else {
                            User.findOne({ Username: subscribed_user }, function (err) {
                                if (err) {
                                    res.status(500).send({ 'error': 'internal server error' });
                                }
                            }).then(function (user) {
                                user.Subscriptions.push(subrName);
                                user.save(function (err) {
                                    if (err) {
                                        res.status(500).send({ 'error': 'internal server error' });
                                    }
                                    else {
                                        res.status(200).send({subscribed_users: record.subscribed_users});
                                    };
                                });
                            });
                        };
                    });
                }
                else {
                    res.status(400).send({ "error": "user already subscribed" });
                }

            };
        });
    };


    /**
     * @function unSubscribe
     * @summary Unsubscribe from a subreddit. 
     * @param {object} Req -  Request
     * @param {object} Res - Response
     * @returns {JSON} Returns list of subscribers of subreddit.
     */

    unSubscribe(req, res) {

        var unsubscribed_user = getUser(req);
        var subrName = req.params.srName;

        sr.findOne({ name: subrName }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function (record) {
            if (!record) {
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else {
                if (record.subscribed_users.indexOf(unsubscribed_user) > -1) {
                    record.subscribed_users.splice(record.subscribed_users.indexOf(unsubscribed_user), 1);
                    record.save(function (err) {
                        if (err) {
                            res.status(500).send({ 'error': 'internal server error' });
                        }
                        else {
                            User.findOne({ Username: unsubscribed_user }, function (err) {
                                if (err) {
                                    res.status(500).send({ 'error': 'internal server error' });
                                };
                            }).then(function (userRecord) {
                                userRecord.Subscriptions.splice(userRecord.Subscriptions.indexOf(subrName), 1);
                                userRecord.save(function (err) {
                                    if (err) {
                                        res.status(500).send({ 'error': 'internal server error' });
                                    }
                                    else {
                                        res.status(200).send(record);
                                    };
                                });
                            });
                        };
                    });
                }
                else {
                    res.status(400).send({ 'error': 'user not subscribed' });
                };
            };
        });
    };

    /**
     * @function deletePost
     * @summary Delete a post from a subreddit. 
     * @param {object} Req -  Request
     * @param {object} Res - Response
     * @returns {JSON} Returns the post that was deleted. (Old version)
     */

    deletePost(req, res) {
        var eraser = getUser(req);
        var subrName = req.params.srName;
        var postId = req.params.postId;
        pt.findOne({ _id: postId }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function (checked) {
            if (!checked) {
                res.status(400).send({ 'error': 'invalid postId' });
            };
            if (checked.creatorUsername != eraser) {
                res.status(403).send({ 'error': 'access forbidden' });
            };
            if (checked.subredditName != subrName) {
                res.status(400).send({ 'error': 'url subreddit is of different name than that of post' });
            }
            else {
                pt.findOneAndDelete({ _id: postId }, function (err, deleted) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                    if (!deleted) {
                        res.status(400).send({ 'error': 'invalid postId' });
                    }
                    else {
                        vote.deleteMany({ votedID: deleted._id });
                        sr.findOne({ name: subrName }).then(function (record) {
                            record.posts.splice(record.posts.indexOf(postId), 1);
                            record.save(function (err) {
                                if (err) {
                                    res.status(500).send({ 'error': 'internal server error' });
                                }
                                else {
                                    res.status(200).send(record);
                                };
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
     * @returns {JSON} Returns the post that was edited (old version).
     */

    editPost(req, res) {
        var postId = req.params.postId;
        var subrName = req.params.srName; //No use
        var title = req.body.title;
        var threadBody = req.body.threadBody;
        var editor = getUser(req);
        pt.findOne({ _id: postId }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function (record) {
            if (!record) {
                res.status(400).send({ 'error': 'invalid postId' });
            }
            if (record.creatorUsername != editor) {
                res.status(403).send({ 'error': 'access forbidden' })
            }
            if (record.subredditName != subrName) {
                res.status(400).send({ 'error': 'url subreddit is of different name than that of post' })
            }
            else {
                pt.findOneAndUpdate({ _id: postId }, { title: title, body: threadBody, spoiler: req.body.spoiler }, function (err, updated) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' })
                    };
                    if (!updated) {
                        res.status(400).send({ 'error': 'invalid postId' });
                    }
                    else {
                        res.status(200).send(updated);
                    };
                });
            };
        });
    };

    /**
    * @function votePost
    * @summary Upvote or downvote a post. 
    * @param {object} Req -  Request
    * @param {object} Res - Response
    * @returns {JSON} Returns the post's information as an object.
    */

    votePost(req, res) {
        var username = getUser(req);
        var postId = req.params.postId;
        var upvote = req.body.upvote;
        pt.findOne({ _id: req.params.postId }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            };
        }).then(function (record) {
            if (record) {
                vote.findOne({ votedID: postId, username: username, upvote: upvote, post: true }, function (err) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                }).then(function (voteRecord) {
                    if (voteRecord) {
                        res.status(400).send({ 'error': `already voted: ${upvote} ` });
                    }
                    else {

                        vote.findOne({ votedID: postId, username: username, upvote: !upvote, post: true }, function (err) {
                            if (err) {
                                res.status(500).send({ 'error': 'internal server error' });
                            };
                        }).then(function (voteRecord2) {
                            if (voteRecord2) {
                                if (upvote == true) {
                                    voteRecord2.upvote = true;
                                    record.votes = record.votes + 2;
                                    User.findOne({ Username: username }).then(function (retUser) {
                                        retUser.karma = retUser.karma + 2;
                                        retUser.save();
                                    });
                                    record.save(function (err) {
                                        if (err) {
                                            res.status(500).send({ 'error': 'internal server error' });
                                        }
                                        else {
                                            voteRecord2.save(function (err) {
                                                if (err) {
                                                    res.status(500).send({ 'error': 'internal server error' });
                                                }
                                                else {

                                                    res.status(200).send(record);
                                                };
                                            });
                                        };
                                    });

                                }
                                else {
                                    voteRecord2.upvote = false;
                                    record.votes = record.votes - 2;
                                    User.findOne({ Username: username }).then(function (retUser) {
                                        retUser.karma = retUser.karma - 2;
                                        retUser.save();
                                    });
                                    record.save(function (err) {
                                        if (err) {
                                            res.status(500).send({ 'error': 'internal server error' });
                                        }
                                        else {
                                            voteRecord2.save(function (err) {
                                                if (err) {
                                                    res.status(500).send({ 'error': 'internal server error' });
                                                }
                                                else {
                                                    res.status(200).send(record);
                                                };
                                            });
                                        };
                                    })

                                };
                            }
                            else {
                                vote.create({ votedID: postId, username: username, upvote: upvote, post: true }).then(function () {
                                    if (upvote) {
                                        record.votes++;
                                        User.findOne({ Username: username }).then(function (retUser) {
                                            retUser.karma = retUser.karma + 1;
                                            retUser.save();
                                        });
                                    }
                                    else {
                                        record.votes--;
                                        User.findOne({ Username: username }).then(function (retUser) {
                                            retUser.karma = retUser.karma - 1;
                                            retUser.save();
                                        });
                                    };
                                    record.save(function (err) {
                                        if (err) {
                                            res.status(500).send({ 'error': 'internal server error' });
                                        }
                                        else {
                                            res.status(200).send(record);
                                        };
                                    });
                                });
                            };
                        });
                    };
                });
            }
            else {
                res.status(400).send({ 'error': 'invalid postId' });
            };
        });
    };

    /**
    * @function unvotePost
    * @summary Unvote a post. 
    * @param {object} Req -  Request
    * @param {object} Res - Response
    * @returns {JSON} Returns the post's information as an object.
    */

    unvotePost(req, res) {
        var postId = req.params.postId;
        var username = getUser(req);
        vote.findOne({ votedID: postId, username: username }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function (record) {
            if (record) {
                if (record.upvote == false) {
                    pt.findOne({ _id: postId }, function (err) {
                        if (err) {
                            res.status(500).send({ 'error': 'internal server error' });
                        };
                    }).then(function (record2) {
                        record2.votes++;
                        User.findOne({ Username: username }).then(function (retUser) {
                            retUser.karma = retUser.karma + 1;
                            retUser.save();
                        });
                        vote.findOneAndDelete({ votedID: postId, username: username }).then(function () {
                            record2.save(function (err, record3) {
                                if (err) {
                                    res.status(500).send({ 'error': 'internal server error' });
                                }
                                else {
                                    res.status(200).send(record3);
                                };
                            });
                        });
                    });
                }
                else {
                    pt.findOne({ _id: postId }, function (err) {
                        if (err) {
                            res.status(500).send({ 'error': 'internal server error' });
                        };
                    }).then(function (record2) {
                        record2.votes--;
                        User.findOne({ Username: username }).then(function (retUser) {
                            retUser.karma = retUser.karma - 1;
                            retUser.save();
                        });
                        vote.findOneAndDelete({ votedID: postId, username: username }).then(function () {
                            record2.save(function (err, record3) {
                                if (err) {
                                    res.status(500).send({ 'error': 'internal server error' });
                                }
                                else {
                                    res.status(200).send({ record3 });
                                };
                            });
                        });
                    });
                };
            }
            else {
                res.status(400).send({ "error": "post already unvoted" });
            };
        });
    };



    reportPost(req, res) {
        var postId = req.params.postId;
        var reportText = req.body.reportText;
        var username = getUser(req);
        if (reportText) {
            pt.findOne({ _id: postId }, function (err) {
                if (err) {
                    res.status(500).send({ 'error': 'internal server error' });
                }
            }).then(function (record) {
                if (record) {
                    //find if user alrdy reported this post, or if user has max of 5 reports
                    //if not: add postId to report schema 
                    report.findOne({ reportedId: postId }).then(function (rep) {

                        if (!rep) {
                            report.create({ reportedId: record._id, post: true, srName: record.subredditName, description: reportText }).then(function () { res.status(200).send("reported"); })
                        }
                        else { res.status(400).send({ "error": "already reported" }); }
                    })

                }
                else {
                    res.status(400).send({ "error": "invalid post id" });
                };
            });
        }
        else {
            res.status(400).send({ 'error': 'invalid report text' });
        };
    };

    /**
     * @function deleteSubreddit
     * @summary Delete subreddit. 
     * @param {object} Req -  Request
     * @param {object} Res - Response
     * @returns {JSON} Returns the subreddit that was deleted.
     */

    deleteSubreddit(req, res) {
        var subrName = req.params.srName;
        var eraser = getUser(req);
        sr.findOne({ name: subrName }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function (record) {
            if (!record) {
                res.status(400).send({ 'error': 'invalid subreddit name' });
            }
            else if (record.adminUsername != eraser) {
                res.status(403).send({ 'error': 'access forbidden' });
            }
            else {
                pt.deleteMany({ subredditName: subrName }, function (err) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                }).then(sr.findOneAndDelete({ name: subrName }, function (err) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                }).then(function (deleted) {
                    res.status(200).send(deleted);
                }));
            };
        });
    };

    /**
    * @function postInfo
    * @summary Get post's information. 
    * @param {object} Req -  Request
    * @param {object} Res - Response
    * @returns {JSON} Returns the post's information as an object.
    */

    postInfo(req, res) {

        var subrName = req.params.srName;
        var postId = req.params.postId;

        sr.findOne({ name: subrName }, function (err) {
            if (err) {
                res.status(500).send({ 'error': 'internal server error' });
            }
        }).then(function (record) {
            if (!record) {
                res.status(400).send({ 'error': 'invalid subreddit name' });
            };
            if (record.posts.indexOf(postId) > -1) {
                pt.findOne({ _id: postId }, function (err) {
                    if (err) {
                        res.status(500).send({ 'error': 'internal server error' });
                    };
                }).then(function (post) {
                    if (!post) {
                        res.status(500).send({ 'error': 'invalid postId' });
                    }
                    else {
                        res.status(200).send(post);
                    };
                });
            };
        });
    };

    /**
 * @function savePost
 * @summary Get post's information. 
 * @param {object} Req -  Request
 * @param {object} Res - Response
 * @returns {JSON} Returns the post's information as an object.
 */
    async   savePost(req, res) {
        const postId = req.params.postId;
        const username = jwt.getUsernameFromToken(req);

        const user = await User.findOne({ Username: username });

        const postSave = await pt.findOne({ _id: postId });

        if (!postSave) { res.status(404).send({ 'error': 'post doesnt exist' }); }

        else {
            const checkIfSaved = await user.SavedPosts.find(function (srInReport) {

                return srInReport.postId == postId;
            });


            if (checkIfSaved) { res.status(404).send({ error: "post already saved" }); }


             if(checkIfSaved) {

                user.SavedPosts.pop({"postId":postId,"title":postSave.title});

                user.save();
                 
                res.status(404).send({error:"post Unsaved"});
            
            }
             
             
            else{
                
            user.SavedPosts.push({"postId":postId,"title":postSave.title});

                user.SavedPosts.push({ "postId": postId, "title": postSave.title });

                user.save();

                res.status(200).send({ message: "post saved" });
            }
        }
    }

    /**
    * @function listPost
    * @summary Listing post's information. 
    * @param {object} Req -  Request
    * @param {object} Res - Response
    * @returns {JSON} Returns the post's information as an object.
    */

   listPost(req, res) {

        var subrName = req.params.srName;
        var type = req.params.type;
        var yesterday = Date.now() - 1000*60*60*24;
        if(type)
        {
            if(type=="hot")
            {
                pt.find({subredditName: subrName, postDate:{$gt:yesterday}})
                .sort({votes: -1})
                .limit(5)
                .exec( function(err, posts) {
                    if (err) res.status(500).send(err);
                    else{
                    res.status(200).send({postList: posts});
                    };
                });
            }
            else if(type=="new")
            {
                pt.find({subredditName: subrName})
                .sort({postDate: -1})
                .limit(5)
                .exec( function(err, posts) {
                    if (err) res.status(500).send(err);
                    else{
                    res.status(200).send({postList: posts});
                    };
                });
            }
            else if(type == "top")
            {
                pt.find({subredditName: subrName})
                .sort({votes: -1})
                .limit(3)
                .exec( function(err, posts) {
                    if (err) res.status(500).send(err);
                    else{
                    res.status(200).send({postList: posts});
                    };
                });
            };
        };
    };

};
module.exports = new SR();