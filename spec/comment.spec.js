// const Request = require("request");
// const Comment = require("../models/commentSchema");
// const subredditsSchema = require("../models/subredditsSchema")
// const Subreddit = subredditsSchema.Subreddit;
// const Post = subredditsSchema.SubredditPostSchema;
// const mongoose = require("mongoose");
// const ObjectId = require('mongodb').ObjectID

// //let sSubreddit name or ID whatever the thread needs
// let th_id;
// let c_id;
// let th_id2;
// let isodate=new Date().toISOString();

// let post1={
//     title: 'Football',
//     body: 'Who is the best player in the world?',
//     postDate: Date(),
//     subredditName: 'Sports'    
// };
// let post2={
//     title: 'Tennis',
//     body: 'Nadal injured again',
//     postDate: Date(),
//     subredditName: 'Sports' 
// };
// let sr={
//     name: 'Sports',
//     posts: [post1,post2],
//     date: Date()
// };

// describe("comment tests", () => {
//     let server;
//     beforeAll((done) => {
//       server = require("../index");
//       Post.create(post1).then(function(RetPost){
//         th_id=RetPost._id;
//         //console.log(th_id);
//       }).then(Post.create(post2).then(function(RetPost2){
//           th_id2=RetPost2._id;
//           //console.log(th_id2);
//       })).then(Subreddit.create(sr)).then(function(){
//           done();
//       });

//     });
//     afterAll(() => {
//         server.close();
//     });
//     describe("Initialising a Subreddit",() => {
//         //TODOO
//         //Create a new subreddit to be able to post a thread
//     });
//     describe("Initialising a Thread",() => {
//         //TODOO
//         //Create a new Thread to be able to post a Comment
//     });
//     describe("Initialising a comment to use it in the get methods",() => {
//         let data = {};
//         let testBody = {
//             content: "Mostafa",
//             spoiler: false,
//             locked: false,
//             reply: false
//         };
//         beforeAll((done) => {
//             Request.post("http://localhost:4000/comment/"+th_id,   //th_id is the thread created above
//             { json: true, body: testBody },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               c_id= data.body.c_id;
//               console.log(c_id);
//               console.log(data.body);
//               done();
//             });
//     });

//     describe("tests posting a new comment",() => {
//         let data = {};
//         let testBody = {
//             content: "Good Night3",
//             spoiler: false,
//             locked: false,
//             reply: false
//         };
//         beforeAll((done) => {
//             Request.post("http://localhost:4000/comment/"+th_id,   //th_id is the thread created above
//             { json: true, body: testBody },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               done();
//             });
//         });
//         it("status 200 test", () => {
//             expect(data.status).toBe(200);
//             //I can't expect the data.body because it brings the ID of the generated comment
//         });
//         it("Mongo test", () => {
//             Comment.findOne({content:"Good Night3"}).then(function(RetComment){
//                 expect(RetComment).not.toBe(null);
//             });
//         });
//     });
//     describe("tests posting a new comment",() => {
//         let data = {};
//         let testBody = {
//             content: "Good Night Error",
//             spoiler: false,
//             locked: false,
//             reply: false
//         };
//         beforeAll((done) => {
//             Request.post("http://localhost:4000/comment/000000hf74h7666ty3000000",    //any false thread ID
//             { json: true, body: testBody },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               done();
//             });
//         });
//         it("status 404 test", () => {
//             expect(data.status).toBe(404);
//             expect(data.body.error).toBe('There is no post with this ID');
//         });
//         it("Mongo test", () => {
//             Comment.findOne({content:"Good Night Error"}).then(function(RetComment){
//                 expect(RetComment).toBe(null);
//             });
//         });
//     });    
//     describe("tests posting a new comment",() => {
//         let data = {};
//         let testBody = {
//             content: "",                //Sending an empty comment
//             spoiler: false,
//             locked: false,
//             reply: false
//         };
//         beforeAll((done) => {
//             Request.post("http://localhost:4000/comment/"+th_id,
//             { json: true, body: testBody },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               done();
//             });
//         });
//         it("status 401 test", () => {
//             expect(data.status).toBe(401);
//             expect(data.body.error).toBe('You can not post an empty Comment');
//         });
//         it("Mongo test", () => {
//             Comment.findOne({content:""}).then(function(RetComment){
//                 expect(RetComment).toBe(null);
//             });
//         });
//     });

    
//     describe("tests posting a new comment",() => {
//         let data = {};
//         let testBody = {
//             spoiler: false,         //not sending the content of the comment
//             locked: false,
//             reply: false
//         };
//         beforeAll((done) => {
//             Request.post("http://localhost:4000/comment/"+th_id,
//             { json: true, body: testBody },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               done();
//             });
//         });
//         it("status 403 test", () => {
//             expect(data.status).toBe(403);
//             expect(data.body.error).toBe('The request must include content of the comment');
//         });
//     });

//     describe("tests getting info a comment",() => {
//         let data = {};
//         beforeAll((done) => {
//             Request.get("http://localhost:4000/comment/"+c_id,
//             { json: true },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               isodate=data.body.dateAdded;
//               done();
//             });
//         });
//         it("status 200 test", () => {
//             expect(data.status).toBe(200);
//             expect(data.body).toEqual({
//                 _id: c_id,
//                 content: "Mostafa",
//                 parent_id: th_id.toString(),
//                 dateAdded: isodate,
//                 votes: 0,
//                 spoiler: false,
//                 locked: false
//             });
//         });
//      });
//      describe("tests getting info a comment",() => {
//         let data ={};
//        beforeAll((done) => {
//            Request.get("http://localhost:4000/comment/000000hf74h7666ty3000000",    //any false Comment ID
//            { json: true },
//            (err, res, body) => {
//              data.body = body;
//              data.status = res.statusCode;
//              done();
//            });
//        });
//        it("status 404 test", () => {
//            expect(data.status).toBe(404);
//            expect(data.body.error).toBe('The Comment ID is not found');
//        });
//     });

//      describe("tests getting all comments of the thread",() => {
//          let data ={};
//         beforeAll((done) => {
//             Request.get("http://localhost:4000/comment/all/"+th_id,    //getting the comments for the created thread
//             { json: true },
//             (err, res, body) => {
//               data.body = body;
//               data.status = res.statusCode;
//               done();
//             });
//         });
//         it("status 200 test", () => {
//             expect(data.status).toBe(200);
//         });
//      });

//      describe("tests getting all comments of the thread",() => {
//         let data ={};
//        beforeAll((done) => {
//            Request.get("http://localhost:4000/comment/all/000000hf74h7666ty3000000",    //any false thread ID
//            { json: true },
//            (err, res, body) => {
//              data.body = body;
//              data.status = res.statusCode;
//              done();
//            });
//        });
//        it("status 404 test", () => {
//            expect(data.status).toBe(404);
//            expect(data.body.error).toBe('There is no post with this ID');
//        });
//     });
// });
// });