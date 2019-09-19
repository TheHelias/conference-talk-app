const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AttendeeSchema = new Schema({
    full_name: {
      type: 'String',
      required: true,
      trim: true
    },
    email: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    }
  });

AttendeeSchema
.virtual('url')
.get(function () {
  return '/attendees/' + this._id;
});


  module.exports = mongoose.model('Attendee', AttendeeSchema);