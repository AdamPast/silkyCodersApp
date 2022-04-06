const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();

const History = require('../models/history')

router.post('/', (req, res, next) => {
    const history = new History({
        _id: new mongoose.Types.ObjectId,
        temp: req.body.temp,
        result: req.body.result,
        from: req.body.from,
        to: req.body.to        
    })
    history
    .save()
    .then(result => {
        res.status(201).json({
            wiadomosc: 'Dodano historie',
            info: result
        });
    })
    .catch((err) => res.status(500).json({error: err}))
    
});

module.exports = router;