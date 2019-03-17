const User=require('../../models/UserSchema.js');
const express=require('express');
const validator = require("email-validator");

class UserHandler {
    constructor(){

    }

    handleRegistration(req, res) {
        
         if (req.body.Password.length<8) {res.send("password too short");};

         User.findOne({Username:req.body.Username}).then(function(user)
         {
                if (user!==null)
                {
                    res.send({error:'Username already exists'});
                    res.end();
                }
                
         })

         User.findOne({Email:req.body.Email}).then(function(user)
         {
                if (user!==null){res.send({error:'Email already exists'});}
                else 
                {
                    if (validator.validate(req.body.Email)==false)
                    {res.send({error:'Email invalid'});};
                }
                
         })

   User.create(req.body).then(function(user){res.send(user);})
    }
}

module.exports = new UserHandler();
