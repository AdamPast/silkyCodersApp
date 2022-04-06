const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    temp:{
        type: String,
        required: true
    },
    result:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("History", historySchema)