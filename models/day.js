const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const daySchema = new Schema({
    day: String,
    date:  {type: Date, default: Date.now},
    time: String,
    food: [
        { ref: 'Food', type: Schema.Types.ObjectId}
    ]
})

const Day = mongoose.model('Day', daySchema)

module.exports = Day