const request = require("request");
const Comment = require("../Comments/commentSchema");
const mongoose = require("mongoose");

describe("comment tests", () => {
    let server;
    beforeAll(() => {
      server = require("../index");
    });
    afterAll(() => {
        server.close();
      });

    describe("tests posting a new comment",() => {
        let data = {};
        let testBody = {
            content: "Good Morning",
            spoiler: false,
            locked: false,
            reply: false
        };
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/:id",
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
            Comment.findOne({content:"Good Morning"}).then(function(RetComment){
                expect(RetComment).not.toBe(null);
            });
        });
    });

    describe("tests getting info a comment",() => {});

    describe("tests getting all comments of the thread",() => {});
});