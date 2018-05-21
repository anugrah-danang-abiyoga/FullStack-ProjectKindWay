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

router.get('/', decode, (req, res) => {
    db.getGooddeedsByUserId(req.user.user_id, req.app.get('db'))
    .then(gooddeeds => res.json(gooddeeds))
    .catch(err => res.status(500).send({message: "Server Error"}))
})


router.get('/:id', (req, res) => {
    db.getGooddeedById(req.params.id, req.app.get('db'))
    .then(gooddeed => {
        let gooddeed_to_send = {
            'id': gooddeed[0].id,
            'user_id':gooddeed[0].user_id,
            'date': gooddeed[0].date,
            'gooddeeds': JSON.parse(gooddeed.gooddeeds)
        }
        return res.json([gooddeed_to_send])})
        .catch(err => {console.log('catch', err)
    res.status(500).send({message: "Server Error"})
    })
})

router.delete('/:id', (req, res) => {
    db.deleteGooddeedById(req.params.id, req.app.get(db))
    .then(gooddeed => res.json(gooddeed))
    .catch(err => res.status(500).send({message: "Server Error"}))
})