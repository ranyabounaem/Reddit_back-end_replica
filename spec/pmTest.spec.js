
const request = require('request');
const mongoose = require('mongoose');
const PMmongo = require('../models/PMmongo');
const privateMessage = PMmongo.pm;
const blockList = PMmongo.messageBlockList;
const jasmine = require('jasmine');
describe('Server', function () {
    var server;
    beforeAll(function () {
        server = require('../index');
    });
    afterAll(function () {
        server.close();
    });

    // testing message composing with no error
    describe('Message Compose no error', function () {
        let messageTest1 = {
            sender: 'marwan', receiverUsername: "kefah", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
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
    });

    describe('Message Compose no error', function () {
        let messageTest1 = {
            sender: 'ahmed', receiverUsername: "hamada", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
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
    });
    describe('Message Compose receiver username undefined param', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'ahmed', receiverUsername: undefined, subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
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
            sender: 'kefah', receiverUsername: 'marawan', subject: undefined
            , messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose messagebody undefined param', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: undefined, receiverUsername: 'marawan', subject: 'VIP', messageBody: undefined
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1
                , function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose  param type error', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'paramtype', receiverUsername: 2, subject: 'this is testing paramtype error',
            messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
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
            sender: 'ahmed', receiverUsername: '', subject: 'VIP', messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
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
            sender: 'marwan', receiverUsername: "kefah", subject: "VIP", messageBody: "i love you"
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                { json: true, body: messageTest1 }, function (error, response, body) {
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
    });

    describe('Message Compose blocked from sending', function () {
        let messageTest1 = {
            sender: 'ahmedmohamed', receiverUsername: "saidahmed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest2 = {
            blocker: 'ahmedmohamed',
            blocked: 'saidahmed',
            block: true
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest2.blocker + '/pm/block'
                , { json: true, body: messageTest2 }, function (error) {
                    request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                        { json: true, body: messageTest1 }, function (error, response, body) {
                            data.status = response.statusCode;
                            data.body = body;
                            done();
                        });
                });


        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('blockedFromSending');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
        it('delete from  blocklist', function () {
            blockList.findOneAndDelete({
                blocker: 'ahmedmohamed',
                blocked: 'saidahmed'
            }, function (err, result) {
                expect(result).not.toBe(null);

            });
        });
    });
    describe('Message Compose blocked from sending vice', function () {
        let messageTest1 = {
            sender: 'saidahmed', receiverUsername: "ahmedmohamed", subject: "VIP", messageBody: "i love you"
        };
        let messageTest2 = {
            blocker: 'ahmedmohamed',
            blocked: 'saidahmed', block: true

        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest2.blocker + '/pm/block'
                , { json: true, body: messageTest2 }, function (error) {
                    request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose',
                        { json: true, body: messageTest1 }, function (error, response, body) {
                            data.status = response.statusCode;
                            data.body = body;
                            done();
                        });
                });


        });
        //  status 200 for ok
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
                blocker: 'ahmedmohamed',
                blocked: 'saidahmed'
            }, function (err, result) {
                expect(result).not.toBe(null);

            });
        });
    });
    describe('Message Compose undefined param', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: undefined, receiverUsername: 'marawan', subject: 'VIP', messageBody: undefined
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(400);
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Message Compose overlengthed subject', function () {
        // receiver username is undefined
        let messageTest1 = {
            sender: 'ahmed', receiverUsername: 'marawan',
            subject: '#'.repeat(60),
            messageBody: 'i love you'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.sender + '/pm/compose'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 403', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('overLengthedSubject');
        });
        it('Database Test', function () {
            privateMessage.findOne(messageTest1,
                function (err, result) { expect(result).toBe(null); });
        });
    });
    describe('Blocking Someone from PM undefined', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: undefined,
            blocker: 'marawan',
            block: true
        };

        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 400', function () {
            expect(data.status).toBe(400);
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
            blocker: 'ahmed',
            block: true
        };
        let messageTestFind = {
            blocked: '',
            blocker: 'ahmed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
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
            blocker: 'ahmed',
            block: true
        };

        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
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
            blocked: 'ahmed',
            blocker: 'ahmed', block: true
        };
        let messageTestFind = {
            blocked: 'ahmed',
            blocker: 'ahmed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('selfBlockAlertError');
        });


    });
    describe('Blocking Someone ahmed block mohamed', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'mohamed',
            blocker: 'ahmed'
            , block: true
        };
        let messageTestFind = {
            blocked: 'mohamed',
            blocker: 'ahmed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
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



    });
    describe('Testing Message Retrieval Sent not inbox', function () {
        let data = {};
        let owner = 'marwan';
        let testBody = {
            mine: false
        };
        beforeAll(function (done) {

            request.get('http://localhost:4000/' + owner + '/pm',
                { json: true, body: testBody }, function (error, response, body) {
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

    });
    describe('Testing Message Retrieval inbox not sent', function () {
        let data = {};
        let owner = 'kefah';
        let testBody = {
            mine: true
        };
        beforeAll(function (done) {

            request.get('http://localhost:4000/' + owner + '/pm',
                { json: true, body: testBody }, function (error, response, body) {
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

    });


    describe('unblocking Someone ahmed unblock mohamed after blocking him', function () {
        // receiver username is undefined
        let messageTest1 = {
            blocked: 'mohamed',
            blocker: 'ahmed'
            , block: true
        };
        let messageTestFind = {
            blocked: 'mohamed',
            blocker: 'ahmed'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;

                    request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                        , {
                            json: true, body: {
                                blocked: 'mohamed',
                                blocker: 'ahmed'
                                , block: false
                            }
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
            blocked: 'sskdnsdjnsdnjds',
            blocker: 'jnsdjnsdjnsdjds'
            , block: false
        };
        let messageTestFind = {
            blocked: 'sskdnsdjnsdnjds',
            blocker: 'jnsdjnsdjnsdjds'
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
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
            blocked: 'SOSOSOOSOSOSOSOS',
            blocker: 'LOLOLOLOLO'
            , block: true
        };
        let messageTest2 = {
            blocked: 'KOKOKOKOKOKOKO',
            blocker: 'LOLOLOLOLO'
            , block: true
        };
        let messageTestFind = {
            blocker: 'LOLOLOLOLO',
            blocked: 'KOKOKOKOKOKOKO'
        };
        let messageTestFind2 = {
            blocker: 'LOLOLOLOLO',
            blocked: 'SOSOSOOSOSOSOSOS'
        };
        let data = {};
        // makking a user block two others and then retriving them
        beforeAll(function (done) {  // mocking the post request with message test
            request.post('http://localhost:4000/' + messageTest1.blocker + '/pm/block'
                , { json: true, body: messageTest1 }, function (err) {
                    request.post('http://localhost:4000/' + messageTest2.blocker + '/pm/block'
                        , { json: true, body: messageTest2 }, function (err) {

                            done();
                        });


                });


        });


        beforeEach(function (done) {
            request.get('http://localhost:4000/' + messageTest1.blocker + '/pm/blocklist'
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
                function (err, result) {
                    expect(result).not.toBe(null);
                });
                
        });
       


    });




});

