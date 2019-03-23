
const request = require('request');
const mongoose = require('mongoose');
const subbredditsSchema = require('../models/subredditsSchema');
const subbreddit = subbredditsSchema.Subreddit;
const posts = subbredditsSchema.SubredditPostSchema;
const users = require('../models/UserSchema');
const jasmine = require('jasmine');
// testing compose/block/unblock/retrieveblock
describe('Server', function () {
    var server;
    beforeAll(function (done) {
        server = require('../index.js');
        // cause there is no middleware yet i need to add users to check for messages
        users.create({ Username: "marwan", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "kefah", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "ahmed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "ahmedmohamed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "marawan", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "hamada", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "lolo", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "koko", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "mohamed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "saidahmed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        users.create({ Username: "soso", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] });
        // for generation in db just
        let post1 = {
            title: 'what is love',
            body: 'love is more than anything in the world love is love ',
            postDate: Date()
            , subredditName: 'love'
        };
        let post2 = {
            title: 'If you have a love in your life, who turns any moment',
            body: 'Share this love quote with your lover and see the smile on their face. It will be priceless.',
            postDate: Date()
            , subredditName: 'love'

        };
        let post3 = {
            tite: 'Whether you’re heading out into nature'
            , body: 'for a quick morning walk, or going camping in the middle of nowhere for an entire week, the goal is probably to put away your phone and spend some time unplugged.But it’s hard to stay offline entirely when the scenes are so perfectly Instagrammable.'
            , postDate: Date()
            , subredditName: 'nature'

        };
        let post4 = {
            title: 'While we cant help you',
            body: 'with the weak Wi-Fi signal or that steep uphill hike, we can help you find the perfect nature quotes and captions for photos of every snap you take during your outdoor adventure.'
            , postDate: Date()
            , subredditName: 'nature'

        };

        let post5 = {
            title: 'Comment for a giveaway'
            , body: 'How many countries in the world ??'
            , postDate: Date(),
            subredditName: 'travel'

        };
        let post6 = {
            title: 'Do you prefer vietnam or singapore',
            body: 'you can share below your ansers',
            postDate: Date(),
            subredditName: 'travel'

        };
        let post7 = {
            title: 'Which destination are u heading next?',
            body: 'comment with your destinations',
            postDate: Date()
            , subredditName: 'travel'

        };
        let post8 = {
            title: 'which food is most appealing to your heart',
            body: 'comment for food lovers',
            postDate: Date()
            , subredditName: 'food'

        };
        let post9 = {
            title: 'Pizza with pineapply with or againsts??',
            body: 'for me i love it',
            postDate: Date()
            , subredditName: 'food'

        };
        let post10 = {
            title: 'The heart wants what the heart wants.'
            , body: '(Cookies. It’s always cookies.'
            , postDate: Date()
            , subredditName: 'food'

        };
        posts.create(post1);
        posts.create(post2);
        posts.create(post3);
        posts.create(post4);
        posts.create(post5);
        posts.create(post6);
        posts.create(post7);
        posts.create(post8);
        posts.create(post9);
        posts.create(post10);
        posts.create(post1);
        posts.create(post2);
        posts.create(post3);
        posts.create(post4);
        posts.create(post5);
        posts.create(post6);
        posts.create(post7);
        posts.create(post8);
        posts.create(post9);
        posts.create(post10);


        subbreddit.create({
            name: 'love', rules: ["no males are allowed", "no females are allowed"],
            date: Date(),
            posts: [post1, post2]
        });
        subbreddit.create({
            name: 'nature', rules: ["no males are allowed", "no females are allowed"],
            date: Date(),
            posts: [post3, post4]
        });

        subbreddit.create({
            name: 'travel', rules: ["no males are allowed", "no females are allowed"],
            date: Date(),
            posts: [post5, post6, post7]
        });
        subbreddit.create({
            name: 'food', rules: ["no males are allowed", "no females are allowed"],
            date: Date(),
            posts: [post8, post9, post10]
        });
        done();
    });
    afterAll(function () {
        // cleaning the database


        // closing the server
        server.close();
    });

    describe('Listing New no error', function () {
        // receiver username is undefined
        let messageTest1 = {
            startPosition: 0
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.get('http://localhost:4000/marwan/listing?type=new'
                , { json: true, body: messageTest1 }, function (error, response, body) {
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
            expect(data.body[15]).toBe(undefined);
        });
        it('Limit posts Test ', function () {
            // assuming there is at least one post we added above
            expect(data.body[0]).not.toBe(undefined);
        });

        it('Database Test for the 15 post', function () {
            for (let index = 0; index < 15; index++) {
                posts.find(data.body[index],
                    function (err, result) { expect(result).not.toBe(null); });
            }
        });

        it('testing the sorting forward test ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body[index].postDate).not.toBeLessThan(data.body[index + 1].postDate);
            }

        });
        it('testing the sorting backward technique ', function () {
            for (let index = 0; index < 14; index++) {
                expect(data.body[index].postDate).toBeGreaterThanOrEqual(data.body[index + 1].postDate);
            }

        });


    });
    describe('Listing error undefined query', function () {
        // receiver username is undefined
        let messageTest1 = {
            startPosition: 0
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.get('http://localhost:4000/marwan/listing?type=bypdsdsd'
                , { json: true, body: messageTest1 }, function (error, response, body) {
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
    describe('Listing error  usernotfound', function () {
        // receiver username is undefined
        let messageTest1 = {
            startPosition: 0
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.get('http://localhost:4000/ejjkndfjnkdfnjk/listing?type=new'
                , { json: true, body: messageTest1 }, function (error, response, body) {
                    data.status = response.statusCode;
                    data.body = body;
                    done();

                });
        });

        //  status 404 for not found
        it('Status 404', function () {
            expect(data.status).toBe(404);
        });

        it('user not found  error', function () {
            expect(data.body.error).toBe('userNotFound');
        });


    });

    describe('Listing error  postsnotfound', function () {
        // receiver username is undefined
        let messageTest1 = {
            startPosition: 0
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            posts.remove({}, function () {

                request.get('http://localhost:4000/marwan/listing?type=new'
                    , { json: true, body: messageTest1 }, function (error, response, body) {
                        data.status = response.statusCode;
                        data.body = body;

                        done();

                    });
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

});

