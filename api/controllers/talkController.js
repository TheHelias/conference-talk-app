const Talk = require('../models/talk') ;
const {
    check, body, validationResult,
  } = require('express-validator');

const addTalk =[
  check('title').isLength({ min: 3 }).withMessage('Please input a title. Title too short'),
  body('time_limit').isLength({ min: 2 }).withMessage('input a time limit'),

  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.send({ 
            errors: errors.array(),
            status: 406
        })
    } else {
    const title = req.body.title;
    const time_limit = req.body.time_limit;

    const talk = new Talk({
        title,
        time_limit
    })
    talk.save((err) =>{
        if (err) {
            return res.send({
                status: 500,
                message: 'Internal server error'
        })}
        res.send({
            status: 201,
            success: true,
            title: talk.title
        })
    } )
}
}
] 

const getAllTalks = (req, res) => {
    Talk.find({}, (err, talks) => {
        if(err) {
            res.send({
                status: 500,
                message: 'Internal server error'
            })
        }
        res.send({
            status: 200,
            talks: talks
        });
    });

}

const deleteTalk = (req, res) => {
    Talk.findByIdAndRemove(req.params.id)
    .then(res.redirect('/api/talks'))
        res.redirect('/api/talks')
}

module.exports = {
    addTalk,
    getAllTalks,
    deleteTalk
}