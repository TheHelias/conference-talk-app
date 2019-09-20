const Attendee = require('../models/attendee')
const {
    check, body, validationResult,
  } = require('express-validator');

const addAttendee = [
  check('full_name').isLength({ min: 3 }).withMessage('Please input your full name'),
  body('email').isEmail().withMessage('Type in an actual email').normalizeEmail(),

  (req, res) => {
    const errors = validationResult(req);
       if(!errors.isEmpty()) {
           res.send({ 
               errors: errors.array(),
               status: 406
        })
       } else {
    const full_name = req.body.full_name;
    const email = req.body.email;

    const attendee = new Attendee({
        full_name,
        email
    })
    attendee.save((err) =>{
        if (err) {
            return res.send({
                status: 500,
                message: 'Internal server error'
            }) 
        }
        res.send({
            status: 201,
            name: attendee.full_name
        })
    })
}
}
] 

const getAllAttendees = (req, res) => {
    Attendee.find({}, (err, attendees) => {
        if(err) {
            res.send({
                status: 500,
                message: 'Internal server error'
            })
        }
        res.send({
            status: 200,
            attendees: attendees
        });
    });

}

module.exports = {
    addAttendee,
    getAllAttendees
}