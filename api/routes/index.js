const talkController = require('../controllers/index').talkController
const attendeeController = require('../controllers/index').attendeeController
const assignedTalksController = require('../controllers/index').assignedTalksController
var express = require('express');
const app = express.Router();

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Intelligent Innovations Conference API!',
  }));

app.post('/api/add_attendee', attendeeController.addAttendee);
app.post('/api/add_talk', talkController.addTalk);
app.post('/api/assign_talk', assignedTalksController.assignTalk);
app.get('/api/talks', talkController.getAllTalks);
app.get('/api/attendees', attendeeController.getAllAttendees);
app.get('/api/assigned_talks', assignedTalksController.getAllAssignedTalks);
app.post('/api/talks/:id', talkController.deleteTalk);
module.exports = app;
