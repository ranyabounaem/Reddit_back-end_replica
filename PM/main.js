const mongoose = require('mongoose');
const pmDb = require('./PMmongo');    // differ when u are running on another pc
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const privateMessage = require('./Pm');
const urlEncoded = bodyParser.urlencoded({ extended: true });
mongoose.connect('mongodb://localhost/KefahDbPm');
mongoose.connection.once('open', function () {

    console.log('connection carried succesfully');
}).on('error', function () {

    console.log('connection error:');
});
app.use(bodyParser.json()); // for parsing application/json
var server = app.listen(3000);

app.get('/:username/pm', (req, res) => privateMessage.retrieve(req, res));
app.post('/:username/pm/compose', urlEncoded, (req, res) => privateMessage.compose(req, res));
app.get('/:username/pm/blocklist', (req, res) => privateMessage.retrieveBlock(req, res));
app.post('/:username/pm/block', urlEncoded, (req, res) => privateMessage.block(req, res));
app.put('/:username/pm/markread',(req, res) => privateMessage.markread(req, res));
app.put('/:username/pm/markreadall',(req, res) => privateMessage.markreadall(req, res));
app.delete('/:username/pm/delete',(req, res) => privateMessage.delete(req, res));

module.exports = server;