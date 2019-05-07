const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('../JWT/giveToken');
const getUser = jwt.getUsernameFromToken;
const notification = require('../models/notificationSchema');
const ObjectId = require('mongodb').ObjectID;
const webpush = require('web-push');



class notificationHandler {
    constructor() {
        // VAPID keys should only be generated only once.
        // this.vapidKeys = {
        //     publicKey: 'BER0W2tD4sWrG7dYLjSp4avRvtjovXykHkxC9yUKoHjuM5or977KdoShVn_d4XUkWDDMcjrs8-dyjlkXbqD-5ZA',
        //     privateKey: 'OPVChfpRX8j3oiRJza_HxqrW2jTxn7N_BsEX9kht_AA'
        // }

        // webpush.setGCMAPIKey('<Your GCM API Key Here>');
        // webpush.setVapidDetails(
        //     'mailto:m.atwa@articlebox.net',
        //     this.vapidKeys.publicKey,
        //     this.vapidKeys.privateKey
        // );

        // // This is the same output of calling JSON.stringify on a PushSubscription
        // const pushSubscription = {
        //     endpoint: '.....',
        //     keys: {
        //         auth: '.....',
        //         p256dh: '.....'
        //     }
        // };

        // webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
    }
    handleGetNotification(req, res) {
        let user = getUser(req);
        let startPosition;
        if (req.query.startPosition == undefined) {
            startPosition = 0;
        } else {
            startPosition = req.query.startPosition;
        }
        notification.find({ username: user }).limit(15).skip(startPosition * 15).then(function (retNotifs) {
            if (retNotifs == null) {
                res.status(404).send({ 'error': 'You do not have any Notifications' });
            } else {
                res.status(200).send({ notifications: retNotifs });
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
                    res.status(200).json({ "message": "marked read successfully" });
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
                    res.status(200).json({ "message": "marked unread successfully" });
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
                res.status(200).json({ "message": "All notifications marked read successfully" });
            }
        });
    }
}
module.exports = new notificationHandler();