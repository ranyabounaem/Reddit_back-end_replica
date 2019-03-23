const express = require('express');
const bodyParser = require('body-parser');
const User = require('..//models/UserSchema');
const userhandler = require('../src/user/index');
const subbredditsSchema = require('../models/subredditsSchema');
const subbreddits = subbredditsSchema.Subreddit;
const posts = subbredditsSchema.SubredditPostSchema;
class listings {
    constructor() {

    }
    async listingPostsbyNew(owner, startPosition) {
        // getting the names of the subbreddit a user is subscribed to 
        let subscribedSubbreddit = await User.findOne({ Username: owner }, { Subscriptions: 1, _id: 0 });
        // finding the posts that the subbreddit posted to retrieve for the user 
        let newPosts = await posts.find({ subredditName: subscribedSubbreddit.Subscriptions }, { _v: 0 }).sort({ postDate: -1 })
            .skip(startPosition * 15).limit(15);
        return newPosts;
    }
    async listPosts(req, res) {
        let owner = req.params.username;
        let listingType = req.query.type;
        let startPosition = req.body.startPosition;
        let newPosts = null;
        // validation for the type error
        if (listingType == undefined
            || !(listingType == 'hot'
                || listingType == 'new'
                || listingType == 'top')
            || (typeof startPosition != 'number')) {

            res.status(400);
            res.json({ error: 'undefinedQuery' });
            return;
        }
        // middleware shall be used to check for this 
        if (!(await userhandler.isUserFound(owner))) {
            res.status(404);
            res.send({ "error": "userNotFound" });
            return;
        }
        // for this phase we will be sending listing by new
        if (listingType == 'new') {
            // awaiting for the retriving the new posts and checking  the result
            newPosts = await this.listingPostsbyNew(owner, startPosition);
            // if there is no error and it is not null send it 
            if (newPosts != null) {
                res.status(200);
                res.json(newPosts);
                return;
            }
            else {
                res.status(404);
                res.send({ "error": "postsNotFound" });
                return;

            }

        }
        else if (listingType == 'top') {

            res.status(404);
            res.send({ "error": "postsNotFound" });
            return;
            return;
        }
        else if (listingType == 'hot') {

            res.status(404);
            res.send({ "error": "postsNotFound" });
            return;
            return;
        }
        else {
            res.status(500);
            res.send({ "error": "internalServerError" });
            return;
        }

    }





}

module.exports = new listings();