// Iteration #1
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model.js')

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/lab-lab-express-drones";

const drone = [{
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    },
]

mongoose
    .connect(MONGO_URI)
    .then(async (x) => {
        const newDrone = await Drone.create(drone);
        console.log(`Connected to Mongo! test try : "${x.connections[0].name}"`);
    })
    .finally(() => mongoose.connection.close())
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });

module.exports = Drone