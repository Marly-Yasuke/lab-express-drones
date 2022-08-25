// Iteration #1
const mongoose = require('mongoose')
const {
    Schema,
    model
} = mongoose

const droneSchema = new Schema({
    name: Schema.Types.String,
    propellers: Schema.Types.Number,
    maxSpeed: Schema.Types.Number,

})

const Drone = model('drone', droneSchema)

module.exports = Drone