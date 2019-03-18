const User = require("../../models/UserSchema.js");
const validator = require("email-validator");

class UserHandler {
  constructor() {}

  async handleRegistration(req, res) {
    if (req.body.Password.length < 8) {
      res.send({ error: "Password too short" });
    }

    const user = await User.findOne({
      $or: [{ Username: req.body.Username }, { Email: req.body.Email }]
    });

    if (user !== null) {
      if (req.body.Username == user.Username) {
        res.send({ error: "Username already exists" });
      } else {
        res.send({ error: "Email already exists" });
      }
    } else {
      if (validator.validate(req.body.Email) == true) {
        const user = await User.create(req.body);
        res.send(user);
      } else {
        res.send({ error: "Invalid Email format" });
      }
    }
  }

  async handleLogin(req, res) {
    const user = await User.findOne({ Username: req.body.Username });

    if (user !== null) {
      if (user.Password == req.body.Password) {
        res.status(200).end();
      } else {
        res.send({ error: "Invalid Password" });
      }
    } else {
      res.send({ error: "User doesnt exist" });
    }
  }
}
module.exports = new UserHandler();
