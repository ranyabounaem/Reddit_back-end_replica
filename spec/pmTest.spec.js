
const request = require('request');
const mongoose = require('mongoose');
const PMmongo = require('../models/PMmongo');
const privateMessage = PMmongo.pm;
const users = require('../models/UserSchema');
const blockList = PMmongo.messageBlockList;
const jasmine = require('jasmine');
// testing compose/block/unblock/retrieveblock
describe('Server', function () {
    let server3;
    let url = 'http://localhost:4000/';

    // marwannahmed
    const head1 = { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJtYXJ3YW5haG1lZCIsImlhdCI6MTU1NTEwNzc0OX0.eU6GjTmYRJHENrSR8kUwkwKnd6FRsfd0xsY4ulpbauA' };
    // kefahmohamed
    const head2 = { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJrZWZhaG1vaGFtZWQiLCJpYXQiOjE1NTUxMDc3NzR9.e5j3skEBXSC8zeFdgNiGT9xKgaOrjwBrJS6ts056LPA' };
    //ahmedmohamedadel
    const head3 = { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJhaG1lZG1vaGFtZWRhZGVsIiwiaWF0IjoxNTU1MTA3ODA0fQ.MOB1EbW7UInwoE4OiK7lstjGk1J-q1w-g7C_iLz2YZE' };
    beforeAll(function () {
        server3 = require('../index.js');
        // cause there is no middleware yet i need to add users to check for messages
        users.create({ Username: "marwanahmed", Password: "12345678", Email: "mostaf123123a1@m.com" });
        users.create({ Username: "kefahmohamed", Password: "12345678", Email: "mostaf15rf1a2@m.com" });
        users.create({ Username: "ahmedmohamedadel", Password: "12345678", Email: "most123123123afa3@m.com" });

    });

    afterAll(function (done) {

        users.deleteMany({ Username: { $in: ['marwanahmed', 'kefahmohamed', 'ahmedmohamedadel'] } }, function () {
            done();

        });

    });
    // start of composing/retrieveal message
    describe('receiverNotFoundError', function () {
        let messageTest1 = {
            sender: 'kefah', receiverUsername: "usernotindb", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 404 for notfound
        it('Status 404', function () {
            expect(data.status).toBe(404);
            expect(data.body.error).toBe('receiverNotFound');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });

    // testing message composing with no error
    describe('Message Compose no error', function () {
        let messageTest1 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest1 }, function (error, response, body) {
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
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).not.toBe(null); });
        });
        afterAll(function (done) {
            privateMessage.findOneAndDelete(messageTest1, function () {
                done();


            });


        });
    });

    describe('Message Compose no error', function () {
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: "marwanahmed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
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
            privateMessage.findOne(messageTest1,
                function (err, result) {
                    expect(result).not.toBe(null);
                });
        });
        afterAll(function (done) {
            privateMessage.findOneAndDelete(messageTest1, function () {


                done();
            });


        });
    });
    describe('Message Compose receiver username undefined param', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: undefined, subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 400 for badrequest
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose subject undefined param', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: 'marwanahmed', subject: undefined
            , messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 400 for badrequest
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });

    describe('Message Compose  param type error', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: 2, subject: 'this is testing paramtype error',
            messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 400 for badrequest
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose param empty error', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: '', subject: 'VIP', messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 403 f
        it('Status 403', function () {
            expect(data.status).toBe(403);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose no error', function () {
        let messageTest1 = {
            sender: 'ahmedmohamedadel', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose',
                { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
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
            privateMessage.findOne(messageTest1,
                function (err, result) {
                    expect(result).not.toBe(null);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest1, function () {


                done();
            });

        })
    });

    describe('Message Compose blocked from sending', function () {
        let messageTest1 = {
            sender: 'ahmedmohamedadel', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest2 = {
            blocker: 'ahmedmohamedadel',
            blocked: 'kefahmohamed',
            block: true
        };
        let messageTest3 = {
            blocker: 'ahmedmohamedadel',
            blocked: 'kefahmohamed',
            block: false
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head3, body: messageTest2 }, function (error) {
                    request.post(url + 'me/pm/compose',
                        { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                            data.status = response.statusCode;
                            data.body = body;
                            done();
                        });
                });


        });
        //  status 403 for forbidden
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('blockedFromSending');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
        it('delete from  blocklist', function () {
            blockList.findOneAndDelete({
                blocker: 'ahmedmohamedadel',
                blocked: 'kefahmohamed'
            }, function (err, result) {
                expect(result).not.toBe(null);

            });
        });

    });
    describe('Message Compose blocked from sending vice', function () {
        let messageTest1 = {
            sender: 'ahmedmohamedadel', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest2 = {
            blocker: 'kefahmohamed',
            blocked: 'ahmedmohamedadel', block: true

        };
        let messageTest3 = {
            blocker: 'kefahmohamed',
            blocked: 'ahmedmohamedadel', block: false

        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest2 }, function (error) {
                    request.post(url + 'me/pm/compose',
                        { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                            data.status = response.statusCode;
                            data.body = body;
                            done();
                        });
                });


        });
        //  status 403 
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('blockedFromSending');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });

        it('delete from  blocklist', function () {
            blockList.findOneAndDelete({
                blocker: 'kefahmohamed',
                blocked: 'ahmedmohamedadel'
            }, function (err, result) {
                expect(result).not.toBe(null);

            });
        });

    });

    describe('Message Compose overlengthed subject', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'kefahmohamed', receiverUsername: 'ahmedmohamedadel',
            subject: '#'.repeat(60),
            messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/compose'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 403 for forbidden
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('overLengthedSubject');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Testing Message Retrieval Sent not inbox', function () {
        let data = {};
        let owner = 'ahmedmohamedadel';
        let testBody = {
            mine: false
        };
        let messageTest1 = {
            sender: 'ahmedmohamedadel', receiverUsername: 'kefahmohamed',
            subject: 'sdsdsd',
            messageBody: 'i love you'
        };
        beforeAll(function (done) {

            request.post(url + 'me/pm/compose',
                { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });

        beforeEach(function (done) {

            request.post(url + 'me/pm',
                { json: true, headers: head3, body: testBody }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });

            // end of before all
        });

        it('status 200', function () {

            expect(data.status).toBe(200);

        });

        it('body', function () {
            privateMessage.findOne({ sender: owner }, function (err, result) {
                expect(result).not.toBe(null);

            });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest1, function () {

                done();
            });
        });

    });
    describe('Testing Message Retrieval inbox not sent', function () {
        let data = {};
        let owner = 'kefahmohamed';
        let testBody = {
            mine: true
        };
        let messageTest1 = {
            sender: 'ahmedmohamedadel', receiverUsername: 'kefahmohamed',
            subject: 'sdsdsd',
            messageBody: 'i love you'
        };
        beforeAll(function (done) {

            request.post(url + 'me/pm/compose',
                { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });

            // end of before all
        });
        beforeEach(function (done) {

            request.post(url + 'me/pm',
                { json: true, headers: head2, body: testBody }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });

            // end of before all
        });

        it('status 200', function () {

            expect(data.status).toBe(200);

        });

        it('body', function () {

            privateMessage.findOne({ receiverUsername: owner }, function (err, result) {
                expect(result).not.toBe(null);

            });

        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest1, function () {
                done();
            });
        });
    });

    // End of compsing message Tests

    // start of Blocking/unblocking/retrieveblocking Tests
    describe('Blocking Someone from PM in the db', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'lala',
            blocker: 'kefahmohamed',
            block: true
        };

        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 404 for notfound
        it('Status 404', function () {
            expect(data.status).toBe(404);
            expect(data.body.error).toBe('toBeBlockedNotFound');
        });
        it('Database Test', function () {
            blockList.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });

    });
    describe('Blocking Someone from PM empty', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: '',
            blocker: 'kefahmohamed',
            block: true
        };
        let messageTestFind = {
            blocked: '',
            blocker: 'ahmed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 400 for badrequest
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            blockList.findOne(messageTestFind,
                function (err, result) { expect(result).toBe(null); });
        });

    });
    describe('Blocking Someone from PM param type error', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 2,
            blocker: 'kefahmohamed',
            block: true
        };

        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        it('Database Test', function () {
            blockList.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Blocking Someone from PM self block alert', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'kefahmohamed',
            blocker: 'kefahmohamed', block: true
        };
        let messageTestFind = {
            blocked: 'kefahmohamed',
            blocker: 'kefahmohamed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 403 for forbidden
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('selfBlockAlertError');
        });


    });
    describe('Blocking Someone kefahmohamed block marwanahmed', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
            , block: true
        };
        let messageTest2 = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
            , block: false
        };
        let messageTestFind = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
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
            blockList.findOneAndDelete(messageTestFind,
                function (err, result) {
                    expect(result).not.toBe(null);
                });


        });

        afterAll(function (done) {
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest2 }, function () {

                    done();
                });
        });

    });
    describe('two people blocking each one blocking another Someone kefahmohamed block marwanahmed', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
            , block: true
        };
        let messageTest2 = {
            blocked: 'kefahmohamed',
            blocker: 'marwanahmed'
            , block: true
        };
        let messageTest3 = {
            blocked: 'kefahmohamed',
            blocker: 'marwanahmed'
            , block: false
        };
        let messageTest4 = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
            , block: false
        };
        let messageTestFind = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
        };
        let messageTestFind2 = {
            blocker: 'marwanahmed',
            blocked: 'kefahmohamed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    request.post(url + 'me/pm/block'
                        , { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {
                            done();

                        });
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });
        it('Database Test', function () {
            blockList.findOneAndDelete(messageTestFind,
                function (err, result) {
                    expect(result).not.toBe(null);
                });
        });
        it('Database Test2', function () {
            blockList.findOneAndDelete(messageTestFind2,
                function (err, result) {
                    expect(result).not.toBe(null);
                });
        });

        afterAll(function (done) {
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest2 }, function () {

                    done();
                });
        });

    });
    describe('unblocking Someone kefahmohamed unblock marwanahmed after blocking him', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
            , block: true
        };
        let messageTestFind = {
            blocked: 'marwanahmed',
            blocker: 'kefahmohamed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;

                    request.post(url + 'me/pm/block'
                        , {
                            json: true, body: {
                                blocked: 'marwanahmed',
                                blocker: 'kefahmohamed'
                                , block: false
                            }, headers: head2
                        }, function (error, response, body) {
                            data.status = response.statusCode;
                            data.body = body;
                            done();
                        });

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });

        it('unblock test', function () {
            expect(data.status).toBe(200);
            expect(data.body).toBe('OK');
        });
        it('database test', function () {
            blockList.findOne(messageTestFind,
                function (err, result) {
                    expect(result).toBe(null);
                });


        });



    });
    describe('unblocking Someone not in  block list', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'ahmedmohamedadel',
            blocker: 'kefahmohamed'
            , block: false
        };
        let messageTestFind = {
            blocked: 'ahmedmohamedadel',
            blocker: 'kefahmohamed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 403 for forbidden
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('canNotBUnblockNonBlockedUser');
        });
        it('Database Test', function () {
            blockList.findOne(messageTestFind,
                function (err, result) {
                    expect(result).toBe(null);
                });


        });
    });
    describe('retriving  block list', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'kefahmohamed',
            blocker: 'marwanahmed'
            , block: true
        };
        let messageTest2 = {
            blocked: 'ahmedmohamedadel',
            blocker: 'marwanahmed'
            , block: true
        };
        let messageTest3 = {
            blocked: 'kefahmohamed',
            blocker: 'marwanahmed'
            , block: false
        };
        let messageTest4 = {
            blocked: 'ahmedmohamedadel',
            blocker: 'marwanahmed'
            , block: false
        };
        let messageTestFind = {
            blocker: 'marwanahmed',
            blocked: 'ahmedmohamedadel'
        };
        let messageTestFind2 = {
            blocker: 'marwanahmed',
            blocked: 'kefahmohamed'
        };
        let data = {};
        // makking a user block two others and then retriving them
        beforeAll(function (done) {  // mocking the post request with message test
            request.post(url + 'me/pm/block'
                , { json: true, headers: head1, body: messageTest1 }, function (err) {
                    request.post(url + 'me/pm/block'
                        , { json: true, body: messageTest2, headers: head1 }, function (err) {

                            done();
                        });


                });


        });


        beforeEach(function (done) {
            request.get(url + 'me/pm/blocklist', { headers: head1 }
                , function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });



        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            blockList.findOneAndDelete(messageTestFind,
                function (err, result) {
                    expect(result).not.toBe(null);
                });

        });
        it('Database Test', function () {
            blockList.findOneAndDelete(messageTestFind2,
                function (err, result) { expect(result).not.toBe(null); });

        });

        afterAll(function (done) {
            request.post(url + 'me/pm/block'
                , { json: true, headers: head1, body: messageTest3 }, function (err) {
                    request.post(url + 'me/pm/block'
                        , { json: true, body: messageTest4, headers: head1 }, function (err) {

                            done();
                        });


                });


        });

    });
    // end of blocking unit testing 

    // start of markread unit testing
    describe('mark read   error', function () {
        let messageTest1 = {
            messageId: "5cb0f02ff17cbd087e87c3d0", isReadRequest: true

        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.put(url + 'me/pm/markread',
                { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 404 for message id not in found
        it('Status 404', function () {
            expect(data.status).toBe(404);
            expect(data.body.error).toBe('messageNotFound');
        });
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).toBe(null);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest1, function () {
                done();
            });

        })
    });
    describe('mark read  error forbidden marking', function () {
        let messageTest1;
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {


                    privateMessage.findOne(messageTest2, function (err, result) {
                        messageTest1 = {
                            messageId: result._id, isReadRequest: true

                        };
                        request.put(url + 'me/pm/markread',
                            { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                                data.status = response.statusCode;
                                data.body = body;
                                done();
                            });

                    });



                });

        });
        //  status 403 for mforbidden
        it('Status 403', function () {
            expect(data.status).toBe(403);
        });
        // the message is in the db but can not be turned illegal marking
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).not.toBe(null);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {
                done();
            });

        })
    });

    describe('mark read  no error  ', function () {
        let messageTest1;
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {


                    privateMessage.findOne(messageTest2, function (err, result) {
                        messageTest1 = {
                            messageId: result._id, isReadRequest: true

                        };
                        request.put(url + 'me/pm/markread',
                            { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                                data.status = response.statusCode;
                                data.body = body;
                                done();
                            });

                    });



                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.isRead).toBe(true);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {
                done();
            });

        })
    });
    // end mark read uni testing



    // start for mark read all unit testing
    describe('mark read all  no  error', function () {
        let messageTest1 = { isReadRequest: true };
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest3 = {
            sender: 'ahmedmohamedadel', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {
                    request.post(url + 'me/pm/compose',
                        { json: true, headers: head3, body: messageTest3 }, function (error, response, body) {

                            request.post(url + 'me/pm/markreadall',
                                { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                                    data.status = response.statusCode;
                                    data.body = body;
                                    done();
                                });

                        });

                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest2,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.isRead).toBe(true);
                });
            privateMessage.findOne(messageTest3,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.isRead).toBe(true);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {

                privateMessage.findOneAndDelete(messageTest3, function () {
                    done();

                });
            });

        })
    });
    describe('mark read all error from the sender side ', function () {
        let messageTest1 = { isReadRequest: true };
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest3 = {
            sender: 'ahmedmohamedadel', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {
                    request.post(url + 'me/pm/compose',
                        { json: true, headers: head3, body: messageTest3 }, function (error, response, body) {

                            request.post(url + 'me/pm/markreadall',
                                { json: true, headers: head3, body: messageTest1 }, function (error, response, body) {
                                    data.status = response.statusCode;
                                    data.body = body;
                                    done();
                                });

                        });

                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest2,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.isRead).toBe(false);
                });
            privateMessage.findOne(messageTest3,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.isRead).toBe(false);
                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {

                privateMessage.findOneAndDelete(messageTest3, function () {
                    done();

                });
            });

        })
    });
    // end for mark read all unit testing 

    // start for delete unit testing
    describe('delete receiver side  no error  ', function () {
        let messageTest1;
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {


                    privateMessage.findOne(messageTest2, function (err, result) {
                        messageTest1 = {
                            messageId: result._id, isReadRequest: true

                        };
                        request.delete(url + 'me/pm/delete?messageId='+messageTest1.messageId,
                            { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {
                                data.status = response.statusCode;
                                data.body = body;
                                done();
                            });

                    });



                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.receiverDelete).toBe(true);
                    expect(result.senderDelete).toBe(false);

                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {
                done();
            });

        })
    });
    describe('delete sender side  no error  ', function () {
        let messageTest1;
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {


                    privateMessage.findOne(messageTest2, function (err, result) {
                        messageTest1 = {
                            messageId: result._id, isReadRequest: true

                        };
                        request.delete(url + 'me/pm/delete?messageId='+messageTest1.messageId,
                            { json: true, headers: head1, body: messageTest1 }, function (error, response, body) {
                                data.status = response.statusCode;
                                data.body = body;
                                done();
                            });

                    });



                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).not.toBe(null);
                    expect(result.receiverDelete).toBe(false);
                    expect(result.senderDelete).toBe(true);

                });
        });
        afterAll(function (done) {

            privateMessage.findOneAndDelete(messageTest2, function () {
                done();
            });

        })
    });
    describe('delete from both sides delete it from db no error  ', function () {
        let messageTest1;
        let messageTest2 = {
            sender: 'marwanahmed', receiverUsername: "kefahmohamed", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

            request.post(url + 'me/pm/compose',
                { json: true, headers: head1, body: messageTest2 }, function (error, response, body) {


                    privateMessage.findOne(messageTest2, function (err, result) {
                        messageTest1 = {
                            messageId: result._id, isReadRequest: true

                        };
                        request.delete(url + 'me/pm/delete?messageId='+messageTest1.messageId,
                            { json: true, headers: head1, body: messageTest1 }, function (error, response, body) {
                                request.delete(url + 'me/pm/delete?messageId='+messageTest1.messageId,
                                    { json: true, headers: head2, body: messageTest1 }, function (error, response, body) {


                                        data.status = response.statusCode;
                                        data.body = body;
                                        done();
                                    });
                            });

                    });



                });

        });
        //  status 200 for status ok
        it('Status 200', function () {
            expect(data.status).toBe(200);
        });
        // the message have been deleted cause both sides deleted it
        it('Database Test', function () {
            privateMessage.findById(messageTest1.messageId,
                function (err, result) {
                    expect(result).toBe(null);

                });
        });
    });
    describe('delete message id error  ', function () {
        let messageTest1={}
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test

        
                    messageTest1 = {
                            messageId: "1nejjne2e", isReadRequest: true

                    };
                        request.delete(url + 'me/pm/delete?messageId='+messageTest1.messageId,
                            { json: true, headers: head1, body: messageTest1 }, function (error, response, body) {
                                data.status = response.statusCode;
                                data.body = body;
                                done();
                            });



        });
        //  status 404 for error cause message notfound
        it('Status 404', function () {
            expect(data.status).toBe(404);
            expect(data.body.error).toBe('messageNotFound');
        });

    });
    // end for delete unit testing
});

