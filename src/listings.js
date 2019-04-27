const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/UserSchema');
const userhandler = require('./user/index');
const subbredditsSchema = require('../models/subredditsSchema');
var mongodb = require("mongodb")
const subbreddits = subbredditsSchema.Subreddit;
const posts = subbredditsSchema.SubredditPostSchema;
const ath = require('../JWT/giveToken');

/** 
 * @class listings
 */
class listings {
    constructor() {

    }
    /**
       * Listing sorting the posts  by  new feature
       * @param {string} owner   the username of the user to retrieve list for
       * @param {Number} lastid the last id of the post retrieved to get its date to avoid duplication
       * @example
       * // returns   array of 15 posts maximum depending on the start position
       * listings.listingPostsbyNew('kefah', 0);
       * @returns {Object[]}    returns array of 15 posts maximum depending on the last post message
       * @example
       *  listings.listingPostsbyNew('kefah', 5cc45ae0994cc91d02b6dfc1);
       * @returns {Object[]}  
       */
    async listingPostsbyNew(owner, lastid) {
        // getting the names of the subbreddit a user is subscribed to 
        let subscribedSubbreddit = await User.findOne({ Username: owner }, { Subscriptions: 1, _id: 0 });
        // finding the posts that the subbreddit posted to retrieve for the user 
        let lastpost = null;
        // oldest date corrsoponding to  01 January, 1970 UTC
        // so negate it to get the maximum date
        let lastpostdate = new Date(8640000000000000);
        // for the first timer or whether the id not valid
        if (lastid == 0 || (!mongodb.ObjectID.isValid(lastid))) {
            lastpost = null;
        }
        else {
            lastpost = await posts.findById(lastid);
            lastpostdate = new Date(lastpost.postDate);
        }
        let newPosts = await posts.find({ subredditName: subscribedSubbreddit.Subscriptions, postDate: { $lt: lastpostdate } }, { __v: 0 }).sort({ postDate: -1 })
            .limit(15);
        return newPosts;
    }
    /**
       * Listing sorting the posts  by  hot feature
       * @param {string} owner   the username of the user to retrieve list for
       * @param {string} hotindex the index of the hot of the last post
       * @param {string} lastid the lastid of the post displayed on user end
       * @example
       * // returns   array of 15 posts maximum depending on the start position
       * listings.listingPostsbyHot('kefah', 92323);
       * @returns {Object[]}    returns array of 15 posts maximum depending on the last post
       * @example
       *  listings.listingPostsbyHot('kefah', 94222);
       * @returns {Object[]}  
       */


    // reference for this hot sorting is given by 
    // no need for last id cause hotindex is different from post to another 
    //https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9
    async listingPostsbyHot(owner, lastid, hotindex) {
        // getting the names of the subbreddit a user is subscribed to 
        let subscribedSubbreddit = await User.findOne({ Username: owner }, { Subscriptions: 1, _id: 0 });
        // finding the posts that the subbreddit posted to retrieve for the user 

        // for mappingReduce of the post by the hot algo
        var o = {};

        // implmenting the reduce function

        // mapping algorithm  for the hot algo
        o.map = function () {
            let hotalgo = function (score, date) {
                // getting the time by seconds (get time gets it by ms) then subtracting a constant
                // this constant refers to the oldest time in unix stamp for oldest submission
                let ts = (new Date(date).getTime() / 1000) - 1134028003;
                let y = 0;
                if (score > 0) {
                    y = 1;
                }
                else if (score < 0) {
                    y = -1;
                }
                else {
                    y = 0;
                }
                let z = Math.max(Math.abs(score), 1);
                //45000 is the number of seconds in 12.5 hours. 
                return (Math.log10(z) + ((y * ts) / 4500));
                // somethings needs to have a score that is 10 times something 12.5 hours ago to rank higher than it
            };

            emit(this,hotalgo(this.votes, this.postDate));
        };
        o.query = { subredditName: subscribedSubbreddit.Subscriptions };
        o.out = { inline: 1 };
        o.sort = {_id:-1};
        let hotPosts = null;
        // finding the result by map/reduce of hot algo
        let results = await posts.mapReduce(o);
        // getting the embedded result in the mapreduce out  
        //sorting in descending order
        results = results.results.sort(function (a, b) { return b.value - a.value });
        if (results != null) {
            hotPosts = await this.addhotPosts(subscribedSubbreddit, results, lastid, hotindex);

        }

        // arranging it in desc order so that the one with high hot score is at the top
        return hotPosts;



    }
    /**
   * adding Hotposts in a desired format
   * @param {Object[]} results   the resulsts of the hot posts to make json for
   * @param {Object[]} subscribedSubbreddit   the subscribed subrreddits for the user to return posts(contains subscriptions)
   * @param {String} lastid   the last post id on the user end
   * @param {String} lasthot   the last index of hottness of the post displayed on the user end
   * @param {String} results   contains the array of posts but in an undesired format
   *  @example
   * // returns   array of 15 posts maximum 
   * listings.addhotPosts([ { _id: 93843.35235244011, value:   { _id: 5cc395c5ab67c207a6abfe29,title: 'Avengers: Endgame',  body: 'Unpopular opinion: Endgame is super overrated.', creatorUsername: 'captainmaged', subredditName: 'Movies', postDate: 2019-04-26T23:35:33.951Z, __v: 0, votes: 2 } }]);
   * @returns {Object[]}    returns array of 15 posts maximum depending on the last post
   */
    async addhotPosts(subscribedSubbreddit, results, lastid, lasthot) {

        let hotarr = [];
        // results is already sorted here according to the hot algo
        results.forEach(function (element, i) {
      
                hotarr.push(element._id);
                hotarr[i]["hotindex"] = element.value;
            
        });
        if (lastid == 0) {
            // for the first time just sending the top 15
            hotarr = hotarr.slice(0, 15);
        }
        else {
            // not duplicate implmentation of the function listingbyNew
            // needed to implment the sorting by message again with flexibility of attribuites in updated versions
            if (lasthot == 0) {
                // returning it by date 
                hotarr = await this.listingByNewAfterHotAndTop(subscribedSubbreddit, lastid);
            }
            else {
                hotarr = hotarr.filter(function (element, i, array) {

                    return (element.hotindex < lasthot);

                }).slice(0, 15);
            }
        }
        return hotarr;
    }
    /**
       * Listing sorting the posts  by  new feature after Hot or Top
       * @param {Object[]} subscribedSubbreddit   the subbreddits the user is subscribed to 
       * @param {Number} lastid the last id of the post retrieved to get its date to avoid duplication
       * @example
       * // returns   array of 15 posts maximum 
       * @returns {Object[]}  
       */
    async listingByNewAfterHotAndTop(subscribedSubbreddit, lastid) {
        let newPosts = null;
        let lastpost = null;
        let lastpostdate = new Date(8640000000000000);
        // getting the lastpostdate so that we can rank according to it if the same votes
        if (!(mongodb.ObjectID.isValid(lastid))) {
            lastpost = null;
        }
        else {
            lastpost = await posts.findById(lastid);
            lastpostdate = new Date(lastpost.postDate);
        }
        newPosts = await posts.find({ subredditName: subscribedSubbreddit.Subscriptions, postDate: { $lt: lastpostdate }, votes: 0 }, { __v: 0 }).sort({ postDate: -1 })
            .limit(15);

        return newPosts;
    }


    /**
       * Listing sorting the posts  by  popular feature
       * @param {string} owner   the username of the user to retrieve list for
       * @param {String} syncToken  the token extracted from the request header to get the username of the sender
       * @param {string} lastvotes the last votes score for the last post on the user end
       * @param {string} lastid the last id of the last post in user ends
       * @example
       * // returns   array of 15 posts maximum depending on the start position
       * listings.listingPostsbyTop('kefah',5cc45ae0994cc91d02b6dfc1 ,0);
       * @returns {Object[]}    returns array of 15 posts maximum depending on the last post
       * @example
       *  listings.listingPostsbyTop('kefah',5cc45ae0994cc91d02b6dfc1, 1);
       * @returns {Object[]}  
       */
    async listingPostsbyTop(owner, lastid, lastvotes) {
        // getting the names of the subbreddit a user is subscribed to 
        let subscribedSubbreddit = await User.findOne({ Username: owner }, { Subscriptions: 1, _id: 0 });
        // finding the posts that the subbreddit posted to retrieve for the user 
        //listing top here by votes then by the post date newest first if they have the same # of votes
        // they may send duplicates so handling it and sending the retreiival by date
        let topPosts = null;
        if (lastid == 0 || !(mongodb.ObjectID.isValid(lastid))) {
            // first timer
            topPosts = await posts.find({ subredditName: subscribedSubbreddit.Subscriptions }, { __v: 0 }).sort({ votes: -1, postDate: -1 })
                .limit(15);
        }
        else {
            if (lastvotes == 0) {
                topPosts = await this.listingByNewAfterHotAndTop(subscribedSubbreddit, lastid);
            }
            else {
                // duplicated persist here in one case
                topPosts = await posts.find({ subredditName: subscribedSubbreddit.Subscriptions, votes: { $lte: lastvotes } }, { __v: 0 }).sort({ votes: -1, postDate: -1 })
                    .limit(15);
            }
        }
        return topPosts;
    }
    /**
     * Handles request List Posts
     * @param {Object} req  The request.
     * @param {Object} res  The response.
     * @param {String} syncToken the synctokes of the user that we are going to extract from the username
     * @param {String} req.query.type  the type of listings he wants to hot,new,popular
     * @param {String} req.query._id  the id of the last post retrieved last time
     * @param {Number} req.query.votes  the votes of the lastpost in the user end
     * @param {Number} req.query.hotindex  the hot index of the last post in the user end
     * @example
     * // returns   {"error": "errorType"} if there is an error in the request see Api for error response
     * listings.listPosts(req,res);
     * @example
     * // returns OK status 200 with the json file of the posts 
     * listings.listPosts(req,res);
     * @returns {JSON} {"posts":[{"subredditName": "funny","_id":1,"title":"love","postDate":"1998-04-23","body": "love is known for something"},{"subredditName": "nature","_id":2,"title":"vietnam nature","postDate":"1998-04-23","body": "vietnam nature is known for something"} ]}
     * @returns {JSON} {error: 'undefinedQuery'} 
     * @returns {JSON} {error: 'userNotFound'} 
     * @returns {JSON} {error: 'postsNotFound'} 
     * @returns {JSON} {error: 'internalServerError'} 
     */

    async  listPosts(req, res) {
        let owner = ath.getUsernameFromToken(req);
        let listingType = req.query.type;
        // the last post id needed to return non duplicate values
        let lastpostid = req.query._id;
        // the votes of the last post on the user end may be different from out db
        let votes = req.query.votes;
        // the hot index of the last post
        let hotindex = req.query.hotindex;
        // validation for the type error
        if (listingType == undefined
            || !(listingType == 'hot'
                || listingType == 'new'
                || listingType == 'top')
            || lastpostid == undefined
            || votes == undefined
            || hotindex == undefined) {

            res.status(400);
            res.json({ error: 'undefinedQuery' });
            return;
        }
        // if there exist a number id in our db

        // for this phase we will be sending listing by new
        if (listingType == 'new') {
            // awaiting for the retriving the new posts and checking  the result
            let newPosts = null;
            newPosts = await this.listingPostsbyNew(owner, lastpostid);
            // if there is no error and it is not null send it 
            if (newPosts != null && newPosts.length != 0) {
                res.status(200);
                res.json({ posts: newPosts });
                return;
            }
            else {
                res.status(404);
                res.send({ "error": "postsNotFound" });
                return;
            }

        }
        else if (listingType == 'top') {
            // awaiting for the retriving the new posts and checking  the result
            let topPosts = null;
            topPosts = await this.listingPostsbyTop(owner, lastpostid, votes);
            // if there is no error and it is not null send it 
            if (topPosts != null && topPosts.length != 0) {
                res.status(200);
                res.json({ posts: topPosts });
                return;
            }
            else {
                res.status(404);
                res.send({ "error": "postsNotFound" });
                return;
            }
        }
        else if (listingType == 'hot') {
            let hotPosts = null;
            // awaiting for the retriving the new posts and checking  the result
            hotPosts = await this.listingPostsbyHot(owner, lastpostid, hotindex);
            // if there is no error and it is not null send it 
            if (hotPosts != null && hotPosts.length != 0) {
                res.status(200);
                res.json({ posts: hotPosts });
                return;
            }
            else {
                res.status(404);
                res.send({ "error": "postsNotFound" });
                return;
            }
        }
        else {
            res.status(500);
            res.send({ "error": "internalServerError" });
            return;
        }

    }





}

module.exports = new listings();
