const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignedTalksSchema = new Schema({
    talk: {
        type: 'String', 
        required: true
    },

    attendee: {
        type: 'String',
        required: true
    }
});

module.exports = mongoose.model('AssignedTalk', AssignedTalksSchema);