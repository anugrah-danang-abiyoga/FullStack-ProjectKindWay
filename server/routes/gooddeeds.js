var router = require('express').Router()
var {decode} = require('../auth/token')

var db = require('../db/gooddeeds')

//save good deed to the database 
router.post('/', decode, (req, res) => {
    let newGooddeed = {
        'user_id': req.user.user_id,
        'date': req.body.date,
        'gooddeeds': JSON.stringify(req.body.gooddeeds)
    }

    db.addGooddeeds(newGooddeed, req.app.get('db'))
    .then(deed => {
        return res.status(201).json(deed)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
})

module.exports = router