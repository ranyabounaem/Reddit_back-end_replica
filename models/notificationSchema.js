const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    username: String,
    message: String,
    read: Boolean,
    sourceID: String
});

const notification = mongoose.model('notification', notificationSchema);
module.exports = notification;