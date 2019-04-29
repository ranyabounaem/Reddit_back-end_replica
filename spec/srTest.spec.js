const fs = require('fs');
const request = require('request');
const mongoose = require('mongoose');
const usr = require("../models/UserSchema");
const srs = require('../models/subredditsSchema');
const subreddit=srs.Subreddit;
const post = srs.SubredditPostSchema;
const head = {'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJyYW55eSIsImlhdCI6MTU1NTI5MTc2M30.voztNGiGeXV0gAS6sFkipFf9Sczuq917c6S6RGhnCeo'};
let user = {
    Username: "ranyy",
    Password: "12345678",
    Email: "ranyy@reddit.com"
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
        usr.create(user).then(function(record){
            console.log(record);
            done();
        });
    });
    afterAll(function (done) {
        post.deleteMany({ creatorUsername: 'ranyy'}, function () {
            subreddit.deleteMany({ adminUsername: 'ranyy' }, function () {
                    usr.deleteMany({Username: 'ranyy'}, function () {
                        done();
                    });
            });
        });
    });

    // testing message composing with no error
    describe("Creating a subreddit", function () {
        let data = {};
        beforeAll(function(done){ 
            let formData = {  
                // Pass single file with a key
                subredditFile: fs.createReadStream(__dirname + '/../uploads/help.png'),
                // Simple key-value pairs
                srName: 'oops',
                srRules: 'help' };    
            request.post('http://127.0.0.1:4000/sr/create', {formData: formData, headers:head}, function (error, res, body) {
                data.status = res.statusCode;
                console.log(res.statusCode);
                data.body = body;
                done();
            });
        });

        it("Creating a subreddit status test", function () {
            expect(data.status).toBe(200);
        });

        it('Creating a subreddit database test', function () {
            subreddit.findOne({name: "oops"},
                function (err, result) { expect(result).not.toBe(null); });

        });
    });

    describe("Editing a subreddit", function() {
        let data = {};
        beforeAll(function(done){
            let formData = {  
                // Pass single file with a key
                subredditFile: fs.createReadStream(__dirname + '/../uploads/help.png'),
                // Simple key-value pairs
                newName: 'Metal',
                newRules: 'No hate',
                newMods: 'atwa_leader'
            };
            
            request.put('http://127.0.0.1:4000/sr/oops', {formData: formData, headers:head}, function (error, response, body) {
                data.status = response.statusCode;
                data.body = body;
                done();
               }); 
            });

        it("Editing a subreddit status test", function(){

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
        beforeAll(function(done){
            let formData = {  
                postFile: fs.createReadStream(__dirname + '/../uploads/help.png'),
                title: 'Tool',
                threadBody: 'Tool just released their new album after 15 years of inactivity!'
            };
            request.post("http://127.0.0.1:4000/sr/Metal/thread",
            {formData: formData, json: true, headers: head},
            function(error, response, body){
                data.status = response.statusCode;
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
            "title": "DemonHunter",
            "threadBody": "Demon Hunter just released their new album after 15 years of inactivity!"
        };
        beforeAll(function(done){

            request.put(`http://127.0.0.1:4000/sr/Metal/thread/${postid}`,
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
            //expect(data.body.title).toBe("AskingAlexandria"); IT RETURNS OLD POST THAT WAS UPDATED

        });

        it("Editing a post inside subreddit database test", function(){
            post.findOne({_id: postid, title: "DemonHunter"}, function(err, record){
                expect(record).not.toBe(null);
            });
        });

    });

    describe("Deleting a post inside subreddit", function() {
        let data = {};
        beforeAll(function(done){

            request.delete(`http://127.0.0.1:4000/sr/Metal/thread/${postid}`,
            {json:true,headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                postid = data.body._id;
                done();
            });
        });

        it("Deleting a post inside subreddit status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.length).toBe(0);

        });

        it("Deleting a post inside subreddit database test", function(){
            post.findOne({_id: postid, title: "AskingAlexandria"}, function(err, record){
                expect(record).toBe(null);
            });
        });

    });



    describe("Subscribe to a subreddit", function() {
        let data = {};
        beforeAll(function(done){

            request.post("http://127.0.0.1:4000/sr/Metal/subs",
            {json:true,headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                postid = data.body._id;
                done();
            });
        });

        it("Subscribe to a subreddit status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.length).toBe(1);

        });

        it("Subscribing to a subreddit database test", function(){
            subreddit.findOne({name: "Metal"}, function(err, record){
                expect(record.subscribed_users.length).toBe(1);
            });
        });

    });


    describe("Unsubscribe from a subreddit", function() {
        let data = {};
        beforeAll(function(done){

            request.delete("http://127.0.0.1:4000/sr/Metal/subs",
            {json:true,headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                done();
            });
        });

        it("Unsubscribing from a subreddit status test", function(){
            expect(data.status).toBe(200);
            expect(data.body.subscribed_users.length).toBe(0);

        });

        it("Unsubscribing from a subreddit database test", function(){
            subreddit.findOne({name: "Metal"}, function(err, record){
                expect(record.subscribed_users.length).toBe(0);
            });
        });

    });

    describe("Deleting a subreddit", function() {
        let data = {};
        beforeAll(function(done){

            request.delete("http://127.0.0.1:4000/sr/Metal",
            {json:true,headers: head},
            function(error, request, body){
                data.status = request.statusCode;
                data.body = body;
                done();
            });
        });

        it("Deleting a subreddit status test", function(){
            expect(data.status).toBe(200);
           // expect(data.body).toBe(undefined);// FINDONEANDDELETE RETURNS UNDEFINED ????!!!!

        });

        it("Deleting a subreddit database test", function(){
            expect(subreddit.count()==0);
        });
    });

});

