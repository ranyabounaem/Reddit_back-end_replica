const Request = require("request");
const Comment = require("../Comments/commentSchema");
const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID

let th_id='619';
let c_id;
let isodate=new Date().toISOString();

describe("comment tests", () => {
    let server;
    beforeAll(() => {
      server = require("../index");
    });
    afterAll(() => {
        server.close();
    });
    describe("Initialising a thread and some comments to it for the get methods",() => {
        let data = {};
        let testBody = {
            content: "Mostafa",
            spoiler: false,
            locked: false,
            reply: false
        };
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/"+th_id,
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              c_id= data.body.c_id;
              console.log(c_id);
              done();
            });
    });

    describe("tests posting a new comment",() => {
        let data = {};
        let testBody = {
            content: "Good Night3",
            spoiler: false,
            locked: false,
            reply: false
        };
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/"+th_id,
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            });
        });
        it("status 200 test", () => {
            expect(data.status).toBe(200);
            //I can't expect the data.body because it brings the ID of the generated comment
        });
        it("Mongo test", () => {
            Comment.findOne({content:"Good Night3"}).then(function(RetComment){
                expect(RetComment).not.toBe(null);
                //c_id= RetComment._id; //To use it in testing get comment below
                //c_date= RetComment.dateAdded;
                console.log(RetComment.parent_id);
            });
        });
    });

    
    describe("tests posting a new comment",() => {
        let data = {};
        let testBody = {
            content: "",
            spoiler: false,
            locked: false,
            reply: false
        };
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/"+th_id,
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            });
        });
        it("status 401 test", () => {
            expect(data.status).toBe(401);
            expect(data.body.error).toBe('You can not post an empty Comment');
        });
        it("Mongo test", () => {
            Comment.findOne({content:""}).then(function(RetComment){
                expect(RetComment).toBe(null);
            });
        });
    });

    
    describe("tests posting a new comment",() => {
        let data = {};
        let testBody = {
            spoiler: false,
            locked: false,
            reply: false
        };
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/"+th_id,
            { json: true, body: testBody },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              done();
            });
        });
        it("status 403 test", () => {
            expect(data.status).toBe(403);
            expect(data.body.error).toBe('The request must include content of the comment');
        });
    });

    describe("tests getting info a comment",() => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:4000/comment/"+c_id,
            { json: true },
            (err, res, body) => {
              data.body = body;
              data.status = res.statusCode;
              isodate=data.body.dateAdded;
              done();
            });
        });
        it("status 200 test", () => {
            expect(data.status).toBe(200);
            expect(data.body).toEqual({
                _id: c_id.toString(),
                content: "Mostafa",
                parent_id: '619',
                dateAdded: isodate,
                votes: 0,
                spoiler: false,
                locked: false
            });
            console.log(c_id);
        });
     });

     describe("tests getting all comments of the thread",() => {});
});
});