const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;
const notification = require('../models/notificationSchema');


class notificationHandler {
    constructor(){

    }
    handleGetNotification(req, res){
        let user= getUser(req);
        let startPosition;
        if(req.body.startPosition == undefined){
            startPosition=0;
        }else{
            startPosition=req.body.startPosition;
        }
        notification.find({username: user}).limit(15).skip(startPosition*15).then(function(retNotifs){
            if(retNotifs==null){
                res.status(404).send({'error':'You do not have any Notifications'});
            }else{
                res.status(200).send(retNotifs);
            }
        });
    }
}
module.exports = new notificationHandler();