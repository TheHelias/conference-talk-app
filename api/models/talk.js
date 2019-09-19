const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TalkSchema = new Schema({
    title: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    },
    time_limit: {
      type: 'String',
      required: true,
      trim: true
    }
  });

TalkSchema
.virtual('url')
.get(function () {
  return '/talks/' + this._id;
});


module.exports = mongoose.model('Talk', TalkSchema);