const Talk = require('../models/talk') ;

const addTalk = (req, res) => {
    const title = req.body.title;
    const time_limit = req.body.time_limit;
    const talk = new Talk({
        title,
        time_limit
    })
    talk.save((err) =>{
        if (err) {return err;}
        res.send({
            success: true,
            title: talk.title
        })
    } )
}

module.exports = {
    addTalk
}