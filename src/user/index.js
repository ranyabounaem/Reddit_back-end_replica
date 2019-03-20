const User = require("../../models/UserSchema.js");
const validator = require("email-validator");

class UserHandler {
  constructor() {}

  async handleRegistration(req, res) {
   

    const user = await User.findOne({
      $or: [{ Username: req.body.Username }, { Email: req.body.Email }]
    });

    if (user !== null) {
      if (req.body.Username == user.Username) {
        res.status(406).send({ error: "Username already exists" });
      } else {
        res.status(406).send({ error: "Email already exists" });
      }
    } else {
      if (validator.validate(req.body.Email) == true) 
      {  if (req.body.Password.length < 8) {
        res.status(406).send({ error: "Password too short" });
      }
      else {
        const user = await User.create(req.body);
        res.status(200).send({"Username":user.Username,"Email":user.Email});
      }
      } else {
        res.status(406).send({ error: "Invalid Email format" });
      }
    }
  }

  async handleLogin(req, res) {
    const user = await User.findOne({ Username: req.body.Username });

    if (user !== null) {
      if (user.Password == req.body.Password) {
        res.status(200).send("successful login");
      } else {
        res.status(401).send({ error: "Invalid Password" });
      }
    } else {
      res.status(404).send({ error: "User doesnt exist" });
    }
  }
  EditUserEmail(req, res){
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      if(RetUser === null){
        res.send({ "error": "UserNotFound"});
      }
      else{
        User.findOne({ Email: req.body.Email } ).then(function(RetEmail){
          if(RetEmail === null)
          {
            if (validator.validate(req.body.Email) == true) {
              User.findOneAndUpdate(
                {Username: req.params.Username },
                {Email: req.body.Email }).then(function(RetUser){
                  //TODO RETURN 200
                    res.send("update succesful");
                  }); 
            } 
            else {
              res.send({ error: "Invalid Email format" });
            }
                
          }
          else{
            res.send({"error" : "Email already exists"});

          }
        });
      }

    });
  }

  EditUserPassword(req, res){
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      if(RetUser === null){
        res.send({ "error": "UserNotFound"});
      }
      else if (RetUser.Password !== req.body.OldPassword)
      {
        res.send({ "error": "Wrong Password"});
      }
      else if (req.body.NewPassword.length < 8) {
          res.send({ error: "Password too short" });
      }
      else {
        User.findOneAndUpdate(
          {Username: req.params.Username },
          {Password: req.body.NewPassword }).then(function(RetUser){
            //TODO RETURN 200
              res.send("Password succesfully updated");
            });

      }

    });
  }
  Getmyinfo(req, res){
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      if(RetUser === null){
        res.send({ "error": "UserNotFound"});
      }
      else{
        res.send({Username:req.params.Username ,Email:RetUser.Email});
      }
      
    });
  }
  

}
module.exports = new UserHandler();
