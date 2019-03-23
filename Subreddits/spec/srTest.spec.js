
const request = require("request");
const mongoose = require('mongoose');
const srMongo = require('../subredditsSchema');
const srMongoPost = srMongo.SubredditPostSchema;
const jasmine = require('jasmine');


describe('Server', function () {
    var server;
    beforeAll(function () {
        server = require('../../index');
    });
    afterAll(function () {
        server.close();
    });

    // testing message composing with no error


    describe('Creating a subreddit', function () {
        let sr = new srMongo({name: "Technology", username: "Ahmed", rules: "Ruins"});
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://127.0.0.1:4000/sr/create',
                { json: true, body: sr }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });

        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });

        it('Database Test', function () {
            srMongo.findOne(sr,
                function (err, result) { expect(result).not.toBe(null); });
        });
    });


    describe('Editing a subreddit', function () {
        let sr = ({newRules: "Jacobian", newName: "Kidnap"})
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://127.0.0.1:4000/sr/:srName/edit',
                { json: true, body: sr }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });
        it('Update subreddit', function () {
            srMongo.findOne({name: "Kidnap"},
                function (err, result) { expect(result).not.toBe(null);
                 });
            });
        });

    describe('Creating a post in a sr', function () {
        let sr = {username: "Hamada", title: "Mayday", threadBody: "Cry more"};
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://127.0.0.1:4000/sr/:srName/thread',
                { json: true, body: sr }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });
        it('Creating a post inside sr', function () {
            srMongoPost.findOne({title: "Mayday"},
            function (err, result) { expect(result).not.toBe(null);
            });
        });
    });  

    // describe('Checking sr info', function () {
    //     let sr = {username: "Hamada"};
    //     let data = {};
    //     beforeAll(function (done) {  // mocking the post request with message test
    //         request.post('http://127.0.0.1:4000/sr/:srName/meta',
    //             { json: true, body: sr }, function (error, response, body) {
    //                 data.status = response.statusCode;
    //                 data.body = body;
    //                 done();
    //             });
    //     });
    //     //  status 200 for ok
    //     it('Status 200', function () {
    //         expect(data.status).toBe(200);
    //         expect(data.body).toBe('OK');
    //     });
    //     it('Check info', function () {
    //         srMongoPost.findOne({title: "Mayday"},
    //         function (err, result) { expect(result).not.toBe(null);
    //         });
    //     });
    // });  
});

