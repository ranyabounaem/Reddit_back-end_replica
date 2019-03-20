const request = require("request");
const User = require("../models/UserSchema.js");
const mongoose = require("mongoose");

describe("user tests", () => {
  let server;
  beforeAll(() => {
    server = require("../index");
  });
  afterAll(() => {
    server.close();
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafa@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",{ json: true, body: testBody },(err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("checks creation of new User in database", () => {
      expect(data.status).toBe(200);

      User.findOne({$and: [{ Username: testBody.Username }, { Email: testBody.Email }]}).then(function(user) {
        expect(user).not.toBe(null);
      });
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafanew@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",{ json: true, body: testBody },(err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(406);
      expect(data.body.error).toBe("Username already exists");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafa@m.com"
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
    it("tests registering with an emial that alreadyexists", () => {
      expect(data.body.error).toBe("Email already exists");
      expect(data.status).toBe(406);
    });
  });
  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12",
      Email: "mostafanew@m.com"
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
    it("tests registering with a passwrod thats less than 8 characters", () => {
      expect(data.body.error).toBe("Password too short");
      expect(data.status).toBe(406);
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanewm.com"
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
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanew@mcom"
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
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
      expect(data.status).toBe(406);
    });
  });

  describe("tests login with non-existing user", () => {
    let data = {};
    let testBody = {
      Username: "mostafal",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.body.error).toBe("User doesnt exist");
      expect(data.status).toBe(404);
    });
  });

  describe("tests login of invalid password", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "123456789"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.body.error).toBe("Invalid Password");
      expect(data.status).toBe(401);
    });
  });

  describe("tests login of valid user", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;

          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(200);
      expect(data.body).toBe("successful login");
    });
  });
});
