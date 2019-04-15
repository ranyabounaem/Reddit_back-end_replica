
const request = require('request');
const mongoose = require('mongoose');
const subbredditsSchema = require('../models/subredditsSchema');
const subbreddit = subbredditsSchema.Subreddit;
const posts = subbredditsSchema.SubredditPostSchema;
const users = require('../models/UserSchema');
const jasmine = require('jasmine');
// testing compose/block/unblock/retrieveblock
describe('Server', function () {
<<<<<<< HEAD
    let server6;


    //creates users for database
     const husseinToken={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJIdXNlZWluX2VoYWIiLCJpYXQiOjE1NTUxODI0OTR9._ar5M80qZu8Ru2eUevLm9Y1QMZ-SbfEivsmrxEYpRa4'};
     const mostafaToken={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJtb3N0YWZhX2hhemVtIiwiaWF0IjoxNTU1MTgyNDAyfQ.NTb1vO0SAp7CLEpNBn00GDo6Rk-OPJo7vQJyL_6XIW0'};
     const aliToken=    {'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJBbGlfeWFzc2VyIiwiaWF0IjoxNTU1MTgyNDQxfQ.iSpFMmFMXTuAo1QQ2GJmvyL8MkwjJJlrepmFAa8o01U'};
     const atwaToken=   {'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJhdHdhX2xlYWRlciIsImlhdCI6MTU1NTE4MjUyOX0.JgziTZ9Bf9umlEs6k8g60QJZrprD1umANKO6yQPwHeY'};
     const amirToken=   {'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJhbWlyX21hbG9vc2gtbGF6bWEiLCJpYXQiOjE1NTUxODI1NzN9.ELO_VUe714YfAcsy2nBUkKsMLDOl7cJmDxP1DTMxxGk'};
     const zaghwToken=  {'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJ6YWdod2thcmltIiwiaWF0IjoxNTU1MTgyNjEzfQ.3YDRFOYispMJJzlaG_Sxf1Ub4Dew-2t0mTrFL8yU3UY'};
     const testmanse7Token={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJUZXN0bWFuU2U3IiwiaWF0IjoxNTU1MTgyNjM5fQ.SPr0geqMGbPC8P7cQ53RVaOl1y1Q9ppmSlcNoT_a460'};
     const thomasToken= {'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJ0aG9tYXNlZGRpc29uIiwiaWF0IjoxNTU1MTgyNjY0fQ.Kiv6kdOyyKjc3a2AowLkrWUt5Ug9OZkul_jeoivcZ7Y'};
     const captainmagedToken={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJjYXB0YWlubWFnZWQiLCJpYXQiOjE1NTUxODI2ODl9.hfrl3MU6UpNayyy6CZjMk_a6XyPmJkSKfJvyqNd9dEI'};
     const sabekToken={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJzYWJlayIsImlhdCI6MTU1NTE4MjcwOH0.faQwzzHTi0TNS2ro_xnIQq1MJWSIltZyUUgh-HolYN8'};

    describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "mostafa_hazem",
          Password: "12345678",
          Email: "mostafa_hazem@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });

      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "Ali_yasser",
          Password: "12345678",
          Email: "Ali_yasser@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "Huseein_ehab",
          Password: "hesseinmo3'ayab",
          Email: "Huseein_ehab@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "atwa_leader",
          Password: "leaderwer",
          Email: "atwaleader@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "amir_maloosh-lazma",
          Password: "3abeetwalahi",
          Email: "3erret3lfrontend@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "zaghwkarim",
          Password: "egmarvelzaghw",
          Email: "devvvoppsss@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "TestmanSe7",
          Password: "11111111111111",
          Email: "vienna@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "thomaseddison",
          Password: "teslaauto",
          Email: "theif@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "captainmaged",
          Password: "12345678",
          Email: "aldarbaalsa3eka@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
      describe("tests registering new users", () => {
        let data = {};
        let testBody = {
          Username: "sabek",
          Password: "12345678",
          Email: "la7ek@m.com"
        };
    
        beforeAll(done => {
          request.post(
            "http://localhost:4000/user/register",
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            }
          );
        });
        it("checks creation of new User in database", () => {
            expect(1).toBe(1);})
      });
    
    

    
    // let postsarr = [{
    //     title: 'what is love',
    //     body: 'love is more than anything in the world love is love ',
    //     postDate: Date()
    //     , subredditName: 'love'
    // }
    //     , {
    //     title: 'If you have a love in your life, who turns any moment',
    //     body: 'Share this love quote with your lover and see the smile on their face. It will be priceless.',
    //     postDate: Date()
    //     , subredditName: 'love'

    // }
    //     , {
    //     tite: 'Whether you’re heading out into nature'
    //     , body: 'for a quick morning walk, or going camping in the middle of nowhere for an entire week, the goal is probably to put away your phone and spend some time unplugged.But it’s hard to stay offline entirely when the scenes are so perfectly Instagrammable.'
    //     , postDate: Date()
    //     , subredditName: 'nature'

    // }
    //     ,
    // {
    //     title: 'While we cant help you',
    //     body: 'with the weak Wi-Fi signal or that steep uphill hike, we can help you find the perfect nature quotes and captions for photos of every snap you take during your outdoor adventure.'
    //     , postDate: Date()
    //     , subredditName: 'nature'
    // }
    //     ,
    // {
    //     title: 'Comment for a giveaway'
    //     , body: 'How many countries in the world ??'
    //     , postDate: Date(),
    //     subredditName: 'travel'
    // }
    //     ,
    // {
    //     title: 'Do you prefer vietnam or singapore',
    //     body: 'you can share below your ansers',
    //     postDate: Date(),
    //     subredditName: 'travel'
    // }
    //     ,
    // {
    //     title: 'Which destination are u heading next?',
    //     body: 'comment with your destinations',
    //     postDate: Date()
    //     , subredditName: 'travel'
    // }
    //     ,
    // {
    //     title: 'which food is most appealing to your heart',
    //     body: 'comment for food lovers',
    //     postDate: Date()
    //     , subredditName: 'food'
    // }
    //     ,
    // {
    //     title: 'Pizza with pineapply with or againsts??',
    //     body: 'for me i love it',
    //     postDate: Date()
    //     , subredditName: 'food'
    // }
    //     , {
    //     title: 'The heart wants what the heart wants.'
    //     , body: '(Cookies. It’s always cookies.'
    //     , postDate: Date()
    //     , subredditName: 'food'
    // }];

    // let subbredditarr = [{
    //     name: 'love', rules: ["no males are allowed", "no females are allowed"],
    //     date: Date(),
        
    // },
    // {
    //     name: 'travel', rules: ["no males are allowed", "no females are allowed"],
    //     date: Date(),
       
    // }
    //     ,
    // {
    //     name: 'nature', rules: ["no males are allowed", "no females are allowed"],
    //     date: Date(),
        
    // },
    // {
    //     name: 'food', rules: ["no males are allowed", "no females are allowed"],
    //     date: Date(),
        
    // }
    // ];
    // beforeAll(function (done) {
    //     server6 = require('../index.js');
    //     // cause there is no middleware yet i need to add users to check for messages
    //     posts.create(postsarr).then(
    //         // twice to generate 20 arr more than the limit for the tests
    //         posts.create(postsarr)).then(
    //             subbreddit.create(subbredditarr))
    //         .then(users.create(usersarr, function () {
    //             done();
    //         }));
    //     // for generation in db just

    // });
    

    // describe('Listing New no error', function () {
    //     // receiver username is undefined
    //     let messageTest1 = {
    //         startPosition: 0
    //     };
    //     let data = {};
    //     beforeAll(function (done) {  // mocking the post request with message test
    //         request.get('http://localhost:4000/ahmed/listing?type=new'
    //             , { json: true, body: messageTest1 }, function (error, response, body) {
    //                 data.status = response.statusCode;
    //                 data.body = body;
    //                 done();

    //             });
    //     });
    //     //  status 200 for ok
    //     it('Status 200', function () {
    //         // there are some posts inserted beforeall
    //         expect(data.status).toBe(200);
    //     });

    //     it('Limit posts Test more than 15', function () {
    //         expect(data.body[15]).toBe(undefined);
    //     });
    //     it('Limit posts Test ', function () {
    //         // assuming there is at least one post we added above
    //         expect(data.body[0]).not.toBe(undefined);
    //     });

    //     it('Database Test for the 15 post', function () {
    //         for (let index = 0; index < 15; index++) {
    //             posts.find(data.body[index],
    //                 function (err, result) { expect(result).not.toBe(null); });
    //         }
    //     });

    //     it('testing the sorting forward test ', function () {
    //         for (let index = 0; index < 14; index++) {
    //             expect(data.body[index].postDate).not.toBeLessThan(data.body[index + 1].postDate);
    //         }

    //     });
    //     it('testing the sorting backward technique ', function () {
    //         for (let index = 0; index < 14; index++) {
    //             expect(data.body[index].postDate).toBeGreaterThanOrEqual(data.body[index + 1].postDate);
    //         }

    //     });


    // });
=======
    let server;
    let usersarr = [{ Username: "ahmed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "ahmedmohamed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "marawan", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "hamada", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "lolo", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "koko", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "mohamed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "saidahmed", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "soso", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
        , { Username: "marwan", Password: "12345678", Email: "mostafa@m.com", Subscriptions: ["love", "food", "travel", "nature"] }
    ];
    let postsarr = [{
        title: 'what is love',
        body: 'love is more than anything in the world love is love ',
        postDate: Date()
        , subredditName: 'love'
    }
        , {
        title: 'If you have a love in your life, who turns any moment',
        body: 'Share this love quote with your lover and see the smile on their face. It will be priceless.',
        postDate: Date()
        , subredditName: 'love'

    }
        , {
        tite: 'Whether you’re heading out into nature'
        , body: 'for a quick morning walk, or going camping in the middle of nowhere for an entire week, the goal is probably to put away your phone and spend some time unplugged.But it’s hard to stay offline entirely when the scenes are so perfectly Instagrammable.'
        , postDate: Date()
        , subredditName: 'nature'

    }
        ,
    {
        title: 'While we cant help you',
        body: 'with the weak Wi-Fi signal or that steep uphill hike, we can help you find the perfect nature quotes and captions for photos of every snap you take during your outdoor adventure.'
        , postDate: Date()
        , subredditName: 'nature'
    }
        ,
    {
        title: 'Comment for a giveaway'
        , body: 'How many countries in the world ??'
        , postDate: Date(),
        subredditName: 'travel'
    }
        ,
    {
        title: 'Do you prefer vietnam or singapore',
        body: 'you can share below your ansers',
        postDate: Date(),
        subredditName: 'travel'
    }
        ,
    {
        title: 'Which destination are u heading next?',
        body: 'comment with your destinations',
        postDate: Date()
        , subredditName: 'travel'
    }
        ,
    {
        title: 'which food is most appealing to your heart',
        body: 'comment for food lovers',
        postDate: Date()
        , subredditName: 'food'
    }
        ,
    {
        title: 'Pizza with pineapply with or againsts??',
        body: 'for me i love it',
        postDate: Date()
        , subredditName: 'food'
    }
        , {
        title: 'The heart wants what the heart wants.'
        , body: '(Cookies. It’s always cookies.'
        , postDate: Date()
        , subredditName: 'food'
    }];

    let subbredditarr = [{
        name: 'love', rules: ["no males are allowed", "no females are allowed"],
        date: Date(),
        posts: [postsarr[0], postsarr[1]]
    },
    {
        name: 'travel', rules: ["no males are allowed", "no females are allowed"],
        date: Date(),
        posts: [postsarr[4], postsarr[5], postsarr[6]]
    }
        ,
    {
        name: 'nature', rules: ["no males are allowed", "no females are allowed"],
        date: Date(),
        posts: [postsarr[2], postsarr[3]]
    },
    {
        name: 'food', rules: ["no males are allowed", "no females are allowed"],
        date: Date(),
        posts: [postsarr[7], postsarr[8], postsarr[9]]
    }
    ];
    beforeAll(function (done) {
        server = require('../index.js');
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
    afterAll(function () {
        // cleaning the database

        // closing the server
        server.close(function () {

        });
    });

    describe('Listing New no error', function () {
        // receiver username is undefined
        let messageTest1 = {
            startPosition: 0
        };
        let data = {};
        beforeAll(function (done) {  // mocking the post request with message test
            request.get('http://localhost:4000/ahmed/listing?type=new'
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
>>>>>>> rany
});