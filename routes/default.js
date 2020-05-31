'use strict';

var express = require('express');
var api = express.Router();
var DefaultController = require('../controllers/default');

var path = require('path');

// api.get('/', DefaultController.help);
api.get('/status', DefaultController.status);

api.get('/', DefaultController.help);
api.get('/app', (req, res, next) => {
    res.charset = 'utf-8';
    res.sendFile(path.join(__dirname, '../application/dist/index.html'));
})

module.exports = api;