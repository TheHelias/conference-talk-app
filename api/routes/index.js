const talkController = require('../controllers/index').talk
var express = require('express');
const app = express.Router();

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the  ServiceMart API!',
  }));
app.post('/api/addtalk', talkController.addTalk);

module.exports = app;
