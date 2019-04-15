
const request = require('request');
const mongoose = require('mongoose');
const usr = require("../models/UserSchema");
const srs = require('../models/subredditsSchema');
const subreddit=srs.Subreddit;
const post = srs.SubredditPostSchema;
var head = {"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJyYW55IiwiaWF0IjoxNTU1MjAwODIwfQ.JKtBhrHFhOJOcGGUSWUjYNkWHk8rGFoxZfI2Qcq8mn0"};
let user = {
    Username: "rany",
    Password: "12345678",
    Email: "rany@reddit.com"
};
// let sr = {
//     adminUsername: "rany",
//     name: "Metal",
//     rules: "No kids"
// };
// let pt = {
//     title: 'Demon Hunter',
//     creatorUsername: 'rany',
//     body: 'Demon hunter just released a new album. Check it out at demonhunter.com!',
//     postDate: Date(),
//     subredditName: 'Metal'
// }
let postid;
describe("Subreddits testing", function () {
    let server9;
    beforeAll((done) => {
        server9 = require('../index');
        usr.create(user).then(done());
    });
    afterAll(function (done) {
        post.deleteMany({ creatorUsername: 'rany'}, function () {
            subreddit.deleteMany({ adminUsername: 'rany' }, function () {
                    usr.deleteMany({Username: 'rany'}, function () {
                        done();
                    });
                });
            });
        });

    // testing message composing with no error
    describe("Creating a subreddit", function () {
        let sr = {
            "srName": "Technology",
            "srRules": ["No Racism"]
        };
        let data = {};
        beforeAll(function(done){  // mocking the post request with message test
            request.post("http://127.0.0.1:4000/sr/create",
                {json: true, body: sr, headers: head}, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });

        it("Creating a subreddit status test", function () {
            expect(data.status).toBe(200);
            //expect(data.body).to.include({
            //    "adminUsername": "rany",
            //    "name": "Technology",
            //    "rules": ["No racism"]});

        });

        it('Creating a subreddit database test', function () {
            subreddit.findOne({name: "Technology"},
                function (err, result) { expect(result).not.toBe(null); });

        });
    });

    describe("Editing a subreddit", function() {

        let newData = {

            "newName": "Metal",
            "newRules": "No hate"

        };

        let data = {};

        beforeAll(function(done){

            request.put("http://127.0.0.1:4000/sr/Technology",
            {json: true, body: newData, headers:head},
             function (error, response, body){
                data.status=response.statusCode;
                data.body=body;
                done();

            });
        });

        it("Editing a post status test", function(){

            expect(data.status).toBe(200);
            //expect(data.body).toContain(); findOneAndUpdate returns old version of subreddit.

        });

        it('Editing a subreddit database test', function () {

            subreddit.findOne({name: "Metal"},
                function (err, result) { expect(result).not.toBe(null); });

        });
    });

    describe("Getting subreddit info", function() {

        let data ={};

        beforeAll(function(done){
            request.get("http://127.0.0.1:4000/sr/Metal/meta",
            {json:true},
            function(error, response, body){
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });

        it("Getting subreddit info status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.name).toBe("Metal");
        });

    });

    describe("Creating a post inside subreddit", function() {
        let data = {};
        let pt = {
            "title": "Tool",
            "threadBody": "Tool just released their new album after 15 years of inactivity!"
        };
        beforeAll(function(done){

            request.post("http://127.0.0.1:4000/sr/Metal/thread",
            {json:true, body: pt, headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                postid = data.body._id;
                done();
            });
        });

        it("Creating a post inside subreddit status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.title).toBe("Tool");

        });

        it("Creating a post inside subreddit database test", function(){
            post.findOne({_id: postid}, function(err, record){
                expect(record).not.toBe(null);
            });
        });

    });

    describe("Editing a post inside subreddit", function() {
        let data = {};
        let pt = {
            "title": "Demon Hunter",
            "threadBody": "Demon Hunter just released their new album after 15 years of inactivity!"
        };
        beforeAll(function(done){

            request.put("http://127.0.0.1:4000/sr/Metal/thread",
            {json:true, body: pt, headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                postid = data.body._id;
                done();
            });
        });

        it("Editing a post inside subreddit status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.title).toBe("Demon Hunter");

        });

        it("Editing a post inside subreddit database test", function(){
            post.findOne({_id: postid, title: "Demon Hunter"}, function(err, record){
                expect(record).not.toBe(null);
            });
        });

    });

});

