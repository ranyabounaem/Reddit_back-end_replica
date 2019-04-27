
const request = require('request');
const mongoose = require('mongoose');
const subbredditsSchema = require('../models/subredditsSchema');
const subbreddit = subbredditsSchema.Subreddit;
const posts = subbredditsSchema.SubredditPostSchema;
const users = require('../models/UserSchema');
const jasmine = require('jasmine');
// testing compose/block/unblock/retrieveblock
describe('Server', function () {
    let server4;
    let url = 'http://localhost:4000/';
    // someone with no subscribers
    const head2 = { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJhaG1lZDIiLCJpYXQiOjE1NTUxMDcwMDJ9.yPRHl1mwX5-sF8WtiM8iewHnhpGnXfb2lIDHG5vu2t4' };

    // someone with  subscribers 
    const head = { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJhaG1lZG1vaGFtZWQyIiwiaWF0IjoxNTU1MTA3MDU0fQ.JD5dOWPC68QCzP-ivSWHwrgtxy-37f7qhsksvAelPjE' };

    let usersarr = [{ Username: "ahmed2", Password: "12345678", Email: "mostafaa@m.com", Subscriptions: [] }
        , { Username: "ahmedmohamed2", Password: "12345678", Email: "mostafas@m.com", Subscriptions: ["love", "food", "travel", "nature"] }

    ];
    let postsarr = [{
        title: 'what is love',
        body: 'love is more than anything in the world love is love ',
        postDate: '2019-03-27T19:55:05.000Z'
        , subredditName: 'love'
        , votes: 1

    }
        , {
        title: 'If you have a love in your life, who turns any moment',
        body: 'Share this love quote with your lover and see the smile on their face. It will be priceless.',
        postDate: Date()
        , subredditName: 'love'
        , votes: 12

    }
        , {
        tite: 'Whether you’re heading out into nature'
        , body: 'for a quick morning walk, or going camping in the middle of nowhere for an entire week, the goal is probably to put away your phone and spend some time unplugged.But it’s hard to stay offline entirely when the scenes are so perfectly Instagrammable.'
        , postDate: Date()
        , subredditName: 'nature'
        , votes: 42

    }
        ,
    {
        title: 'While we cant help you',
        body: 'with the weak Wi-Fi signal or that steep uphill hike, we can help you find the perfect nature quotes and captions for photos of every snap you take during your outdoor adventure.'
        , postDate: '2019-02-27T19:55:05.000Z'
        , subredditName: 'nature'
        , votes: 14

    }
        ,
    {
        title: 'Comment for a giveaway'
        , body: 'How many countries in the world ??'
        , postDate: '2019-01-27T19:55:05.000Z',
        subredditName: 'travel'
        , votes: 20

    }
        ,
    {
        title: 'Do you prefer vietnam or singapore',
        body: 'you can share below your ansers',
        postDate: '2019-05-27T19:55:05.000Z',
        subredditName: 'travel'
        , votes: 2

    }
        ,
    {
        title: 'Which destination are u heading next?',
        body: 'comment with your destinations',
        postDate: '2019-06-27T19:55:05.000Z'
        , subredditName: 'travel'
        , votes: 10

    }
        ,
    {
        title: 'which food is most appealing to your heart',
        body: 'comment for food lovers',
        postDate: '2019-07-27T19:55:05.000Z'
        , subredditName: 'food'
        , votes: 0

    }
        ,
    {
        title: 'Pizza with pineapply with or againsts??',
        body: 'for me i love it',
        postDate: '2019-08-27T19:55:05.000Z'
        , subredditName: 'food'
        , votes: 12
    }
        , {
        title: 'The heart wants what the heart wants.'
        , body: '(Cookies. It’s always cookies.'
        , postDate: '2019-09-27T19:55:05.000Z'
        , subredditName: 'food'
        , votes: 3

    }];

    let subbredditarr = [{
        name: 'love', rules: ["no males are allowed", "no females are allowed"],
        date: Date()
    },
    {
        name: 'travel', rules: ["no males are allowed", "no females are allowed"],
        date: Date()
    }
        ,
    {
        name: 'nature', rules: ["no males are allowed", "no females are allowed"],
        date: Date()

    },
    {
        name: 'food', rules: ["no males are allowed", "no females are allowed"],
        date: Date()
    }
    ];
    beforeAll(function (done) {
        server4 = require('../index.js');
        // cause there is no middleware yet i need to add users to check for messages
        posts.create(postsarr).then(
            // twice to generate 20 arr more than the limit for the tests
            posts.create(postsarr)).then(
                subbreddit.create(subbredditarr))
            .then(users.create(usersarr, function () {
                done();
            }));
        // for generation in db just

    });
    describe('Listing new with another _id reference param no error', function () {

        let data = {};
        let referenceid = {};
        beforeAll(function (done) {  // mocking the get requedt
            request.get(url + 'me/listing?type=new&_id=0&votes=0&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    // making the reference id as the second post
                    referenceid._id = body.posts[0]._id;
                    referenceid.postDate = body.posts[0].postDate;

                });
        });
        beforeEach(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=new&_id='+referenceid._id+'&votes=0&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });
        it('testing the first one is less than specified dates ', function () {
            expect(data.body.posts[0]._id).not.toEqual(referenceid._id);
            expect(data.body.posts[0].postDate).toBeLessThan(referenceid.postDate);

        });
        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].postDate).not.toBeLessThan(data.body.posts[index + 1].postDate);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].postDate).toBeGreaterThanOrEqual(data.body.posts[index + 1].postDate);
            }

        });


    });
    describe('Listing top with another vote param no error', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=top&_id=5cc4b1da09c9a441ae8152be&votes=10&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });
        it('testing the first one is less than specified votes ', function () {
            expect(data.body.posts[0].votes).toBeLessThanOrEqual(10);

        });
        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 3; index++) {
                expect(data.body.posts[index].votes).not.toBeLessThan(data.body.posts[index + 1].votes);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 3; index++) {
                expect(data.body.posts[index].votes).toBeGreaterThanOrEqual(data.body.posts[index + 1].votes);
            }

        });


    });
    describe('Listing Hot with another hotindex param no error', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=hot&_id=5cc4b1da09c9a441ae8152be&votes=0&hotindex=95858'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });
        it('testing the first one is less than specified hotindex ', function () {
            expect(data.body.posts[0].hotindex).toBeLessThan(95858);

        });
        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 3; index++) {
                expect(data.body.posts[index].hotindex).not.toBeLessThan(data.body.posts[index + 1].hotindex);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 3; index++) {
                expect(data.body.posts[index].hotindex).toBeGreaterThanOrEqual(data.body.posts[index + 1].hotindex);
            }

        });


    });
    describe('Listing New no error', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=new&_id=0&votes=0&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });

        it('Limit posts Test more than 15', function () {
            expect(data.body.posts[15]).toBe(undefined);
        });
        it('Limit posts Test ', function () {
            // assuming there is at least one post we added above
            expect(data.body.posts[0]).not.toBe(undefined);
        });

        it('Database Test for the 15 post', function () {
            for (let index = 0; index < 15; index++) {
                posts.find(data.body.posts[index],
                    function (err, result) { expect(result).not.toBe(null); });
            }
        });

        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].postDate).not.toBeLessThan(data.body.posts[index + 1].postDate);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].postDate).toBeGreaterThanOrEqual(data.body.posts[index + 1].postDate);
            }

        });


    });

    describe('Listing hot no error', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=hot&_id=0&votes=0&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });

        it('Limit posts Test more than 15', function () {
            expect(data.body.posts[15]).toBe(undefined);
        });
        it('Limit posts Test ', function () {
            // assuming there is at least one post we added above
            expect(data.body.posts[0]).not.toBe(undefined);
        });

        it('Database Test for the 15 post', function () {
            for (let index = 0; index < 15; index++) {
                posts.find(data.body.posts[index],
                    function (err, result) { expect(result).not.toBe(null); });
            }
        });

        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].hotindex).not.toBeLessThan(data.body.posts[index + 1].hotindex);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].hotindex).toBeGreaterThanOrEqual(data.body.posts[index + 1].hotindex);
            }

        });
    });
    describe('Listing top no error', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=top&_id=0&votes=0&hotindex=0'
                , { json: true, headers: head }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });
        //  status 200 for ok
        it('Status 200', function () {
            // there are some posts inserted beforeall
            expect(data.status).toBe(200);

        });

        it('Limit posts Test more than 15', function () {
            expect(data.body.posts[15]).toBe(undefined);
        });
        it('Limit posts Test ', function () {
            // assuming there is at least one post we added above
            expect(data.body.posts[0]).not.toBe(undefined);
        });

        it('Database Test for the 15 post', function () {
            for (let index = 0; index < 15; index++) {
                posts.find(data.body.posts[index],
                    function (err, result) { expect(result).not.toBe(null); });
            }
        });

        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].votes).not.toBeLessThan(data.body.posts[index + 1].votes);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body.posts[index].votes).toBeGreaterThanOrEqual(data.body.posts[index + 1].votes);
            }

        });


    });
    describe('Listing error undefined query', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request
            request.get(url + 'me/listing?type=bypdsdsd'
                , { json: true, headers: head2 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });

        //  status 400 for bad request
        it('Status 400', function () {
            expect(data.status).toBe(400);
        });

        it('undefined query error', function () {
            expect(data.body.error).toBe('undefinedQuery');
        });

    });

    describe('Listing error  postsnotfound', function () {

        let data = {};
        beforeAll(function (done) {  // mocking the get request

            request.get(url + 'me/listing?type=new&_id=0&votes=0&hotindex=0'
                , { json: true, headers: head2 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;

                    done();

                });


        });

        //  status 404 for not found
        it('Status 404', function () {
            expect(data.status).toBe(404);
        });

        it('posts not found  error', function () {
            expect(data.body.error).toBe('postsNotFound');
        });


    });
    afterAll(function (done) {

        users.deleteMany({ Username: { $in: ['ahmed2', 'ahmedmohamed2'] } }, function (err) {

        }).then(posts.deleteMany({ subredditName: { $in: ['love', 'nature', 'food', 'travel'] } }, function () {

            subbreddit.deleteMany({
                name: { $in: ['love', 'nature', 'food', 'travel'] }
            }, function () {

                done();

            });
        }));

    });
});

