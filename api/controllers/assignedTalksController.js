const AssignedTalk = require('../models/assigned_talks')
const {
    check, body, validationResult
  } = require('express-validator');

const assignTalk = [
  check('talk').isLength({ min: 3 }).withMessage('Please input a talk'),
  body('attendee').isLength({ min: 3 }).withMessage('input an attendees name'),

   (req, res) =>{
       const errors = validationResult(req);
       if(!errors.isEmpty()) {
           res.send({ 
               errors: errors.array(),
               status: 406
            })
       } else {
        const talk = req.body.talk;
        const attendee = req.body.attendee;
 
        const assignedTalk = new AssignedTalk({
            talk,
            attendee
         })
        assignedTalk.save((err) =>{
            if (err) {
                return res.send({
                    status: 500,
                    message: 'Internal server error'
                }) 
            }
            res.send({
                status: 201,
                success: 'talk successfully assigned'
            })
        }) 

    }
       
   }
]

const getAllAssignedTalks = (req, res) => {
    AssignedTalk.find({}, (err, assignedtalks) => {
        if(err) {
            res.send({
                status: 500,
                message: 'Internal server error'
            })
        }
        res.send({
            status: 200,
            assignedtalks: assignedtalks
        });
    });

}

module.exports = {
    assignTalk,
    getAllAssignedTalks
}