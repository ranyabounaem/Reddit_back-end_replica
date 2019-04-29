const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;
const notification = require('../models/notificationSchema');
const ObjectId = require('mongodb').ObjectID;


class notificationHandler {
    constructor() {

    }
    handleGetNotification(req, res) {
        let user = getUser(req);
        let startPosition;
        if (req.body.startPosition == undefined) {
            startPosition = 0;
        } else {
            startPosition = req.body.startPosition;
        }
        notification.find({ username: user }).limit(15).skip(startPosition * 15).then(function (retNotifs) {
            if (retNotifs == null) {
                res.status(404).send({ 'error': 'You do not have any Notifications' });
            } else {
                res.status(200).send({notifications:retNotifs});
            }
        });
    }

    handleReadNotification(req, res) {
        let user = getUser(req);
        //Checking if the sent string is a valid ObjectID (12 or 24 bytes)
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            //creating variable ID which contains the notification ID sent in the url
            let ID = new ObjectId(req.params.id);
            notification.findOneAndUpdate({ $and: [{ _id: ID }, { username: user }] }, { read: true }).then(function (retNotif) {
                if (retNotif == null) {
                    res.status(404).send({ 'error': 'There is no Notification with this ID for this user' });
                } else {
                    res.status(200).json("marked read successfully");
                }
            });
        }
    }

    handleUnreadNotification(req, res) {
        let user = getUser(req);
        //Checking if the sent string is a valid ObjectID (12 or 24 bytes)
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).send({ 'error': 'This is not a valid ID' });
        } else {
            //creating variable ID which contains the notification ID sent in the url
            let ID = new ObjectId(req.params.id);
            notification.findOneAndUpdate({ $and: [{ _id: ID }, { username: user }] }, { read: false }).then(function (retNotif) {
                if (retNotif == null) {
                    res.status(404).send({ 'error': 'There is no Notification with this ID for this user' });
                } else {
                    res.status(200).json("marked unread successfully");
                }
            });
        }
    }

    handleReadAllNotifications(req, res) {
        let user = getUser(req);
        notification.updateMany({ username: user }, { read: true }).then(function (retNotif) {
            if (retNotif == null) {
                res.status(404).send({ 'error': 'There is no Notification for this user' });
            } else {
                res.status(200).json("All notifications marked read successfully");
            }
        });
    }
}
module.exports = new notificationHandler();