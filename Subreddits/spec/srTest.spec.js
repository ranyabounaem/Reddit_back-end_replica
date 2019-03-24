
// const request = require("request");
// const mongoose = require('mongoose');
// const srMongo = require('../subredditsSchema');
// const jasmine = require('jasmine');
// describe('Server', function () {
//     var server;
//     beforeAll(function () {
//         server = require('../../index');
//     });
//     afterAll(function () {
//         server.close();
//     });

//     // testing message composing with no error
//     describe('Creating a subreddit', function () {
//         let sr = new srMongo({name: "Technology", username: "Ahmed", rules: "No racism"});
//         let data = {};
//         beforeAll(function (done) {  // mocking the post request with message test
//             request.post('http://127.0.0.1:4000/sr/create',
//                 { json: true, body: sr }, function (error, response, body) {
//                     data.status = response.statusCode;
//                     data.body = body;
//                     done();
//                 });
//         });
//         //  status 200 for ok
//         it('Status 200', function () {
//             expect(data.status).toBe(200);
//             expect(data.body).toBe('OK');
//         });
//         it('Database Test', function () {
//             srMongo.findOne(sr,
//                 function (err, result) { expect(result).not.toBe(null); });
//         });
//     });
// });

