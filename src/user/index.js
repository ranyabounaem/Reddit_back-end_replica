const User=require('../../models/UserSchema.js');
const express=require('express');
const validator = require("email-validator");

class UserHandler {
    constructor(){}

    handleRegistration(req, res) {
        let Check=true;

         if (req.body.Password.length<8) 
         {
             res.send("password too short");
             Check=false;
            };

         User.findOne({Username:req.body.Username}).then(function(user)
         {
                if (user!==null)
                {
                    res.send({error:'Username already exists'});
                    Check=false
                    
                }
                
         })

         User.findOne({Email:req.body.Email}).then(function(user)
         {
                if (user!==null)
                {
                    res.send({error:'Email already exists'});
                    Check=false;
                }
                else 
                {
                    if (validator.validate(req.body.Email)==false)
                    {
                        res.send({error:'Email invalid'});
                        Check=false;
                    };
                }
                
         })

         if(Check)
            { User.create(req.body).then(function(user){res.send(user);})}
            else { res.send({error:'test'});}
    }
}

module.exports = new UserHandler();
