const express = require('express')
const router = express.Router()

// require the Drone model here

router.get('/', async (req, res, next) => {
  try {
    const allDrones = await Drone.find({})
    return res.status(200).json(allDrones)
  } catch (error) {
    next(error)
  }
})

router.post('/drones', async (req, res, next) => {
  try {
    const addDrone = req.body;
    const newDrone = await Drone.create({
      name: addDrone.name,
      propellers: addDrone.propellers,
      maxSpeed: addDrone.maxSpeed,
    });
    console.log(newDrone)
    return res.status(200).json(newDrone)
  } catch (error) {
    next(error)
  }
})



router.post('/drones/:id', async (req, res, next) => {
  try {
    const {id} = req.params.id;
    console.log("this is the body ", req.body)
    const updatedDrone = await Drone.findByIdAndUpdate(id, req.body,{new : true});
    if (!updatedDrone) {
      res.status(404).json({ message: "id not found" });
    } else {
      res.status(200).json({message : ' Drone is updated !', updatedDrone: updatedDrone});
    }
  } catch(error) {
    next(error);
  }
})

router.delete('/drones/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    const deleteDrone = await Drone.findByIdAndDelete(id);
    if (!deleteDrone) {
      res.status(404).json({ message: "id not found" });
    } else {
      res.status(200).json({message : 'Your drone is removed !', deleteDrone: deleteDrone});
    }
  } catch(error) {
    next(error);
  }
})

module.exports = router